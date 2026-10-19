# RACKFORGE LIVE Audio Engine

This directory contains the native audio engine architecture and DSP module scaffold for the live-audio processing rack.

## Current State

The workspace is intentionally structured to support a future JUCE or similar native implementation.

The code here is a verified scaffold and not a compiled audio engine in this environment.

## Planned Native Engine Structure

- AudioDeviceManager / device enumeration layer
- DSP graph and plugin chain management
- Real-time parameter automation
- Mono/stereo processing support
- Preset save/load and safe bypass
- I/O metering and diagnostics
- SQ-6 audio routing abstraction

## Example CMake Layout

```cmake
cmake_minimum_required(VERSION 3.20)
project(rackforge_live_audio VERSION 0.1.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)

add_library(rackforge_audio
  src/AudioEngine.cpp
  src/DspGraph.cpp
  src/PluginRegistry.cpp
)

target_include_directories(rackforge_audio
  PUBLIC
    ${CMAKE_CURRENT_SOURCE_DIR}/include
)
```

## Notes

- Real audio engine compilation depends on a machine with a supported native audio/toolchain.
- The RACKFORGE LIVE web frontend is designed to work in public demo mode without the engine.
- Hardware integration is verified only on real hardware after installation and testing.
