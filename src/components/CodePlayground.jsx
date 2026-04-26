import { useState, useRef, useEffect } from 'react';

export default function CodePlayground({ initialCode = '', title = 'Code Playground' }) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    setCode(initialCode);
    setOutput([]);
  }, [initialCode]);

  const runCode = () => {
    setIsRunning(true);
    setOutput([]);
    const logs = [];

    const originalConsole = {
      log: console.log,
      error: console.error,
      warn: console.warn,
    };

    const capture = (type) => (...args) => {
      const msg = args.map(a => {
        if (a === null) return 'null';
        if (a === undefined) return 'undefined';
        if (typeof a === 'object') {
          try { return JSON.stringify(a, null, 2); } 
          catch { return String(a); }
        }
        return String(a);
      }).join(' ');
      logs.push({ type, message: msg });
    };

    console.log = capture('log');
    console.error = capture('error');
    console.warn = capture('warn');

    try {
      // Strip HTML-like comments and tags for safety
      const cleanCode = code
        .replace(/<!--[\s\S]*?-->/g, '')
        .replace(/<script[\s\S]*?>/gi, '')
        .replace(/<\/script>/gi, '')
        .replace(/alert\(/g, 'console.log("ALERT:", ')
        .replace(/document\.\w+/g, '"[DOM operation - see browser console]"')
        .replace(/window\.\w+/g, '"[Window operation]"');
      
      // eslint-disable-next-line no-new-func
      new Function(cleanCode)();
    } catch (err) {
      logs.push({ type: 'error', message: `Error: ${err.message}` });
    }

    console.log = originalConsole.log;
    console.error = originalConsole.error;
    console.warn = originalConsole.warn;

    setOutput(logs);
    setIsRunning(false);
  };

  const clearOutput = () => setOutput([]);
  const resetCode = () => { setCode(initialCode); setOutput([]); };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const newCode = code.substring(0, start) + '  ' + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 2;
      }, 0);
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      runCode();
    }
  };

  const lineNumbers = code.split('\n').length;

  return (
    <div style={{
      background: 'var(--bg-code)',
      borderRadius: 'var(--radius)',
      border: '1px solid var(--border)',
      overflow: 'hidden',
      fontSize: '0.875rem',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 16px',
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#f59e0b' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#10b981' }} />
          </div>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>{title}</span>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={resetCode} style={{
            padding: '5px 12px', background: 'var(--bg-card)', color: 'var(--text-muted)',
            borderRadius: '6px', fontSize: '0.75rem', border: '1px solid var(--border)',
          }}>Reset</button>
          <button onClick={clearOutput} style={{
            padding: '5px 12px', background: 'var(--bg-card)', color: 'var(--text-muted)',
            borderRadius: '6px', fontSize: '0.75rem', border: '1px solid var(--border)',
          }}>Clear</button>
          <button onClick={runCode} disabled={isRunning} style={{
            padding: '5px 16px',
            background: isRunning ? 'var(--text-muted)' : 'var(--green)',
            color: '#fff',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            {isRunning ? 'Running...' : 'Run'}
            {!isRunning && <span style={{ fontSize: '0.65rem', opacity: 0.8 }}>Ctrl+Enter</span>}
          </button>
        </div>
      </div>

      {/* Editor */}
      <div style={{ display: 'flex', maxHeight: '350px', overflow: 'auto' }}>
        {/* Line numbers */}
        <div style={{
          padding: '12px 0',
          minWidth: '44px',
          textAlign: 'right',
          background: 'rgba(0,0,0,0.2)',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          lineHeight: '1.7',
          userSelect: 'none',
          paddingRight: '10px',
        }}>
          {Array.from({ length: lineNumbers }, (_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <textarea
          ref={textareaRef}
          value={code}
          onChange={e => setCode(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          style={{
            flex: 1,
            padding: '12px 16px',
            background: 'transparent',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            lineHeight: '1.7',
            border: 'none',
            resize: 'none',
            minHeight: `${Math.max(100, lineNumbers * 24)}px`,
            caretColor: 'var(--accent)',
          }}
        />
      </div>

      {/* Output */}
      {output.length > 0 && (
        <div style={{
          borderTop: '1px solid var(--border)',
          padding: '12px 16px',
          maxHeight: '200px',
          overflow: 'auto',
          background: 'rgba(0,0,0,0.15)',
        }}>
          <div style={{
            fontSize: '0.7rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--text-muted)',
            marginBottom: '8px',
            fontWeight: '600',
          }}>Output</div>
          {output.map((log, i) => (
            <div key={i} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.825rem',
              lineHeight: '1.6',
              color: log.type === 'error' ? 'var(--red)' : log.type === 'warn' ? 'var(--accent)' : 'var(--green)',
              padding: '2px 0',
              borderLeft: `2px solid ${log.type === 'error' ? 'var(--red)' : log.type === 'warn' ? 'var(--accent)' : 'var(--green)'}`,
              paddingLeft: '10px',
              marginBottom: '4px',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
            }}>
              {log.message}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
