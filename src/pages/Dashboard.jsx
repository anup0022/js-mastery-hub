import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import curriculum from '../data/curriculum';

export default function Dashboard() {
  const { user } = useAuth();
  const { progress } = useProgress();

  const completedCount = progress.completedTopics.length;
  const totalTopics = curriculum.length;
  const percent = Math.round((completedCount / totalTopics) * 100);
  const modules = [...new Set(curriculum.map(t => t.module))];

  // Find next topic to study
  const nextTopic = curriculum.find(t => !progress.completedTopics.includes(t.id));

  // Recent activity
  const recentTopics = progress.completedTopics.slice(-5).reverse().map(id => curriculum.find(t => t.id === id)).filter(Boolean);

  // Quiz stats
  const quizEntries = Object.entries(progress.quizScores);
  const avgQuizScore = quizEntries.length ? Math.round(quizEntries.reduce((sum, [, s]) => sum + s, 0) / quizEntries.length) : 0;

  const statCards = [
    { label: 'Topics Completed', value: `${completedCount}/${totalTopics}`, color: 'var(--green)', bg: 'var(--green-subtle)' },
    { label: 'Quiz Average', value: `${avgQuizScore}%`, color: 'var(--blue)', bg: 'var(--blue-subtle)' },
    { label: 'Study Streak', value: `${progress.studyStreak} days`, color: 'var(--accent)', bg: 'var(--accent-subtle)' },
    { label: 'Interviews Done', value: progress.interviewsCompleted.length, color: 'var(--purple)', bg: 'var(--purple-subtle)' },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.5s ease forwards' }}>
      {/* Welcome Section */}
      <div style={{
        background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(245,158,11,0.05) 100%)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '2rem',
        marginBottom: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.5rem' }}>
          Welcome back, <span style={{ color: 'var(--accent)' }}>{user?.name || 'Learner'}</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: '1.6' }}>
          {percent === 0 && "Ready to start your JavaScript journey? Begin with the basics and work your way up to advanced topics."}
          {percent > 0 && percent < 50 && `You're making great progress! ${totalTopics - completedCount} topics remaining. Keep going!`}
          {percent >= 50 && percent < 100 && `Over halfway there! You're becoming a JavaScript pro. ${totalTopics - completedCount} topics to go.`}
          {percent === 100 && "Congratulations! You've completed all topics. Consider revisiting for mastery or try the mock interviews!"}
        </p>
        {nextTopic && (
          <Link to={`/topic/${nextTopic.id}`} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '1rem',
            padding: '10px 20px',
            background: 'var(--accent)',
            color: 'var(--bg-primary)',
            borderRadius: 'var(--radius-sm)',
            fontWeight: '600',
            fontSize: '0.9rem',
            textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(245,158,11,0.3)',
            transition: 'transform 0.2s',
          }}>
            Continue Learning: {nextTopic.title} →
          </Link>
        )}
      </div>

      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '16px',
        marginBottom: '2rem',
      }}>
        {statCards.map((stat, i) => (
          <div key={stat.label} style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '1.25rem',
            animation: 'fadeIn 0.5s ease forwards',
            animationDelay: `${i * 0.1}s`,
            opacity: 0,
          }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
              {stat.label}
            </div>
            <div style={{
              fontSize: '1.75rem',
              fontWeight: '800',
              color: stat.color,
              fontFamily: 'var(--font-mono)',
            }}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Progress by Module */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
        marginBottom: '2rem',
      }}>
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '1.5rem',
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem' }}>Module Progress</h3>
          {modules.map(mod => {
            const topics = curriculum.filter(t => t.module === mod);
            const done = topics.filter(t => progress.completedTopics.includes(t.id)).length;
            const pct = Math.round((done / topics.length) * 100);
            return (
              <div key={mod} style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>{mod}</span>
                  <span style={{ fontSize: '0.75rem', color: pct === 100 ? 'var(--green)' : 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {done}/{topics.length}
                  </span>
                </div>
                <div style={{ height: '6px', background: 'var(--bg-primary)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: `${pct}%`,
                    background: pct === 100 ? 'var(--green)' : 'linear-gradient(90deg, var(--accent), var(--blue))',
                    borderRadius: '3px',
                    transition: 'width 0.5s ease',
                  }} />
                </div>
              </div>
            );
          })}
        </div>

        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '1.5rem',
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem' }}>Recent Activity</h3>
          {recentTopics.length === 0 ? (
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>No topics completed yet. Start learning!</p>
          ) : (
            recentTopics.map(topic => (
              <Link key={topic.id} to={`/topic/${topic.id}`} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '4px',
                textDecoration: 'none',
                transition: 'background 0.15s',
                color: 'var(--text-primary)',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-card-hover)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <span style={{
                  width: '8px', height: '8px', borderRadius: '50%', background: 'var(--green)', flexShrink: 0,
                }} />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '500' }}>{topic.title}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{topic.module}</div>
                </div>
                {progress.quizScores[topic.id] != null && (
                  <span style={{
                    marginLeft: 'auto',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    color: progress.quizScores[topic.id] >= 80 ? 'var(--green)' : 'var(--accent)',
                    fontFamily: 'var(--font-mono)',
                  }}>Quiz: {progress.quizScores[topic.id]}%</span>
                )}
              </Link>
            ))
          )}
        </div>
      </div>

      {/* Quick Links */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '12px',
      }}>
        {[
          { label: 'All Topics', path: '/topics', desc: 'Browse curriculum', color: 'var(--accent)' },
          { label: 'Video Lessons', path: '/videos', desc: 'Watch & learn', color: 'var(--red)' },
          { label: 'Mock Interview', path: '/interview', desc: 'Practice Q&A', color: 'var(--purple)' },
          { label: 'My Notes', path: '/notes', desc: 'Review notes', color: 'var(--cyan)' },
        ].map(item => (
          <Link key={item.path} to={item.path} style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '1.25rem',
            textDecoration: 'none',
            transition: 'all 0.2s',
            borderLeft: `3px solid ${item.color}`,
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-card-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-heading)', marginBottom: '4px' }}>{item.label}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
