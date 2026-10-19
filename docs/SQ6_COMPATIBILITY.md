# RACKFORGE LIVE SQ-6 Compatibility Notes

## What the SQ-6 Already Provides

The Allen & Heath SQ-6 includes a modern digital mixer architecture with:

- channel processing and routing
- EQ, gate, compressor, and dynamics blocks on channels and groups
- multitrack USB audio and insert routing support
- network control abilities on supported devices and firmware
- built-in effects, ambient processing, and useful onboard tools for live mixing

These are standard mixer capabilities. They are not re-created by RACKFORGE LIVE as a replacement.

## What RACKFORGE LIVE Adds

RACKFORGE LIVE is intended to provide additional, external processing and visual workflow layers such as:

- custom rack modules designed as an external processing chain
- configurable plugin order and rack-style control surface
- visual demonstration mode for live-sound workflows
- extra processing ideas beyond the standard SQ mixer stock tools
- local DSP and plugin management on the host computer

## What Requires a Computer

- external audio processing and custom rack modules
- local DSP processing chain
- advanced visualisation
- local preset management
- optional routing and diagnostics interfaces

## What Requires USB Audio

- direct audio transport from the SQ-6 into the host computer
- input path to the external rack
- return path back to the SQ console

## What Requires Network Control

- SQ network discovery or manual IP control via official protocol support
- mixer status and channel feedback access
- command validation and reconnect handling

## Current Implementation Status

This repository currently includes:

- a front-end rack interface and module registry
- a compatibility document and architecture outlines
- a native-engine scaffold
- a desktop bridge outline
- documentation for honest limitations

The following are not verified in this environment:

- live SQ-6 USB audio connection
- live control protocol communication with actual hardware
- low-latency DSP operation on an actual host system
- final audio routing confirmation on a console

## Standard practice note

Do not treat the SQ-6 as a generic computer audio interface for every processing task. The mixer’s native USB patching and insert routing must be configured correctly, and the routing must be validated with actual meters before relying on it for a live service.
