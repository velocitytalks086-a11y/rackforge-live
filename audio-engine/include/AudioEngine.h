#pragma once

#include <string>
#include <vector>

namespace rackforge {

struct AudioRoute {
    std::string inputName;
    std::string outputName;
    int channels = 2;
    bool enabled = false;
};

struct DeviceInfo {
    std::string name;
    int sampleRate = 48000;
    int bufferSize = 256;
    bool isInputAvailable = false;
    bool isOutputAvailable = false;
};

class AudioEngine {
public:
    AudioEngine();
    ~AudioEngine();

    bool initialize();
    bool start();
    void stop();
    std::vector<DeviceInfo> enumerateDevices() const;
    bool setRoute(const AudioRoute& route);
    bool setSampleRate(int rate);
    bool setBufferSize(int size);
    void setBypass(bool bypass);
    bool isRunning() const;
    int getLatencyMs() const;

private:
    bool running_ = false;
    bool bypass_ = false;
    int sampleRate_ = 48000;
    int bufferSize_ = 256;
    int latencyMs_ = 0;
};

} // namespace rackforge
