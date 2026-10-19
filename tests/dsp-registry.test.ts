import { describe, expect, it } from 'vitest';
import { rackModules } from '../web/src/data/modules';

describe('RACKFORGE LIVE module registry', () => {
  it('should expose exactly 14 processing modules', () => {
    expect(rackModules).toHaveLength(14);
  });

  it('should include all required module names', () => {
    const names = rackModules.map((module) => module.name);
    expect(names).toContain('Preamp Tone');
    expect(names).toContain('Transient Shaper');
    expect(names).toContain('Dynamic EQ');
    expect(names).toContain('De-Esser');
    expect(names).toContain('Vocal Rider');
    expect(names).toContain('Feedback Guard');
    expect(names).toContain('Multiband Compressor');
    expect(names).toContain('Tape Saturation');
    expect(names).toContain('Stereo Width');
    expect(names).toContain('Punch Bus');
    expect(names).toContain('Plate Reverb');
    expect(names).toContain('Tempo Delay');
    expect(names).toContain('Loudness Guard');
    expect(names).toContain('Vocal Tune');
  });

  it('should keep parameter metadata consistent', () => {
    for (const module of rackModules) {
      expect(module.parameters.length).toBeGreaterThan(0);
      for (const parameter of module.parameters) {
        expect(parameter.max).toBeGreaterThan(parameter.min);
        expect(parameter.step).toBeGreaterThan(0);
      }
    }
  });
});
