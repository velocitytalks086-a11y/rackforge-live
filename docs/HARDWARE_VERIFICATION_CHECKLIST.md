# RACKFORGE LIVE Hardware Verification Checklist

This checklist is designed for a real hardware validation session with the Allen & Heath SQ-6.

## Pre-flight

- Confirm the SQ-6 firmware is up to date.
- Confirm USB-B cable integrity and connection.
- Confirm the host computer can enumerate the SQ-6 USB device.
- Confirm sample rate and buffer size are set to supported values.
- Confirm the user has a clear local bypass path.

## Audio Path

- Connect SQ-6 USB audio to the host.
- Confirm input and output device detection.
- Verify meters respond to a real audio source.
- Validate stereo and mono configurations.
- Verify return routing does not create loopback feedback.

## DSP Verification

- Test module bypass.
- Test full chain processing.
- Verify parameter changes affect the live DSP signal.
- Confirm gain reduction and level meters respond coherently.
- Test sample-rate changes and buffer-size changes.

## Control Connection

- Validate if SQ network control is available and documented.
- Confirm manual IP configuration is correct.
- Verify connection state changes are reflected in UI.
- Confirm error handling on disconnect.

## Safety

- Confirm master bypass remains available.
- Confirm safe stop path closes the engine cleanly.
- Confirm output monitoring is not routed automatically to speakers without explicit user action.
