#!/bin/sh
set -eu
cd "$(dirname "$0")/.."
message=$(mktemp)
trap 'rm -f "$message"' EXIT HUP INT TERM
for subject in 'feat: DE-123 add booking' 'fix(api): DE-09901 handle empty requests' 'feat(api)!: DE-7 change contract' 'docs: DE-42 update guide' 'revert: DE-88 undo booking'; do
    printf '%s\n' "$subject" > "$message"
    sh .githooks/commit-msg "$message"
done
for subject in '' 'update stuff' 'unknown: DE-123 message' 'feat: ' 'feat(): DE-123 message' 'feat: add booking' 'feat: de-123 wrong case' 'feat: DE-ABC wrong id' 'feat: DE-123  double space'; do
    printf '%s\n' "$subject" > "$message"
    if sh .githooks/commit-msg "$message" 2>/dev/null; then
        echo "Invalid subject accepted: $subject" >&2
        exit 1
    fi
done
echo 'Commit convention checks passed.'
