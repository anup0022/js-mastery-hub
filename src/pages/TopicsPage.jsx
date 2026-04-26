import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import curriculum from '../data/curriculum';

export default function TopicsPage() {
  const { progress, toggleBookmark } = useProgress();
  const [search, setSearch] = useState('');
  const [filterModule, setFilterModule] = useState('all');
  const [filterDifficulty, setFilterDifficulty] = useState('all');

  const modules = ['all', ...new Set(curriculum.map(t => t.module))];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  const filtered = curriculum.filter(topic => {
    const matchSearch = topic.title.toLowerCase().includes(search.toLowerCase()) || topic.description.toLowerCase().includes(search.toLowerCase());
    const matchModule = filterModule === 'all' || topic.module === filterModule;
    const matchDiff = filterDifficulty === 'all' || topic.difficulty === filterDifficulty;
    return matchSearch && matchModule && matchDiff;
  });

  const difficultyColor = {
    beginner: 'var(--green)',
    intermediate: 'var(--accent)',
    advanced: 'var(--red)',
  };

  return (
    <div style={{ animation: 'fadeIn 0.5s ease forwards' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
          JavaScript Topics
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          {curriculum.length} topics covering everything from basics to advanced patterns
        </p>
      </div>

      {/* Filters */}
      <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '1.5rem',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}>
        <input
          type="text"
          placeholder="Search topics..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            flex: '1 1 250px',
            padding: '10px 16px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-primary)',
            fontSize: '0.875rem',
          }}
          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
          onBlur={e => e.target.style.borderColor = 'var(--border)'}
        />
        <select
          value={filterModule}
          onChange={e => setFilterModule(e.target.value)}
          style={{
            padding: '10px 14px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-primary)',
            fontSize: '0.85rem',
          }}
        >
          {modules.map(m => <option key={m} value={m}>{m === 'all' ? 'All Modules' : m}</option>)}
        </select>
        <select
          value={filterDifficulty}
          onChange={e => setFilterDifficulty(e.target.value)}
          style={{
            padding: '10px 14px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-primary)',
            fontSize: '0.85rem',
          }}
        >
          {difficulties.map(d => <option key={d} value={d}>{d === 'all' ? 'All Levels' : d.charAt(0).toUpperCase() + d.slice(1)}</option>)}
        </select>
      </div>

      {/* Topics Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '16px',
      }}>
        {filtered.map((topic, i) => {
          const isCompleted = progress.completedTopics.includes(topic.id);
          const isBookmarked = progress.bookmarks.includes(topic.id);
          const quizScore = progress.quizScores[topic.id];

          return (
            <div key={topic.id} style={{
              background: 'var(--bg-card)',
              border: `1px solid ${isCompleted ? 'rgba(16,185,129,0.3)' : 'var(--border)'}`,
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              animation: 'fadeIn 0.5s ease forwards',
              animationDelay: `${Math.min(i * 0.03, 0.3)}s`,
              opacity: 0,
              transition: 'all 0.2s',
              position: 'relative',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = isCompleted ? 'rgba(16,185,129,0.3)' : 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {/* Top accent bar */}
              <div style={{
                height: '3px',
                background: isCompleted ? 'var(--green)' : `linear-gradient(90deg, ${difficultyColor[topic.difficulty]}, transparent)`,
              }} />

              <div style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{
                      fontSize: '0.65rem',
                      fontWeight: '600',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      background: difficultyColor[topic.difficulty] + '20',
                      color: difficultyColor[topic.difficulty],
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                    }}>{topic.difficulty}</span>
                    <span style={{
                      fontSize: '0.65rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
                    }}>#{topic.id}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {isCompleted && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--green)', fontWeight: '600' }}>Done</span>
                    )}
                    <button
                      onClick={(e) => { e.preventDefault(); toggleBookmark(topic.id); }}
                      style={{
                        padding: '2px 6px',
                        background: 'transparent',
                        color: isBookmarked ? 'var(--accent)' : 'var(--text-muted)',
                        fontSize: '1rem',
                        lineHeight: 1,
                      }}
                      title={isBookmarked ? 'Remove bookmark' : 'Bookmark'}
                    >
                      {isBookmarked ? '★' : '☆'}
                    </button>
                  </div>
                </div>

                <Link to={`/topic/${topic.id}`} style={{ textDecoration: 'none' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-heading)', marginBottom: '6px', lineHeight: 1.3 }}>
                    {topic.title}
                  </h3>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '12px' }}>
                    {topic.description}
                  </p>
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  <span>{topic.module}</span>
                  <span>•</span>
                  <span>{topic.codeExamples.length} example{topic.codeExamples.length !== 1 ? 's' : ''}</span>
                  <span>•</span>
                  <span>{topic.quiz.length} quiz Q</span>
                  {quizScore != null && (
                    <>
                      <span>•</span>
                      <span style={{ color: quizScore >= 80 ? 'var(--green)' : 'var(--accent)', fontWeight: '600', fontFamily: 'var(--font-mono)' }}>
                        Quiz: {quizScore}%
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>No topics found</p>
          <p style={{ fontSize: '0.85rem' }}>Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
