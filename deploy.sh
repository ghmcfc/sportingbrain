#!/bin/sh
# Build the site and copy it to the repo root, which GitHub Pages serves.
# F1 pages stay off the live site until OpenF1/Jolpica allow commercial use (set F1_ENABLED=1 then).
set -e
cd "$(dirname "$0")/source" && npx astro build && python3 tests/smoke.py
[ "$F1_ENABLED" = "1" ] || rm -rf dist/f1
cp -r dist/. .. && touch ../.nojekyll
[ "$F1_ENABLED" = "1" ] || rm -rf ../f1
