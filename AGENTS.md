# AGENTS.md — Etch A Sketch

## Build / Run
- No build step; open `index.html` directly in a browser.
- No package manager, bundler, tests, or linter configured.

## Architecture
- **Single-page vanilla JS/CSS/HTML app** — an interactive Etch A Sketch drawing grid.
- `index.html` — markup: title bar, drawing container (`#cell-container`), color-mode buttons, resize input.
- `script.js` — all logic: grid creation (`createCanvas`), color modes (black/gray/rainbow/erase), resize & reset handlers.
- `main.css` — styling: layout, buttons, grid cells (`.cell-container`, `.cell`).
- Grid cells are dynamically created `<div>`s inside `#cell-container`; coloring happens via `mouseover` events.

## Code Style
- Vanilla JS (no frameworks/libraries); no modules — everything is in global scope.
- Functions use `camelCase`; CSS uses kebab-case for classes, camelCase ids.
- Inline `onclick` attributes in HTML for color-mode buttons; `addEventListener` in JS for resize/reset.
- No TypeScript, no linting config, no formatting config.
- Grid size constrained to 2–100; validated with `Number.isInteger` and range checks in `createCanvas`.
- Colors returned as raw CSS strings (`"black"`, `"gray"`, `rgb(...)`, or `""` for erase).
- DOM references obtained via `getElementById`; cells styled with inline `width`/`height`/`backgroundColor`.
