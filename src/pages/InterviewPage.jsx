import { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import mockInterviews from '../data/mockInterviews';
import CodePlayground from '../components/CodePlayground';

export default function InterviewPage() {
  const { progress, markInterviewComplete } = useProgress();
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);
  const [showAnswer, setShowAnswer] = useState({});
  const [showFollowUp, setShowFollowUp] = useState({});
  const [showCode, setShowCode] = useState({});
  const [mockMode, setMockMode] = useState(false);
  const [currentMockIndex, setCurrentMockIndex] = useState(0);
  const [mockRevealed, setMockRevealed] = useState(false);
  const [mockScore, setMockScore] = useState({ correct: 0, total: 0 });

  const categories = ['all', ...new Set(mockInterviews.map(q => q.category))];
  const difficulties = { easy: 'var(--green)', medium: 'var(--accent)', hard: 'var(--red)' };

  const filtered = activeCategory === 'all' ? mockInterviews : mockInterviews.filter(q => q.category === activeCategory);

  // Mock interview mode
  const startMockInterview = () => {
    setMockMode(true);
    setCurrentMockIndex(0);
    setMockRevealed(false);
    setMockScore({ correct: 0, total: 0 });
  };

  const currentMockQ = mockInterviews[currentMockIndex];

  const handleMockNext = (knew) => {
    if (knew) {
      setMockScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setMockScore(prev => ({ ...prev, total: prev.total + 1 }));
    }
    markInterviewComplete(currentMockQ.id);

    if (currentMockIndex + 1 < mockInterviews.length) {
      setCurrentMockIndex(prev => prev + 1);
      setMockRevealed(false);
    } else {
      setMockMode(false);
    }
  };

  if (mockMode) {
    return (
      <div style={{ animation: 'fadeIn 0.4s ease forwards', maxWidth: '800px' }}>
        {/* Mock Interview Mode */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.5rem',
        }}>
          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '4px' }}>Mock Interview</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              Question {currentMockIndex + 1} of {mockInterviews.length}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span style={{
              padding: '6px 12px',
              background: 'var(--green-subtle)',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: '600',
              color: 'var(--green)',
              fontFamily: 'var(--font-mono)',
            }}>
              {mockScore.correct}/{mockScore.total} correct
            </span>
            <button onClick={() => setMockMode(false)} style={{
              padding: '8px 14px',
              background: 'var(--bg-card)',
              color: 'var(--text-muted)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.8rem',
              border: '1px solid var(--border)',
            }}>Exit</button>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{
          height: '4px',
          background: 'var(--bg-card)',
          borderRadius: '2px',
          marginBottom: '2rem',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            width: `${((currentMockIndex) / mockInterviews.length) * 100}%`,
            background: 'linear-gradient(90deg, var(--accent), var(--green))',
            transition: 'width 0.5s ease',
          }} />
        </div>

        {/* Question Card */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
        }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
            <span style={{
              padding: '3px 10px',
              borderRadius: '4px',
              fontSize: '0.7rem',
              fontWeight: '600',
              background: difficulties[currentMockQ.difficulty] + '20',
              color: difficulties[currentMockQ.difficulty],
              textTransform: 'uppercase',
            }}>{currentMockQ.difficulty}</span>
            <span style={{
              padding: '3px 10px',
              borderRadius: '4px',
              fontSize: '0.7rem',
              fontWeight: '600',
              background: 'var(--blue-subtle)',
              color: 'var(--blue)',
            }}>{currentMockQ.category}</span>
          </div>

          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1.5rem', lineHeight: 1.4 }}>
            {currentMockQ.question}
          </h2>

          {!mockRevealed ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                Think about your answer, then reveal to check.
              </p>
              <button onClick={() => setMockRevealed(true)} style={{
                padding: '14px 32px',
                background: 'var(--accent)',
                color: 'var(--bg-primary)',
                borderRadius: 'var(--radius-sm)',
                fontWeight: '700',
                fontSize: '1rem',
                boxShadow: '0 4px 20px rgba(245,158,11,0.3)',
              }}>
                Reveal Answer
              </button>
            </div>
          ) : (
            <div style={{ animation: 'fadeIn 0.4s ease forwards' }}>
              <div style={{
                padding: '1.25rem',
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border)',
                marginBottom: '1.5rem',
                lineHeight: '1.8',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
              }}>
                {currentMockQ.answer.split('\n').map((line, i) => {
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return <h4 key={i} style={{ color: 'var(--accent)', marginTop: '0.75rem', marginBottom: '0.25rem' }}>{line.replace(/\*\*/g, '')}</h4>;
                  }
                  if (line.startsWith('- ')) {
                    return <div key={i} style={{ paddingLeft: '1rem' }}>• {line.slice(2)}</div>;
                  }
                  if (line.match(/^\d+\./)) {
                    return <div key={i} style={{ paddingLeft: '1rem' }}>{line}</div>;
                  }
                  if (line.trim() === '') return <br key={i} />;
                  return <p key={i}>{line}</p>;
                })}
              </div>

              {currentMockQ.codeExample && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <CodePlayground initialCode={currentMockQ.codeExample} title="example.js" />
                </div>
              )}

              {currentMockQ.followUp && (
                <div style={{
                  padding: '1rem',
                  background: 'var(--purple-subtle)',
                  border: '1px solid rgba(139,92,246,0.2)',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '1.5rem',
                }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--purple)', marginBottom: '8px' }}>
                    Follow-up: {currentMockQ.followUp}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {currentMockQ.followUpAnswer}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button onClick={() => handleMockNext(false)} style={{
                  padding: '12px 24px',
                  background: 'var(--red-subtle)',
                  color: 'var(--red)',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: '600',
                  border: '1px solid rgba(239,68,68,0.3)',
                }}>
                  Didn't Know
                </button>
                <button onClick={() => handleMockNext(true)} style={{
                  padding: '12px 24px',
                  background: 'var(--green)',
                  color: '#fff',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: '600',
                }}>
                  I Knew This ✓
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ animation: 'fadeIn 0.5s ease forwards' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
            Mock Interview
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            {mockInterviews.length} interview questions across all difficulty levels
          </p>
        </div>
        <button onClick={startMockInterview} style={{
          padding: '12px 24px',
          background: 'linear-gradient(135deg, var(--accent), #f97316)',
          color: 'var(--bg-primary)',
          borderRadius: 'var(--radius-sm)',
          fontWeight: '700',
          fontSize: '0.9rem',
          boxShadow: '0 4px 20px rgba(245,158,11,0.3)',
        }}>
          Start Mock Interview →
        </button>
      </div>

      {/* Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '12px',
        marginBottom: '2rem',
      }}>
        {[
          { label: 'Total Questions', value: mockInterviews.length, color: 'var(--blue)' },
          { label: 'Completed', value: progress.interviewsCompleted.length, color: 'var(--green)' },
          { label: 'Easy', value: mockInterviews.filter(q => q.difficulty === 'easy').length, color: 'var(--green)' },
          { label: 'Medium', value: mockInterviews.filter(q => q.difficulty === 'medium').length, color: 'var(--accent)' },
          { label: 'Hard', value: mockInterviews.filter(q => q.difficulty === 'hard').length, color: 'var(--red)' },
        ].map(stat => (
          <div key={stat.label} style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '1rem',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: stat.color, fontFamily: 'var(--font-mono)' }}>{stat.value}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Category Filter */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem', overflowX: 'auto', paddingBottom: '4px' }}>
        {categories.map(c => (
          <button key={c} onClick={() => setActiveCategory(c)} style={{
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: activeCategory === c ? '600' : '400',
            background: activeCategory === c ? 'var(--accent)' : 'var(--bg-card)',
            color: activeCategory === c ? 'var(--bg-primary)' : 'var(--text-muted)',
            border: `1px solid ${activeCategory === c ? 'var(--accent)' : 'var(--border)'}`,
            whiteSpace: 'nowrap',
          }}>
            {c === 'all' ? 'All' : c}
          </button>
        ))}
      </div>

      {/* Questions List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filtered.map((q) => {
          const isExpanded = expandedId === q.id;
          const isDone = progress.interviewsCompleted.includes(q.id);

          return (
            <div key={q.id} style={{
              background: 'var(--bg-card)',
              border: `1px solid ${isDone ? 'rgba(16,185,129,0.2)' : 'var(--border)'}`,
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              transition: 'all 0.2s',
            }}>
              <button
                onClick={() => setExpandedId(isExpanded ? null : q.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '1.25rem',
                  background: 'transparent',
                  color: 'var(--text-heading)',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  textAlign: 'left',
                }}
              >
                <span style={{
                  width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0,
                  background: isDone ? 'var(--green)' : difficulties[q.difficulty],
                }} />
                <span style={{ flex: 1 }}>{q.question}</span>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexShrink: 0 }}>
                  <span style={{
                    fontSize: '0.65rem',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    background: difficulties[q.difficulty] + '20',
                    color: difficulties[q.difficulty],
                    fontWeight: '600',
                    textTransform: 'uppercase',
                  }}>{q.difficulty}</span>
                  <span style={{
                    fontSize: '0.65rem',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-muted)',
                  }}>{q.category}</span>
                  <span style={{
                    color: 'var(--text-muted)',
                    transition: 'transform 0.2s',
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)',
                  }}>▼</span>
                </div>
              </button>

              {isExpanded && (
                <div style={{ padding: '0 1.25rem 1.25rem', animation: 'fadeIn 0.3s ease' }}>
                  <div style={{
                    padding: '1rem',
                    background: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border)',
                    marginBottom: '1rem',
                    lineHeight: '1.8',
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                  }}>
                    {q.answer.split('\n').map((line, i) => {
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return <h4 key={i} style={{ color: 'var(--accent)', marginTop: '0.5rem' }}>{line.replace(/\*\*/g, '')}</h4>;
                      }
                      if (line.startsWith('- ')) return <div key={i} style={{ paddingLeft: '0.75rem' }}>• {line.slice(2)}</div>;
                      if (line.match(/^\d+\./)) return <div key={i} style={{ paddingLeft: '0.75rem' }}>{line}</div>;
                      if (line.trim() === '') return <br key={i} />;
                      return <p key={i}>{line}</p>;
                    })}
                  </div>

                  {q.codeExample && (
                    <div style={{ marginBottom: '1rem' }}>
                      <CodePlayground initialCode={q.codeExample} title="interview-example.js" />
                    </div>
                  )}

                  {q.followUp && (
                    <div style={{
                      padding: '1rem',
                      background: 'var(--purple-subtle)',
                      border: '1px solid rgba(139,92,246,0.2)',
                      borderRadius: 'var(--radius-sm)',
                    }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--purple)', marginBottom: '6px' }}>
                        Follow-up: {q.followUp}
                      </div>
                      <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        {q.followUpAnswer}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => markInterviewComplete(q.id)}
                    style={{
                      marginTop: '1rem',
                      padding: '8px 16px',
                      background: isDone ? 'var(--green-subtle)' : 'var(--bg-secondary)',
                      color: isDone ? 'var(--green)' : 'var(--text-muted)',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      border: `1px solid ${isDone ? 'rgba(16,185,129,0.3)' : 'var(--border)'}`,
                    }}
                  >
                    {isDone ? '✓ Reviewed' : 'Mark as Reviewed'}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
