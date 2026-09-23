# Car Dealership Simulator Agent Guide

This repository is a React + Vite game prototype for a dealership-management simulator. Use the project roadmap in [docs/gameplan.md](docs/gameplan.md) and the phased implementation notes in [docs/implementation.md](docs/implementation.md) as the source of truth for future feature work.

## Project goal

Start from a small used-car operation and grow toward a multi-location automotive empire. The current game loop focuses on vehicle acquisition, pricing, negotiation, sale accounting, and the business day cycle.

## Current status

The project is currently in the early progression milestone: the game has
- startup selection,
- local save/restore,
- vehicle buying and selling,
- listing/pricing behavior,
- customer offers and negotiation,
- daily overhead and the `NEXT_DAY` progression loop.

Next priority features should continue from the roadmap:
1. customer traffic generation,
2. reputation and negotiation quality,
3. vehicle condition / repairs,
4. employee and upgrade systems,
5. multi-location growth and franchise progression.

## Working rules for future agents

- Read [docs/gameplan.md](docs/gameplan.md) before implementing new systems.
- Keep changes incremental and test-backed.
- Prefer small, verifiable gameplay additions over large rewrites.
- Follow the existing state/reducer pattern in [src/game/reducer.js](src/game/reducer.js) and [src/game/state.js](src/game/state.js).
- Do not add feature logic outside the reducer/state flow unless the UI truly requires it.
- Preserve localStorage save compatibility unless a migration is explicitly required.

## Testing and verification

Before claiming a task is complete, run:
- `npm test -- --run`
- `npm run lint`
- `npm run build`

Use Vitest as the primary regression tool. Add or update a failing test before implementing a new gameplay feature when possible.

## Repository map

- [src/App.jsx](src/App.jsx): app shell, main dispatch flow
- [src/components](src/components): UI panels and game screens
- [src/game/content.js](src/game/content.js): static game data for locations, states, careers, vehicles, customers
- [src/game/state.js](src/game/state.js): initial game setup and helper logic
- [src/game/reducer.js](src/game/reducer.js): game rules and actions
- [src/game/storage.js](src/game/storage.js): local save/load helpers
- [src/game/reducer.test.js](src/game/reducer.test.js): reducer regression suite

## Recommended next implementation path

After the current day-cycle milestone, continue with the Phase 6+ roadmap:
- customer generation tied to day progression,
- dynamic offer quality based on customer patience and vehicle fit,
- reputation score influencing sales and future demand,
- repair/condition layer for inventory management,
- employee system and dealership upgrades.

Keep the game loop simple, readable, and testable. The design goal is a strong early game that can be expanded without needing major refactors.
