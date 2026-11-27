#!/usr/bin/env python3
"""Read-only check of an exported AI-D snapshot against a fixed Git blob manifest."""
import argparse, hashlib, json, os, re
from pathlib import Path

def check(root, manifest):
    root = Path(root).resolve(strict=True)
    if not root.is_dir():
        raise ValueError("root must be a directory")
    result = {"expected": len(manifest["files"]), "matched": 0, "missing": [], "changed": [], "unsafe": [], "errors": []}
    seen = set()
    for entry in manifest["files"]:
        rel = entry["path"]
        parts = rel.split("/")
        if (not rel or rel in seen or any(p in ("", ".", "..") for p in parts)
                or "\\" in rel or ":" in rel or not re.fullmatch(r"[0-9a-f]{40}", entry["sha"])):
            result["unsafe"].append(rel)
            continue
        seen.add(rel)
        p = root
        try:
            for component in parts:
                p = p / component
                if p.is_symlink():
                    raise ValueError("symlink in expected path")
            if not p.exists():
                result["missing"].append(rel)
                continue
            if not p.is_file() or not p.resolve().is_relative_to(root):
                raise ValueError("not a regular file within root")
            b = p.read_bytes()
            digest = hashlib.sha1(("blob %d\0" % len(b)).encode("ascii") + b).hexdigest()
            if digest == entry["sha"] and len(b) == entry["bytes"]:
                result["matched"] += 1
            else:
                result["changed"].append({"path": rel, "actual_sha": digest, "actual_bytes": len(b)})
        except (OSError, ValueError) as e:
            result["errors"].append({"path": rel, "error": str(e)})
    result["pass"] = result["matched"] == result["expected"] and not any(result[k] for k in ("missing", "changed", "unsafe", "errors"))
    result["scope"] = "expected file paths and byte content only; extra files, modes, Git history, hidden product state, semantics and permissions not verified"
    return result

if __name__ == "__main__":
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("root", help="isolated exported snapshot directory")
    p.add_argument("manifest", help="fixed snapshot JSON manifest")
    a = p.parse_args()
    result = check(a.root, json.loads(Path(a.manifest).read_text(encoding="utf-8")))
    print(json.dumps(result, ensure_ascii=False, indent=2))
    raise SystemExit(0 if result["pass"] else 1)
