export type EngineStatus = {
  mode: 'demo' | 'local' | 'disconnected';
  running: boolean;
  bypass: boolean;
  sampleRate: number;
  bufferSize: number;
  latencyMs: number;
};

export const engineStatusStub: EngineStatus = {
  mode: 'demo',
  running: false,
  bypass: false,
  sampleRate: 48000,
  bufferSize: 256,
  latencyMs: 0,
};

export function connectEngine(): EngineStatus {
  return {
    ...engineStatusStub,
    mode: 'demo',
    running: false,
  };
}
