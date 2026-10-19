# RACKFORGE LIVE

A production-oriented external audio rack for the Allen & Heath SQ-6.

This repository contains a web frontend scaffold, DSP module definitions, compatibility research, a native engine architecture, a desktop bridge outline, and a verification-first documentation set.

## Repository Structure

- `web/` — React + TypeScript + Vite frontend for rack UI and plugin demos
- `audio-engine/` — native audio engine architecture and DSP module scaffold
- `desktop-bridge/` — local IPC/WebSocket bridge and host integration outline
- `tests/` — automated checks for module registry and DSP metadata
- `docs/` — SQ-6 compatibility, deployment, hardware verification, troubleshooting

## Current Verification Status

This repository intentionally separates verified functionality from unverified hardware integration:

- Verified: project structure, front-end build scaffold, plugin registry, route layout, demo-mode UI, TypeScript and test setup, documentation framework
- Not yet verified in this environment: actual SQ-6 USB audio device connection, live native audio processing, low-latency engine on the host, physical hardware control integration

The app is designed to expose demonstration mode publicly without claiming live SQ-6 connectivity. Local hardware processing is required for production audio use.

## Quick Start

```bash
cd web
npm install
npm run dev
```

## Production Frontend Build

```bash
cd web
npm run build
```

## Documentation

See the `docs/` directory for:

- `SQ6_COMPATIBILITY.md`
- `DEPLOYMENT.md`
- `HARDWARE_VERIFICATION_CHECKLIST.md`
- `TROUBLESHOOTING.md`
- `ARCHITECTURE.md`

## Important Safety Notice

RACKFORGE LIVE is a live-audio assistance system, not a replacement for proper microphone placement, gain structure, or careful monitoring. Feedback prevention, clipping avoidance, and system safety remain the responsibility of the operator and the mixing console configuration.

## License

MIT
