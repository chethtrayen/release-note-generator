# Release note generator

This application generate a release note from new and old releases.

## Features

- Prune pre-existing notes
- Parse duplicated task
- Generate a release notes from unique tasks

## How to use

1. Copy and paste newly generated release note into `new-release.txt`

2. Copy and paste old release note into `old-release.txt`

3. run `node generator.js`

4. This will generate a `release-note.txt` and `release-note-dup.txt`

- `release-note-dup.txt` contains multiple existing tasks from `new-release.txt`. You should review, copy. and paste the commit logs into the `release-note.txt`
