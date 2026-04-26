import { useProgress } from '../context/ProgressContext';
import curriculum from '../data/curriculum';
import { Link } from 'react-router-dom';

export default function NotesPage() {
  const { progress } = useProgress();
  const notesEntries = Object.entries(progress.notes).filter(([, note]) => note.trim());

  return (
    <div style={{ animation: 'fadeIn 0.5s ease forwards' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
          My Notes
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          {notesEntries.length} topic{notesEntries.length !== 1 ? 's' : ''} with notes
        </p>
      </div>

      {notesEntries.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: 0.5 }}>#</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>No Notes Yet</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Start taking notes while studying topics. They're saved locally in your browser.
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {notesEntries.map(([topicId, note]) => {
            const topic = curriculum.find(t => t.id === Number(topicId));
            if (!topic) return null;
            return (
              <div key={topicId} style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <Link to={`/topic/${topicId}`} style={{
                      fontSize: '1rem', fontWeight: '600', color: 'var(--text-heading)', textDecoration: 'none',
                    }}>
                      {topic.title}
                    </Link>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>{topic.module}</div>
                  </div>
                  <Link to={`/topic/${topicId}`} style={{
                    padding: '6px 12px',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-muted)',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    textDecoration: 'none',
                    border: '1px solid var(--border)',
                  }}>Edit</Link>
                </div>
                <div style={{
                  padding: '1rem',
                  background: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border)',
                  fontSize: '0.875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  whiteSpace: 'pre-wrap',
                }}>
                  {note}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
