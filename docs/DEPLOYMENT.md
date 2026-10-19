# RACKFORGE LIVE Deployment Guide

## Frontend Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, import the repository.
3. Set the project root to `web/`.
4. Use the default Vite build settings.
5. Set framework to `Vite` and the build command to `npm run build`.
6. Publish the project.

## Important limitation

The Vercel deployment is a public web frontend for demonstration mode. It does not execute the native audio engine or access local audio devices.

## Local Desktop Audio Usage

The desktop host and native engine must be run on the user’s local system so the machine can access the SQ-6 USB device and local audio backend.
