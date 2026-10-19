# RACKFORGE LIVE Architecture Overview

## Overview

RACKFORGE LIVE is designed with a layered architecture:

1. Public web frontend for rack UI and plugin presentation
2. Local desktop host for engine lifecycle management
3. Native audio engine for DSP processing and device control
4. SQ-6 integration layer for documented protocols and routing requirements

## Boundaries

- The web app is deployable via Vercel and should work in demo mode without local hardware.
- The native engine must run locally on the host machine.
- USB audio and network control remain separate concerns.
- The app must display honest status and warnings when a feature is not supported or verified.

## Standard Operating Principle

Never claim a feature works if it has not been validated. Use demo-safe messaging and explicit indicator states.
