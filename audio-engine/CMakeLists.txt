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

add_executable(rackforge_engine_demo
  src/main.cpp
)

target_link_libraries(rackforge_engine_demo PRIVATE rackforge_audio)
