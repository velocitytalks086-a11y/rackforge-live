# RACKFORGE LIVE Troubleshooting Guide

## Frontend cannot load

- Run `npm install` inside `web/`.
- Confirm Vite is installed correctly.
- Confirm project root is set correctly in deployment.

## Local host is not detecting audio devices

- Verify the local system has the required native audio backend support.
- Confirm the device is not already in use by another application.
- Test another host application to confirm audio device availability.

## SQ-6 connection is not present

- A live SQ-6 connection is not implemented in this repository as verified hardware integration.
- This environment does not include a physical mixer, so the compatibility claims remain documented as unverified.

## Presets or parameter changes seem missing

- The current project uses a frontend scaffold and demo-safe state model.
- Real DSP update wiring requires a native engine and desktop bridge accessible on the local machine.
