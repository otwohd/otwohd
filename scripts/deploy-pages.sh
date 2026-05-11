#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PUBLISH_DIR="$ROOT_DIR/dist/public"
WORKTREE_DIR="$(mktemp -d)"
CURRENT_BRANCH="$(git -C "$ROOT_DIR" branch --show-current)"

cleanup() {
  git -C "$ROOT_DIR" worktree remove --force "$WORKTREE_DIR" >/dev/null 2>&1 || true
  rm -rf "$WORKTREE_DIR"
}
trap cleanup EXIT

if [[ "$CURRENT_BRANCH" != "main" ]]; then
  echo "deploy:pages must be run from the main branch. Current branch: $CURRENT_BRANCH" >&2
  exit 1
fi

if [[ -n "$(git -C "$ROOT_DIR" status --porcelain)" ]]; then
  echo "Working tree has uncommitted changes. Commit main branch changes before deploying." >&2
  git -C "$ROOT_DIR" status --short >&2
  exit 1
fi

git -C "$ROOT_DIR" fetch origin main gh-pages --prune

pnpm -C "$ROOT_DIR" build:pages

git -C "$ROOT_DIR" worktree add "$WORKTREE_DIR" gh-pages

find "$WORKTREE_DIR" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -a "$PUBLISH_DIR"/. "$WORKTREE_DIR"/

git -C "$WORKTREE_DIR" add -A
if git -C "$WORKTREE_DIR" diff --cached --quiet; then
  echo "No GitHub Pages changes to deploy."
else
  git -C "$WORKTREE_DIR" commit -m "deploy: update GitHub Pages build"
  git -C "$WORKTREE_DIR" push origin gh-pages
fi

echo "GitHub Pages deployment is up to date: https://otwohd.github.io/otwohd/"
