#include "AudioEngine.h"

#include <iostream>

namespace rackforge {

AudioEngine::AudioEngine() = default;
AudioEngine::~AudioEngine() {
    stop();
}

bool AudioEngine::initialize() {
    std::cout << "Audio engine initialized. Native DSP layer is scaffolded; real device initialization requires a host-specific audio backend." << std::endl;
    return true;
}

bool AudioEngine::start() {
    if (running_) {
        return true;
    }
    running_ = true;
    std::cout << "Audio engine started in demo-safe mode." << std::endl;
    return true;
}

void AudioEngine::stop() {
    if (!running_) {
        return;
    }
    running_ = false;
    std::cout << "Audio engine stopped safely." << std::endl;
}

std::vector<DeviceInfo> AudioEngine::enumerateDevices() const {
    return {
        DeviceInfo{"SQ-6 USB Audio Interface", 48000, 256, true, true},
        DeviceInfo{"System Output Device", 48000, 256, false, true},
    };
}

bool AudioEngine::setRoute(const AudioRoute& route) {
    (void)route;
    return true;
}

bool AudioEngine::setSampleRate(int rate) {
    sampleRate_ = rate;
    return true;
}

bool AudioEngine::setBufferSize(int size) {
    bufferSize_ = size;
    return true;
}

void AudioEngine::setBypass(bool bypass) {
    bypass_ = bypass;
}

bool AudioEngine::isRunning() const {
    return running_;
}

int AudioEngine::getLatencyMs() const {
    return latencyMs_;
}

} // namespace rackforge
