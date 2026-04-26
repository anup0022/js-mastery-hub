import { useProgress } from '../context/ProgressContext';
import curriculum from '../data/curriculum';
import { Link } from 'react-router-dom';

export default function BookmarksPage() {
  const { progress, toggleBookmark } = useProgress();
  const bookmarkedTopics = progress.bookmarks.map(id => curriculum.find(t => t.id === id)).filter(Boolean);

  const difficultyColor = {
    beginner: 'var(--green)',
    intermediate: 'var(--accent)',
    advanced: 'var(--red)',
  };

  return (
    <div style={{ animation: 'fadeIn 0.5s ease forwards' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
          Bookmarks
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          {bookmarkedTopics.length} bookmarked topic{bookmarkedTopics.length !== 1 ? 's' : ''}
        </p>
      </div>

      {bookmarkedTopics.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: 0.5 }}>★</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>No Bookmarks Yet</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Bookmark topics you want to revisit later by clicking the star icon.
          </p>
          <Link to="/topics" style={{
            padding: '10px 20px',
            background: 'var(--accent)',
            color: 'var(--bg-primary)',
            borderRadius: 'var(--radius-sm)',
            fontWeight: '600',
            fontSize: '0.9rem',
            textDecoration: 'none',
          }}>Browse Topics</Link>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '16px',
        }}>
          {bookmarkedTopics.map((topic, i) => {
            const isCompleted = progress.completedTopics.includes(topic.id);

            return (
              <div key={topic.id} style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                animation: 'fadeIn 0.5s ease forwards',
                animationDelay: `${i * 0.05}s`,
                opacity: 0,
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ height: '3px', background: difficultyColor[topic.difficulty] }} />
                <div style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span style={{
                        fontSize: '0.65rem', fontWeight: '600', padding: '3px 8px', borderRadius: '4px',
                        background: difficultyColor[topic.difficulty] + '20',
                        color: difficultyColor[topic.difficulty],
                        textTransform: 'uppercase',
                      }}>{topic.difficulty}</span>
                      {isCompleted && <span style={{ fontSize: '0.65rem', color: 'var(--green)', fontWeight: '600' }}>✓ Done</span>}
                    </div>
                    <button onClick={() => toggleBookmark(topic.id)} style={{
                      padding: '2px 6px',
                      background: 'transparent',
                      color: 'var(--accent)',
                      fontSize: '1rem',
                    }} title="Remove bookmark">★</button>
                  </div>
                  <Link to={`/topic/${topic.id}`} style={{ textDecoration: 'none' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-heading)', marginBottom: '6px' }}>{topic.title}</h3>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.4, marginBottom: '10px' }}>{topic.description}</p>
                  </Link>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{topic.module}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
