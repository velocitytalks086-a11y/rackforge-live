export type ModuleDefinition = {
  id: string;
  name: string;
  shortLabel: string;
  description: string;
  category: 'Tone' | 'Dynamics' | 'Spatial' | 'Modulation' | 'Reverb' | 'Pitch' | 'Utility';
  status: 'Demo Ready' | 'Local DSP Required' | 'Hardware Dependent';
  parameters: Array<{
    label: string;
    min: number;
    max: number;
    step: number;
    value: number;
    unit: string;
  }>;
};

export const rackModules: ModuleDefinition[] = [
  {
    id: 'preamp-tone',
    name: 'Preamp Tone',
    shortLabel: 'PRE',
    description: 'Harmonic saturation, tonal shaping, and controlled drive for instrument and vocal sources.',
    category: 'Tone',
    status: 'Demo Ready',
    parameters: [
      { label: 'Drive', min: 0, max: 100, step: 1, value: 52, unit: '%' },
      { label: 'Tone', min: 0, max: 100, step: 1, value: 63, unit: '%' },
      { label: 'Mix', min: 0, max: 100, step: 1, value: 68, unit: '%' },
      { label: 'Output', min: -12, max: 12, step: 0.1, value: 4.2, unit: 'dB' },
    ],
  },
  {
    id: 'transient-shaper',
    name: 'Transient Shaper',
    shortLabel: 'TRS',
    description: 'Add snap, intentional attack, or controlled sustain for drums and punchy sources.',
    category: 'Dynamics',
    status: 'Demo Ready',
    parameters: [
      { label: 'Attack', min: 0, max: 100, step: 1, value: 58, unit: '%' },
      { label: 'Sustain', min: 0, max: 100, step: 1, value: 46, unit: '%' },
      { label: 'Sensitivity', min: 0, max: 100, step: 1, value: 61, unit: '%' },
      { label: 'Output', min: -12, max: 12, step: 0.1, value: 2.8, unit: 'dB' },
    ],
  },
  {
    id: 'dynamic-eq',
    name: 'Dynamic EQ',
    shortLabel: 'DYN',
    description: 'Responsive equalisation that changes with signal energy in order to manage resonances.',
    category: 'Dynamics',
    status: 'Local DSP Required',
    parameters: [
      { label: 'Frequency', min: 200, max: 8000, step: 10, value: 1800, unit: 'Hz' },
      { label: 'Q', min: 0.3, max: 8, step: 0.1, value: 2.8, unit: 'Q' },
      { label: 'Threshold', min: -30, max: 12, step: 0.5, value: -8, unit: 'dB' },
      { label: 'Range', min: 1, max: 18, step: 0.5, value: 7.2, unit: 'dB' },
    ],
  },
  {
    id: 'de-esser',
    name: 'De-Esser',
    shortLabel: 'ESS',
    description: 'Reduction of excessive sibilance and vocal harshness in the presence range.',
    category: 'Dynamics',
    status: 'Demo Ready',
    parameters: [
      { label: 'Frequency', min: 2000, max: 16000, step: 50, value: 6500, unit: 'Hz' },
      { label: 'Threshold', min: -30, max: 0, step: 0.5, value: -16, unit: 'dB' },
      { label: 'Reduction', min: 1, max: 18, step: 0.5, value: 8.4, unit: 'dB' },
      { label: 'Mix', min: 0, max: 100, step: 1, value: 72, unit: '%' },
    ],
  },
  {
    id: 'vocal-rider',
    name: 'Vocal Rider',
    shortLabel: 'RDR',
    description: 'Automatic gain riding to maintain a stable target vocal level without over-processing.',
    category: 'Dynamics',
    status: 'Local DSP Required',
    parameters: [
      { label: 'Target', min: -24, max: 0, step: 0.5, value: -12, unit: 'dB' },
      { label: 'Sensitivity', min: 0, max: 100, step: 1, value: 62, unit: '%' },
      { label: 'Max Gain', min: 0, max: 12, step: 0.5, value: 4.5, unit: 'dB' },
      { label: 'Response', min: 20, max: 500, step: 10, value: 140, unit: 'ms' },
    ],
  },
  {
    id: 'feedback-guard',
    name: 'Feedback Guard',
    shortLabel: 'FBG',
    description: 'Focused narrow-band intervention for problematic feedback frequencies and ring tones.',
    category: 'Utility',
    status: 'Local DSP Required',
    parameters: [
      { label: 'Sensitivity', min: 0, max: 100, step: 1, value: 68, unit: '%' },
      { label: 'Hold', min: 20, max: 500, step: 10, value: 140, unit: 'ms' },
      { label: 'Cut', min: 1, max: 18, step: 0.5, value: 8.5, unit: 'dB' },
      { label: 'Link', min: 0, max: 100, step: 1, value: 36, unit: '%' },
    ],
  },
  {
    id: 'multiband-compressor',
    name: 'Multiband Compressor',
    shortLabel: 'MBC',
    description: 'Independent transient and tonal control for low, mid, and high content.',
    category: 'Dynamics',
    status: 'Local DSP Required',
    parameters: [
      { label: 'Low Thr', min: -30, max: 0, step: 0.5, value: -12, unit: 'dB' },
      { label: 'Mid Thr', min: -30, max: 0, step: 0.5, value: -10, unit: 'dB' },
      { label: 'High Thr', min: -30, max: 0, step: 0.5, value: -8, unit: 'dB' },
      { label: 'Attack', min: 5, max: 100, step: 1, value: 24, unit: 'ms' },
    ],
  },
  {
    id: 'tape-saturation',
    name: 'Tape Saturation',
    shortLabel: 'TAP',
    description: 'Harmonic coloration, soft clipping, and a smooth analogue-inspired texture.',
    category: 'Tone',
    status: 'Demo Ready',
    parameters: [
      { label: 'Drive', min: 0, max: 100, step: 1, value: 52, unit: '%' },
      { label: 'Character', min: 0, max: 100, step: 1, value: 63, unit: '%' },
      { label: 'Tone', min: 0, max: 100, step: 1, value: 58, unit: '%' },
      { label: 'Mix', min: 0, max: 100, step: 1, value: 73, unit: '%' },
    ],
  },
  {
    id: 'stereo-width',
    name: 'Stereo Width',
    shortLabel: 'WID',
    description: 'Widen or focus the image while preserving mono compatibility where practical.',
    category: 'Spatial',
    status: 'Demo Ready',
    parameters: [
      { label: 'Width', min: -100, max: 200, step: 1, value: 72, unit: '%' },
      { label: 'Mid Gain', min: -12, max: 12, step: 0.1, value: 2.2, unit: 'dB' },
      { label: 'Side Gain', min: -12, max: 12, step: 0.1, value: 4.8, unit: 'dB' },
      { label: 'Output', min: -12, max: 12, step: 0.1, value: 1.4, unit: 'dB' },
    ],
  },
  {
    id: 'punch-bus',
    name: 'Punch Bus',
    shortLabel: 'PCH',
    description: 'Controlled bus compression to bring punch, glue, and consistent energy to the mix.',
    category: 'Dynamics',
    status: 'Local DSP Required',
    parameters: [
      { label: 'Threshold', min: -30, max: 0, step: 0.5, value: -12, unit: 'dB' },
      { label: 'Ratio', min: 1, max: 10, step: 0.1, value: 3.4, unit: ':' },
      { label: 'Attack', min: 2, max: 120, step: 1, value: 16, unit: 'ms' },
      { label: 'Makeup', min: -12, max: 18, step: 0.1, value: 2.6, unit: 'dB' },
    ],
  },
  {
    id: 'plate-reverb',
    name: 'Plate Reverb',
    shortLabel: 'PLT',
    description: 'Dense, controlled plate-style ambience with diffusion, decay, and pre-delay.',
    category: 'Reverb',
    status: 'Local DSP Required',
    parameters: [
      { label: 'Pre-Delay', min: 0, max: 120, step: 1, value: 26, unit: 'ms' },
      { label: 'Decay', min: 0.5, max: 12, step: 0.1, value: 3.8, unit: 's' },
      { label: 'Damping', min: 0, max: 100, step: 1, value: 66, unit: '%' },
      { label: 'Mix', min: 0, max: 100, step: 1, value: 28, unit: '%' },
    ],
  },
  {
    id: 'tempo-delay',
    name: 'Tempo Delay',
    shortLabel: 'DLY',
    description: 'Musical echo and delay with sync and rhythmic subdivision control.',
    category: 'Modulation',
    status: 'Demo Ready',
    parameters: [
      { label: 'Time', min: 20, max: 2000, step: 10, value: 360, unit: 'ms' },
      { label: 'Feedback', min: 0, max: 95, step: 1, value: 42, unit: '%' },
      { label: 'Offset', min: -100, max: 100, step: 1, value: 18, unit: '%' },
      { label: 'Mix', min: 0, max: 100, step: 1, value: 35, unit: '%' },
    ],
  },
  {
    id: 'loudness-guard',
    name: 'Loudness Guard',
    shortLabel: 'LGD',
    description: 'Final peak limiting and loudness protection for controlled maximum output.',
    category: 'Utility',
    status: 'Local DSP Required',
    parameters: [
      { label: 'Threshold', min: -12, max: 0, step: 0.1, value: -1.5, unit: 'dB' },
      { label: 'Ceiling', min: -6, max: 0, step: 0.1, value: -1.0, unit: 'dB' },
      { label: 'Release', min: 10, max: 200, step: 1, value: 72, unit: 'ms' },
      { label: 'Input', min: -12, max: 12, step: 0.1, value: 1.7, unit: 'dB' },
    ],
  },
  {
    id: 'vocal-tune',
    name: 'Vocal Tune',
    shortLabel: 'VTL',
    description: 'Real-time pitch correction with scale-aware retuning and optional hard-tune behaviour.',
    category: 'Pitch',
    status: 'Hardware Dependent',
    parameters: [
      { label: 'Key', min: 0, max: 11, step: 1, value: 5, unit: 'note' },
      { label: 'Strength', min: 0, max: 100, step: 1, value: 62, unit: '%' },
      { label: 'Humanise', min: 0, max: 100, step: 1, value: 38, unit: '%' },
      { label: 'Mix', min: 0, max: 100, step: 1, value: 70, unit: '%' },
    ],
  },
];

export const demoModeSummary = {
  title: 'Demonstration Mode',
  description:
    'Public deployment does not expose live SQ-6 hardware. This mode uses the same rack structure and demo controls without claiming a real device connection.',
};
