import { useState, useRef, useCallback, useEffect } from 'react';

const TAB_CONFIG = {
  html: { label: 'HTML', icon: '◇', color: '#e34c26' },
  css: { label: 'CSS', icon: '◆', color: '#264de4' },
  js: { label: 'JS', icon: '⬡', color: '#f7df1e' },
};

export default function SplitEditor({
  initialHTML = '',
  initialCSS = '',
  initialJS = '',
  title = 'Try It Yourself',
  mode = 'full',        // 'full' = HTML+CSS+JS, 'js' = JS only
  autoRun = false,
}) {
  const [htmlCode, setHtmlCode] = useState(initialHTML);
  const [cssCode, setCssCode] = useState(initialCSS);
  const [jsCode, setJsCode] = useState(initialJS);
  const [activeTab, setActiveTab] = useState(mode === 'js' ? 'js' : 'html');
  const [consoleLogs, setConsoleLogs] = useState([]);
  const [showConsole, setShowConsole] = useState(true);
  const [splitRatio, setSplitRatio] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const iframeRef = useRef(null);
  const containerRef = useRef(null);
  const consoleEndRef = useRef(null);

  // Reset code when initial values change (topic navigation)
  useEffect(() => {
    setHtmlCode(initialHTML);
    setCssCode(initialCSS);
    setJsCode(initialJS);
    setConsoleLogs([]);
    setActiveTab(mode === 'js' ? 'js' : 'html');
  }, [initialHTML, initialCSS, initialJS, mode]);

  // Auto-scroll console
  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [consoleLogs]);

  const getActiveCode = () => {
    if (activeTab === 'html') return htmlCode;
    if (activeTab === 'css') return cssCode;
    return jsCode;
  };

  const setActiveCode = (value) => {
    if (activeTab === 'html') setHtmlCode(value);
    else if (activeTab === 'css') setCssCode(value);
    else setJsCode(value);
  };

  const runCode = useCallback(() => {
    setConsoleLogs([]);
    setShowConsole(true);

    // Build the document to inject into iframe
    const consoleOverride = `
      <script>
        (function() {
          var logs = [];
          function send(type, args) {
            var msg = Array.prototype.slice.call(args).map(function(a) {
              if (a === null) return 'null';
              if (a === undefined) return 'undefined';
              if (typeof a === 'object') {
                try { return JSON.stringify(a, null, 2); }
                catch(e) { return String(a); }
              }
              return String(a);
            }).join(' ');
            window.parent.postMessage({ type: 'console', level: type, message: msg }, '*');
          }
          console.log = function() { send('log', arguments); };
          console.error = function() { send('error', arguments); };
          console.warn = function() { send('warn', arguments); };
          console.info = function() { send('info', arguments); };
          console.clear = function() {
            window.parent.postMessage({ type: 'console-clear' }, '*');
          };
          window.onerror = function(msg, url, line, col, err) {
            send('error', ['Error: ' + msg + (line ? ' (line ' + line + ')' : '')]);
          };
        })();
      </script>
    `;

    let doc;
    if (mode === 'js') {
      // JS-only mode: wrap JS in a minimal HTML document
      doc = `<!DOCTYPE html>
<html><head>
<style>
  body { background: #0d1117; color: #e2e8f0; font-family: 'JetBrains Mono', monospace; padding: 16px; font-size: 14px; }
  pre { white-space: pre-wrap; word-wrap: break-word; }
</style>
${consoleOverride}
</head><body>
<pre id="output"></pre>
<script>
try {
${jsCode}
} catch(e) {
  console.error(e.message);
}
</script>
</body></html>`;
    } else {
      // Full mode: combine HTML, CSS, JS
      doc = `<!DOCTYPE html>
<html><head>
<style>
body { margin: 8px; font-family: sans-serif; }
${cssCode}
</style>
${consoleOverride}
</head><body>
${htmlCode}
<script>
try {
${jsCode}
} catch(e) {
  console.error(e.message);
}
</script>
</body></html>`;
    }

    const iframe = iframeRef.current;
    if (iframe) {
      const blob = new Blob([doc], { type: 'text/html' });
      iframe.src = URL.createObjectURL(blob);
    }
  }, [htmlCode, cssCode, jsCode, mode]);

  // Listen for console messages from iframe
  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === 'console') {
        setConsoleLogs(prev => [...prev, { level: e.data.level, message: e.data.message }]);
      }
      if (e.data?.type === 'console-clear') {
        setConsoleLogs([]);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  // Auto-run on mount if requested
  useEffect(() => {
    if (autoRun) {
      const timer = setTimeout(runCode, 300);
      return () => clearTimeout(timer);
    }
  }, [autoRun]); // eslint-disable-line react-hooks/exhaustive-deps

  // Keyboard shortcut: Ctrl/Cmd + Enter to run
  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      runCode();
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      const ta = e.target;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const val = getActiveCode();
      setActiveCode(val.substring(0, start) + '  ' + val.substring(end));
      setTimeout(() => {
        ta.selectionStart = ta.selectionEnd = start + 2;
      }, 0);
    }
  };

  // Drag to resize split
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  useEffect(() => {
    if (!isDragging) return;
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const ratio = ((e.clientX - rect.left) / rect.width) * 100;
      setSplitRatio(Math.max(25, Math.min(75, ratio)));
    };
    const handleMouseUp = () => setIsDragging(false);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const resetCode = () => {
    setHtmlCode(initialHTML);
    setCssCode(initialCSS);
    setJsCode(initialJS);
    setConsoleLogs([]);
  };

  const lineCount = getActiveCode().split('\n').length;
  const tabs = mode === 'js' ? ['js'] : ['html', 'css', 'js'];

  const consoleColorMap = {
    log: 'var(--green)',
    error: 'var(--red)',
    warn: 'var(--accent)',
    info: 'var(--blue)',
  };

  return (
    <div style={{
      background: 'var(--bg-code)',
      borderRadius: 'var(--radius)',
      border: '1px solid var(--border)',
      overflow: 'hidden',
    }}>
      {/* Top toolbar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 12px',
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border)',
        gap: '8px',
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '5px' }}>
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ef4444' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#f59e0b' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#10b981' }} />
          </div>
          <span style={{
            color: 'var(--text-muted)',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            padding: '2px 8px',
            background: 'var(--bg-card)',
            borderRadius: '4px',
          }}>
            {title}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <button onClick={resetCode} style={{
            padding: '5px 10px', background: 'var(--bg-card)', color: 'var(--text-muted)',
            borderRadius: '6px', fontSize: '0.7rem', border: '1px solid var(--border)',
            cursor: 'pointer',
          }}>Reset</button>
          <button onClick={() => setConsoleLogs([])} style={{
            padding: '5px 10px', background: 'var(--bg-card)', color: 'var(--text-muted)',
            borderRadius: '6px', fontSize: '0.7rem', border: '1px solid var(--border)',
            cursor: 'pointer',
          }}>Clear</button>
          <button onClick={runCode} style={{
            padding: '6px 18px',
            background: 'var(--green)',
            color: '#fff',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(16,185,129,0.3)',
          }}>
            <span style={{ fontSize: '0.85rem' }}>&#9654;</span> Run
            <span style={{ fontSize: '0.6rem', opacity: 0.75, fontWeight: '400' }}>Ctrl+Enter</span>
          </button>
        </div>
      </div>

      {/* Main split area */}
      <div ref={containerRef} style={{
        display: 'flex',
        height: '420px',
        position: 'relative',
        userSelect: isDragging ? 'none' : 'auto',
      }}>
        {/* LEFT: Code Editor */}
        <div style={{
          width: `${splitRatio}%`,
          display: 'flex',
          flexDirection: 'column',
          borderRight: '2px solid var(--border)',
          overflow: 'hidden',
        }}>
          {/* Language tabs */}
          <div style={{
            display: 'flex',
            background: 'rgba(0,0,0,0.2)',
            borderBottom: '1px solid var(--border)',
          }}>
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '8px 16px',
                  fontSize: '0.75rem',
                  fontWeight: activeTab === tab ? '700' : '400',
                  fontFamily: 'var(--font-mono)',
                  color: activeTab === tab ? TAB_CONFIG[tab].color : 'var(--text-muted)',
                  background: activeTab === tab ? 'var(--bg-code)' : 'transparent',
                  borderBottom: activeTab === tab ? `2px solid ${TAB_CONFIG[tab].color}` : '2px solid transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'all 0.15s',
                }}
              >
                <span style={{ fontSize: '0.65rem' }}>{TAB_CONFIG[tab].icon}</span>
                {TAB_CONFIG[tab].label}
              </button>
            ))}
          </div>

          {/* Editor area */}
          <div style={{ flex: 1, display: 'flex', overflow: 'auto' }}>
            {/* Line numbers */}
            <div style={{
              padding: '10px 0',
              minWidth: '40px',
              textAlign: 'right',
              paddingRight: '8px',
              background: 'rgba(0,0,0,0.25)',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              lineHeight: '1.65',
              userSelect: 'none',
              flexShrink: 0,
            }}>
              {Array.from({ length: lineCount }, (_, i) => (
                <div key={i} style={{ opacity: 0.5 }}>{i + 1}</div>
              ))}
            </div>
            <textarea
              value={getActiveCode()}
              onChange={e => setActiveCode(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              style={{
                flex: 1,
                padding: '10px 12px',
                background: 'transparent',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.825rem',
                lineHeight: '1.65',
                border: 'none',
                resize: 'none',
                caretColor: 'var(--accent)',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Drag handle */}
        <div
          onMouseDown={handleMouseDown}
          style={{
            width: '6px',
            cursor: 'col-resize',
            background: isDragging ? 'var(--accent)' : 'transparent',
            transition: isDragging ? 'none' : 'background 0.2s',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `calc(${splitRatio}% - 3px)`,
            zIndex: 10,
          }}
          onMouseEnter={e => { if (!isDragging) e.currentTarget.style.background = 'var(--border-hover)'; }}
          onMouseLeave={e => { if (!isDragging) e.currentTarget.style.background = 'transparent'; }}
        />

        {/* RIGHT: Preview + Console */}
        <div style={{
          width: `${100 - splitRatio}%`,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}>
          {/* Preview header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '6px 12px',
            background: 'rgba(0,0,0,0.2)',
            borderBottom: '1px solid var(--border)',
          }}>
            <span style={{
              fontSize: '0.7rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              {mode === 'js' ? 'Output' : 'Preview'}
            </span>
            <button
              onClick={() => setShowConsole(!showConsole)}
              style={{
                fontSize: '0.65rem',
                fontFamily: 'var(--font-mono)',
                color: showConsole ? 'var(--accent)' : 'var(--text-muted)',
                background: showConsole ? 'var(--accent-subtle)' : 'var(--bg-card)',
                padding: '3px 8px',
                borderRadius: '4px',
                cursor: 'pointer',
                border: `1px solid ${showConsole ? 'var(--border-accent)' : 'var(--border)'}`,
              }}
            >
              Console {consoleLogs.length > 0 && `(${consoleLogs.length})`}
            </button>
          </div>

          {/* iframe preview */}
          <div style={{
            flex: showConsole ? '1 1 55%' : '1 1 100%',
            background: mode === 'js' ? '#0d1117' : '#fff',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <iframe
              ref={iframeRef}
              title="Preview"
              sandbox="allow-scripts allow-modals"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                background: mode === 'js' ? '#0d1117' : '#fff',
              }}
            />
            {/* Placeholder when no code has been run */}
            {!iframeRef.current?.src && (
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '8px',
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                background: mode === 'js' ? '#0d1117' : 'var(--bg-card)',
              }}>
                <span style={{ fontSize: '2rem', opacity: 0.3 }}>&#9654;</span>
                <span>Click <b>Run</b> to see output</span>
                <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>or press Ctrl+Enter</span>
              </div>
            )}
          </div>

          {/* Console panel */}
          {showConsole && (
            <div style={{
              flex: '0 0 45%',
              borderTop: '1px solid var(--border)',
              background: 'var(--bg-code)',
              overflow: 'auto',
              padding: '8px 12px',
            }}>
              <div style={{
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-muted)',
                marginBottom: '6px',
                fontWeight: '700',
                fontFamily: 'var(--font-mono)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <span style={{ color: 'var(--green)' }}>&#9679;</span> Console
              </div>
              {consoleLogs.length === 0 ? (
                <div style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.78rem',
                  fontStyle: 'italic',
                  opacity: 0.6,
                }}>
                  No output yet...
                </div>
              ) : (
                consoleLogs.map((log, i) => (
                  <div key={i} style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    lineHeight: '1.5',
                    color: consoleColorMap[log.level] || 'var(--text-primary)',
                    padding: '3px 0 3px 10px',
                    borderLeft: `2px solid ${consoleColorMap[log.level] || 'var(--text-muted)'}`,
                    marginBottom: '3px',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-all',
                  }}>
                    {log.level === 'error' && <span style={{ marginRight: '4px' }}>&#10007;</span>}
                    {log.level === 'warn' && <span style={{ marginRight: '4px' }}>&#9888;</span>}
                    {log.message}
                  </div>
                ))
              )}
              <div ref={consoleEndRef} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
