#include "AudioEngine.h"

int main() {
    rackforge::AudioEngine engine;
    engine.initialize();
    engine.start();
    auto devices = engine.enumerateDevices();
    if (!devices.empty()) {
        for (const auto& device : devices) {
            std::cout << "Device: " << device.name << " sampleRate=" << device.sampleRate << " buffer=" << device.bufferSize << std::endl;
        }
    }
    return 0;
}
