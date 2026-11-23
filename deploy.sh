#!/bin/sh
# Build the site and copy it to the repo root, which GitHub Pages serves.
set -e
cd "$(dirname "$0")/source" && npx astro build && python3 tests/smoke.py && cp -r dist/. .. && touch ../.nojekyll
