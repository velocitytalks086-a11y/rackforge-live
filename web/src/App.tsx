import { useMemo, useState } from 'react';
import { demoModeSummary, rackModules } from './data/modules';

const moduleStatusStyles: Record<string, string> = {
  'Demo Ready': 'status-good',
  'Local DSP Required': 'status-warn',
  'Hardware Dependent': 'status-info',
};

function App() {
  const [selectedId, setSelectedId] = useState(rackModules[0].id);
  const [engineStatus, setEngineStatus] = useState<'Demo Mode' | 'Local Engine Active' | 'Disconnected'>('Demo Mode');

  const selectedModule = useMemo(
    () => rackModules.find((module) => module.id === selectedId) ?? rackModules[0],
    [selectedId],
  );

  const [moduleValues, setModuleValues] = useState<Record<string, number[]>>(() => {
    const values: Record<string, number[]> = {};
    rackModules.forEach((module) => {
      values[module.id] = module.parameters.map((param) => param.value);
    });
    return values;
  });

  const updateParam = (moduleId: string, index: number, newValue: number) => {
    setModuleValues((current) => ({
      ...current,
      [moduleId]: current[moduleId].map((value, i) => (i === index ? newValue : value)),
    }));
  };

  const connectionMetrics = [
    { label: 'SQ-6 USB audio', value: 'Not connected', tone: 'warn' },
    { label: 'Audio engine', value: engineStatus, tone: engineStatus === 'Demo Mode' ? 'info' : 'good' },
    { label: 'Signal path', value: 'Demonstration only', tone: 'warn' },
    { label: 'Latency', value: 'n/a', tone: 'info' },
    { label: 'CPU', value: 'Simulated', tone: 'info' },
  ];

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark">RF</div>
          <div>
            <div className="brand-name">RACKFORGE LIVE</div>
            <div className="brand-tag">External audio processing rack for the Allen &amp; Heath SQ-6</div>
          </div>
        </div>

        <div className="topbar-actions">
          <button className="btn btn-small btn-secondary" onClick={() => setEngineStatus('Demo Mode')}>
            Demo Mode
          </button>
          <button className="btn btn-small" onClick={() => setEngineStatus('Local Engine Active')}>
            Engine Test
          </button>
        </div>
      </header>

      <div className="workspace-grid">
        <aside className="sidebar-panel">
          <div className="section-header">
            <span>Plugin Browser</span>
            <span className="badge">14 modules</span>
          </div>

          <div className="module-list">
            {rackModules.map((module) => (
              <button
                key={module.id}
                className={`module-item ${selectedId === module.id ? 'selected' : ''}`}
                onClick={() => setSelectedId(module.id)}
              >
                <div className="module-icon">{module.shortLabel}</div>
                <div className="module-meta">
                  <strong>{module.name}</strong>
                  <span>{module.category}</span>
                </div>
                <span className={`status-pill ${moduleStatusStyles[module.status]}`}>{module.status}</span>
              </button>
            ))}
          </div>
        </aside>

        <main className="main-stage">
          <section className="rack-panel">
            <div className="section-header">
              <span>Main Rack</span>
              <span className="badge">Professional studio layout</span>
            </div>

            <div className="rack-grid">
              {rackModules.map((module) => (
                <div key={module.id} className="rack-module" onClick={() => setSelectedId(module.id)}>
                  <div className="rack-module-header">
                    <div className="mini-icon">{module.shortLabel}</div>
                    <div>
                      <div className="module-title">{module.name}</div>
                      <div className="module-summary">{module.description}</div>
                    </div>
                  </div>

                  <div className="rack-control-row">
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                    <button className="mini-button">Bypass</button>
                    <button className="mini-button mini-button-alt">Watch Demo</button>
                  </div>

                  <div className="meter-row">
                    <div className="meter-block">
                      <span>In</span>
                      <div className="meter-strip">
                        <span style={{ width: '68%' }} />
                      </div>
                    </div>
                    <div className="meter-block">
                      <span>Out</span>
                      <div className="meter-strip out">
                        <span style={{ width: '58%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="parameter-row">
                    {module.parameters.slice(0, 2).map((param, index) => (
                      <label key={param.label} className="parameter-block">
                        <span>{param.label}</span>
                        <input
                          type="range"
                          min={param.min}
                          max={param.max}
                          step={param.step}
                          value={moduleValues[module.id]?.[index] ?? param.value}
                          onChange={(event) => updateParam(module.id, index, Number(event.target.value))}
                        />
                        <strong>
                          {moduleValues[module.id]?.[index] ?? param.value}
                          {param.unit}
                        </strong>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="detail-panel">
            <div className="section-header">
              <span>Plugin Detail</span>
              <span className="badge">{selectedModule.status}</span>
            </div>

            <div className="detail-card">
              <div className="detail-header">
                <div className="brand-mark small">{selectedModule.shortLabel}</div>
                <div>
                  <h2>{selectedModule.name}</h2>
                  <p>{selectedModule.description}</p>
                </div>
              </div>

              <div className="detail-grid">
                {selectedModule.parameters.map((param, index) => (
                  <label key={param.label} className="dial-box">
                    <span>{param.label}</span>
                    <input
                      type="range"
                      min={param.min}
                      max={param.max}
                      step={param.step}
                      value={moduleValues[selectedModule.id]?.[index] ?? param.value}
                      onChange={(event) => updateParam(selectedModule.id, index, Number(event.target.value))}
                    />
                    <strong>
                      {moduleValues[selectedModule.id]?.[index] ?? param.value}
                      {param.unit}
                    </strong>
                  </label>
                ))}
              </div>

              <div className="action-row">
                <button className="btn">Reset</button>
                <button className="btn btn-secondary">A/B Compare</button>
                <button className="btn btn-secondary">Save Preset</button>
              </div>
            </div>
          </section>
        </main>

        <aside className="right-rail">
          <section className="panel">
            <div className="section-header">
              <span>Live Demonstrations</span>
            </div>
            <div className="info-card">
              <h3>{demoModeSummary.title}</h3>
              <p>{demoModeSummary.description}</p>
              <button className="btn btn-small">Run Demo</button>
            </div>
          </section>

          <section className="panel">
            <div className="section-header">
              <span>Audio Routing</span>
            </div>
            <div className="route-list">
              <div><span>USB Input</span><strong>SQ-6 USB 1/2</strong></div>
              <div><span>Processing</span><strong>Selected rack chain</strong></div>
              <div><span>Return</span><strong>STEREO OUT</strong></div>
            </div>
          </section>

          <section className="panel">
            <div className="section-header">
              <span>SQ-6 Connection</span>
            </div>
            <div className="status-list">
              {connectionMetrics.map((metric) => (
                <div key={metric.label} className="status-item">
                  <span>{metric.label}</span>
                  <strong className={metric.tone}>{metric.value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="panel">
            <div className="section-header">
              <span>Presets</span>
            </div>
            <div className="preset-list">
              <button className="preset-chip active">Clean Vocal</button>
              <button className="preset-chip">Punch Bus</button>
              <button className="preset-chip">Plate Drift</button>
              <button className="preset-chip">Feedback Safe</button>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default App;
