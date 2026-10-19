# RACKFORGE LIVE Desktop Bridge

This component is the local bridge between the web frontend and the native audio engine.

## Responsibilities

- local IPC / WebSocket host
- process status and safe stop
- device enumeration requests
- engine start/stop and parameter dispatch
- error and diagnostics export
- separation of web deployment from local audio processing

## Safety Requirements

- no public unauthenticated control endpoint
- local loopback host only
- explicit user action required before routing audio to the output
- clear bypass on disconnect or engine error

## Example Architecture

```ts
const bridge = {
  mode: 'demo',
  connect() {
    return { ok: true, engine: 'scaffolded', status: 'demo-safe' };
  },
  toggleBypass() {
    return { ok: true };
  },
};
```

This is a placeholder scaffold; actual live-engine integration requires desktop runtime support and native bindings.
