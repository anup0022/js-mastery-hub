import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { useTheme } from '../context/ThemeContext';
import curriculum from '../data/curriculum';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: '~' },
  { path: '/topics', label: 'Topics', icon: '{' },
  { path: '/videos', label: 'Videos', icon: '>' },
  { path: '/interview', label: 'Mock Interview', icon: '?' },
  { path: '/notes', label: 'My Notes', icon: '#' },
  { path: '/bookmarks', label: 'Bookmarks', icon: '*' },
];

const modules = [...new Set(curriculum.map(t => t.module))];

export default function Layout({ children }) {
  const { user, logout } = useAuth();
  const { progress } = useProgress();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedModule, setExpandedModule] = useState(null);

  const completionPercent = Math.round((progress.completedTopics.length / curriculum.length) * 100);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside style={{
        width: sidebarOpen ? 'var(--sidebar-width)' : '0px',
        minWidth: sidebarOpen ? 'var(--sidebar-width)' : '0px',
        background: 'var(--bg-secondary)',
        borderRight: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        zIndex: 100,
      }}>
        {/* Logo */}
        <div style={{
          padding: '20px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          <div style={{
            width: '36px',
            height: '36px',
            background: 'linear-gradient(135deg, var(--accent), #f97316)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.9rem',
            fontWeight: '800',
            color: 'var(--bg-primary)',
            fontFamily: 'var(--font-mono)',
            flexShrink: 0,
          }}>JS</div>
          <div>
            <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-heading)', lineHeight: 1.2 }}>Mastery Hub</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Zero to Hero</div>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Progress</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: '600', fontFamily: 'var(--font-mono)' }}>{completionPercent}%</span>
          </div>
          <div style={{
            height: '6px',
            background: 'var(--bg-primary)',
            borderRadius: '3px',
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${completionPercent}%`,
              background: 'linear-gradient(90deg, var(--accent), var(--green))',
              borderRadius: '3px',
              transition: 'width 0.5s ease',
            }} />
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, overflow: 'auto', padding: '12px' }}>
          {navItems.map(item => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '2px',
                background: isActive ? 'var(--accent-subtle)' : 'transparent',
                color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                fontWeight: isActive ? '600' : '400',
                fontSize: '0.875rem',
                textDecoration: 'none',
                transition: 'all 0.15s',
                border: isActive ? '1px solid var(--border-accent)' : '1px solid transparent',
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', width: '20px', textAlign: 'center' }}>{item.icon}</span>
                {item.label}
                {item.path === '/bookmarks' && progress.bookmarks.length > 0 && (
                  <span style={{
                    marginLeft: 'auto',
                    background: 'var(--accent)',
                    color: 'var(--bg-primary)',
                    fontSize: '0.65rem',
                    fontWeight: '700',
                    padding: '2px 6px',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-mono)',
                  }}>{progress.bookmarks.length}</span>
                )}
              </Link>
            );
          })}

          <div style={{
            margin: '16px 0 8px',
            padding: '0 14px',
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--text-muted)',
            fontWeight: '600',
          }}>Curriculum</div>

          {modules.map(mod => {
            const topics = curriculum.filter(t => t.module === mod);
            const completed = topics.filter(t => progress.completedTopics.includes(t.id)).length;
            const isExpanded = expandedModule === mod;

            return (
              <div key={mod}>
                <button
                  onClick={() => setExpandedModule(isExpanded ? null : mod)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 14px',
                    background: 'transparent',
                    color: 'var(--text-secondary)',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    borderRadius: '6px',
                    marginBottom: '1px',
                  }}
                >
                  <span>{mod}</span>
                  <span style={{
                    fontSize: '0.65rem',
                    color: completed === topics.length ? 'var(--green)' : 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                  }}>{completed}/{topics.length}</span>
                </button>
                {isExpanded && topics.map(topic => {
                  const isDone = progress.completedTopics.includes(topic.id);
                  const isCurrentTopic = location.pathname === `/topic/${topic.id}`;
                  return (
                    <Link
                      key={topic.id}
                      to={`/topic/${topic.id}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 14px 6px 28px',
                        fontSize: '0.78rem',
                        color: isCurrentTopic ? 'var(--accent)' : isDone ? 'var(--green)' : 'var(--text-muted)',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        background: isCurrentTopic ? 'var(--accent-subtle)' : 'transparent',
                      }}
                    >
                      <span style={{
                        width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
                        background: isDone ? 'var(--green)' : isCurrentTopic ? 'var(--accent)' : 'var(--border-hover)',
                      }} />
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {topic.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </nav>

        {/* User */}
        <div style={{
          padding: '16px 20px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--purple), var(--blue))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.85rem',
            fontWeight: '700',
            color: '#fff',
            flexShrink: 0,
          }}>{user?.avatar || 'U'}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-heading)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user?.name || 'User'}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user?.email}</div>
          </div>
          <button onClick={logout} title="Logout" style={{
            padding: '6px 10px',
            background: 'var(--bg-card)',
            color: 'var(--text-muted)',
            borderRadius: '6px',
            fontSize: '0.75rem',
            border: '1px solid var(--border)',
          }}>Exit</button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{
        flex: 1,
        marginLeft: sidebarOpen ? 'var(--sidebar-width)' : '0',
        transition: 'margin-left 0.3s ease',
        minHeight: '100vh',
      }}>
        {/* Top bar */}
        <header style={{
          height: 'var(--header-height)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
          borderBottom: '1px solid var(--border)',
          background: 'var(--bg-primary)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backdropFilter: 'blur(12px)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{
                padding: '8px',
                background: 'var(--bg-card)',
                color: 'var(--text-secondary)',
                borderRadius: '6px',
                fontSize: '1.1rem',
                border: '1px solid var(--border)',
                fontFamily: 'var(--font-mono)',
                lineHeight: 1,
              }}
            >{sidebarOpen ? '<' : '>'}</button>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                JavaScript Mastery Hub
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              background: 'var(--accent-subtle)',
              borderRadius: '8px',
              border: '1px solid var(--border-accent)',
            }}>
              <span style={{ fontSize: '0.9rem' }}>&#x1f525;</span>
              <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                {progress.studyStreak} day streak
              </span>
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{
                position: 'relative',
                width: '52px',
                height: '28px',
                borderRadius: '14px',
                background: theme === 'dark'
                  ? 'linear-gradient(135deg, #1e293b, #334155)'
                  : 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                border: `1px solid ${theme === 'dark' ? 'var(--border-hover)' : 'rgba(217,119,6,0.4)'}`,
                cursor: 'pointer',
                padding: 0,
                flexShrink: 0,
                transition: 'all 0.3s ease',
                boxShadow: theme === 'dark'
                  ? 'inset 0 1px 3px rgba(0,0,0,0.4)'
                  : 'inset 0 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              <div style={{
                position: 'absolute',
                top: '3px',
                left: theme === 'dark' ? '3px' : '25px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: theme === 'dark' ? '#1e293b' : '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
              }}>
                {theme === 'dark' ? '\u{1F319}' : '\u{2600}\u{FE0F}'}
              </div>
            </button>

            <div style={{
              padding: '6px 12px',
              background: 'var(--green-subtle)',
              borderRadius: '8px',
              border: '1px solid rgba(16,185,129,0.2)',
              fontSize: '0.8rem',
              fontWeight: '600',
              color: 'var(--green)',
              fontFamily: 'var(--font-mono)',
            }}>
              {progress.completedTopics.length}/{curriculum.length} done
            </div>
          </div>
        </header>

        {/* Page content */}
        <div style={{ padding: '32px', maxWidth: '1200px' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
