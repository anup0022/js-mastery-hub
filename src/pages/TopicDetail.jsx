import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import curriculum from '../data/curriculum';
import topicVideos from '../data/topicVideos';
import SplitEditor from '../components/SplitEditor';

export default function TopicDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { progress, markTopicComplete, saveQuizScore, toggleBookmark, saveNote } = useProgress();
  
  const topic = curriculum.find(t => t.id === Number(id));
  const [activeTab, setActiveTab] = useState('learn');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [noteText, setNoteText] = useState(progress.notes[id] || '');
  const [showFollowUp, setShowFollowUp] = useState({});

  if (!topic) {
    return <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>Topic not found. <Link to="/topics">Back to topics</Link></div>;
  }

  // Parse inline **bold** markers into <strong> elements
  const renderBold = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} style={{ color: 'var(--text-heading)', fontWeight: '600' }}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const isCompleted = progress.completedTopics.includes(topic.id);
  const isBookmarked = progress.bookmarks.includes(topic.id);
  const prevTopic = curriculum.find(t => t.id === topic.id - 1);
  const nextTopic = curriculum.find(t => t.id === topic.id + 1);

  const handleQuizSubmit = () => {
    if (Object.keys(quizAnswers).length < topic.quiz.length) return;
    setQuizSubmitted(true);
    const correct = topic.quiz.filter((q, i) => quizAnswers[i] === q.answer).length;
    const score = Math.round((correct / topic.quiz.length) * 100);
    saveQuizScore(topic.id, score);
  };

  const handleSaveNote = () => {
    saveNote(topic.id, noteText);
  };

  const tabs = [
    { id: 'learn', label: 'Learn' },
    { id: 'code', label: 'Practice' },
    { id: 'video', label: 'Video' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'interview', label: 'Interview Q&A' },
    { id: 'notes', label: 'Notes' },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease forwards' }}>
      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Link to="/topics" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Topics</Link>
          <span style={{ color: 'var(--text-muted)' }}>/</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{topic.module}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '8px' }}>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '1.25rem', marginRight: '10px' }}>#{topic.id}</span>
              {topic.title}
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{topic.description}</p>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
            <button
              onClick={() => toggleBookmark(topic.id)}
              style={{
                padding: '8px 14px',
                background: isBookmarked ? 'var(--accent-subtle)' : 'var(--bg-card)',
                color: isBookmarked ? 'var(--accent)' : 'var(--text-muted)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.825rem',
                border: `1px solid ${isBookmarked ? 'var(--border-accent)' : 'var(--border)'}`,
              }}
            >
              {isBookmarked ? '★ Bookmarked' : '☆ Bookmark'}
            </button>
            <button
              onClick={() => markTopicComplete(topic.id)}
              style={{
                padding: '8px 16px',
                background: isCompleted ? 'var(--green)' : 'var(--accent)',
                color: isCompleted ? '#fff' : 'var(--bg-primary)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.825rem',
                fontWeight: '600',
                boxShadow: isCompleted ? 'none' : '0 4px 16px rgba(245,158,11,0.3)',
              }}
            >
              {isCompleted ? 'Completed ✓' : 'Mark Complete'}
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        gap: '2px',
        marginBottom: '1.5rem',
        background: 'var(--bg-secondary)',
        padding: '4px',
        borderRadius: 'var(--radius-sm)',
        overflowX: 'auto',
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '10px 18px',
              borderRadius: '6px',
              fontSize: '0.85rem',
              fontWeight: activeTab === tab.id ? '600' : '400',
              background: activeTab === tab.id ? 'var(--bg-card)' : 'transparent',
              color: activeTab === tab.id ? 'var(--accent)' : 'var(--text-muted)',
              whiteSpace: 'nowrap',
              border: activeTab === tab.id ? '1px solid var(--border)' : '1px solid transparent',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* LEARN TAB */}
      {activeTab === 'learn' && (
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '2rem',
          lineHeight: '1.8',
          fontSize: '0.95rem',
        }}>
          {topic.content.split('\n').map((line, i) => {
            if (line.startsWith('**') && line.endsWith('**')) {
              return <h3 key={i} style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent)', fontSize: '1.1rem' }}>{line.replace(/\*\*/g, '')}</h3>;
            }
            if (line.startsWith('- ')) {
              return <div key={i} style={{ paddingLeft: '1rem', marginBottom: '4px', color: 'var(--text-secondary)' }}>• {renderBold(line.slice(2))}</div>;
            }
            if (line.match(/^\d+\./)) {
              return <div key={i} style={{ paddingLeft: '1rem', marginBottom: '4px', color: 'var(--text-secondary)' }}>{renderBold(line)}</div>;
            }
            if (line.trim() === '') return <br key={i} />;
            return <p key={i} style={{ color: 'var(--text-secondary)', marginBottom: '4px' }}>{renderBold(line)}</p>;
          })}

          {/* Code Examples within Learn */}
          {topic.codeExamples.map((ex, i) => (
            <div key={i} style={{ marginTop: '2rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--text-heading)' }}>{ex.title}</h4>
              <pre style={{
                background: 'var(--bg-code)',
                padding: '1rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border)',
                overflow: 'auto',
                fontSize: '0.825rem',
                lineHeight: '1.7',
                color: 'var(--text-primary)',
              }}>
                {ex.code}
              </pre>
              {ex.explanation && (
                <p style={{
                  marginTop: '0.75rem',
                  padding: '12px 16px',
                  background: 'var(--accent-subtle)',
                  border: '1px solid var(--border-accent)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  color: 'var(--accent)',
                  lineHeight: '1.5',
                }}>
                  💡 {ex.explanation}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* PRACTICE TAB — W3Schools-style Split Editor */}
      {activeTab === 'code' && (
        <div>
          {topic.codeExamples.map((ex, i) => {
            // Detect if code is HTML-based (contains tags) or pure JS
            const hasHTML = /<[a-z][\s\S]*?>/i.test(ex.code);
            const isHTMLExample = hasHTML && (ex.code.includes('<script') || ex.code.includes('<button') || ex.code.includes('<div') || ex.code.includes('<p') || ex.code.includes('<!'));

            let htmlPart = '';
            let cssPart = '';
            let jsPart = '';

            if (isHTMLExample) {
              // Extract CSS from <style> tags
              const styleMatch = ex.code.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
              if (styleMatch) cssPart = styleMatch[1].trim();

              // Extract JS from <script> tags
              const scriptMatch = ex.code.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
              if (scriptMatch) jsPart = scriptMatch[1].trim();

              // Extract body HTML (remove script and style tags)
              htmlPart = ex.code
                .replace(/<style[\s\S]*?<\/style>/gi, '')
                .replace(/<script[\s\S]*?<\/script>/gi, '')
                .replace(/<!DOCTYPE[^>]*>/gi, '')
                .replace(/<\/?html[^>]*>/gi, '')
                .replace(/<\/?head[^>]*>/gi, '')
                .replace(/<\/?body[^>]*>/gi, '')
                .trim();
            } else {
              // Pure JS: strip any leftover HTML comments/tags
              jsPart = ex.code
                .replace(/<!--[\s\S]*?-->/g, '')
                .replace(/<[^>]+>/g, '')
                .trim();
            }

            return (
              <div key={i} style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem' }}>
                  {ex.title}
                </h3>
                {ex.explanation && (
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>{ex.explanation}</p>
                )}
                <SplitEditor
                  initialHTML={htmlPart}
                  initialCSS={cssPart}
                  initialJS={jsPart}
                  title={isHTMLExample ? `${ex.title}` : `${ex.title}.js`}
                  mode={isHTMLExample ? 'full' : 'js'}
                />
              </div>
            );
          })}

          {/* Free Playground */}
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem' }}>
              Free Playground
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
              Write HTML, CSS & JavaScript — see live results instantly
            </p>
            <SplitEditor
              initialHTML={'<h1>Hello World!</h1>\n<p>Edit this code and click Run</p>'}
              initialCSS={'h1 { color: #f59e0b; }\np { color: #94a3b8; }'}
              initialJS={`// Topic: ${topic.title}\nconsole.log("Hello from the playground!");`}
              title="Free Playground"
              mode="full"
            />
          </div>
        </div>
      )}

      {/* VIDEO TAB — Multiple related videos per topic */}
      {activeTab === 'video' && (() => {
        const videos = topicVideos[topic.id] || [];
        const primaryVideo = videos[0];
        const otherVideos = videos.slice(1);

        return (
          <div>
            {/* Primary video player */}
            {primaryVideo && (
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                marginBottom: '1.5rem',
              }}>
                <div style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${primaryVideo.id}`}
                    title={primaryVideo.title}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none',
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>{primaryVideo.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    Code with Harry — JavaScript Tutorial in Hindi
                  </p>
                  <a
                    href={`https://www.youtube.com/watch?v=${primaryVideo.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginTop: '0.75rem',
                      padding: '8px 14px',
                      background: 'var(--red)',
                      color: '#fff',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      textDecoration: 'none',
                    }}
                  >
                    Watch on YouTube →
                  </a>
                </div>
              </div>
            )}

            {/* Related videos grid */}
            {otherVideos.length > 0 && (
              <div>
                <h3 style={{
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--text-heading)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <span style={{
                    background: 'var(--red-subtle)',
                    color: 'var(--red)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontWeight: '700',
                  }}>
                    +{otherVideos.length}
                  </span>
                  More Related Videos
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '12px',
                }}>
                  {otherVideos.map((video, vi) => (
                    <a
                      key={vi}
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        gap: '12px',
                        padding: '12px',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-sm)',
                        textDecoration: 'none',
                        transition: 'all 0.15s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'var(--border-hover)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'var(--border)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                        alt=""
                        style={{
                          width: '120px',
                          height: '68px',
                          objectFit: 'cover',
                          borderRadius: '6px',
                          flexShrink: 0,
                        }}
                        loading="lazy"
                      />
                      <div style={{ minWidth: 0 }}>
                        <div style={{
                          fontSize: '0.82rem',
                          fontWeight: '500',
                          color: 'var(--text-heading)',
                          lineHeight: 1.3,
                          marginBottom: '6px',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}>
                          {video.title}
                        </div>
                        <div style={{
                          fontSize: '0.7rem',
                          color: 'var(--red)',
                          fontWeight: '500',
                        }}>
                          Code with Harry
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Playlist link */}
            <div style={{
              marginTop: '1.5rem',
              padding: '1rem 1.25rem',
              background: 'linear-gradient(135deg, rgba(239,68,68,0.08), var(--bg-card))',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
            }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Want more? Browse the complete 100-video playlist
              </div>
              <a
                href="https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '7px 14px',
                  background: 'var(--red)',
                  color: '#fff',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.78rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                }}
              >
                Full Playlist →
              </a>
            </div>
          </div>
        );
      })()}

      {/* QUIZ TAB */}
      {activeTab === 'quiz' && (
        <div>
          {topic.quiz.map((q, qi) => {
            const userAnswer = quizAnswers[qi];
            const isCorrect = quizSubmitted && userAnswer === q.answer;
            const isWrong = quizSubmitted && userAnswer !== undefined && userAnswer !== q.answer;

            return (
              <div key={qi} style={{
                background: 'var(--bg-card)',
                border: `1px solid ${isCorrect ? 'rgba(16,185,129,0.3)' : isWrong ? 'rgba(239,68,68,0.3)' : 'var(--border)'}`,
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
                marginBottom: '1rem',
              }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '1rem' }}>
                  <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', marginRight: '8px' }}>Q{qi + 1}.</span>
                  {q.question}
                </h4>
                <div style={{ display: 'grid', gap: '8px' }}>
                  {q.options.map((opt, oi) => {
                    const isSelected = userAnswer === oi;
                    const showCorrect = quizSubmitted && oi === q.answer;
                    const showWrong = quizSubmitted && isSelected && oi !== q.answer;

                    return (
                      <button
                        key={oi}
                        onClick={() => !quizSubmitted && setQuizAnswers({ ...quizAnswers, [qi]: oi })}
                        disabled={quizSubmitted}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '12px 16px',
                          background: showCorrect ? 'var(--green-subtle)' : showWrong ? 'var(--red-subtle)' : isSelected ? 'var(--accent-subtle)' : 'var(--bg-secondary)',
                          border: `1px solid ${showCorrect ? 'rgba(16,185,129,0.4)' : showWrong ? 'rgba(239,68,68,0.4)' : isSelected ? 'var(--border-accent)' : 'var(--border)'}`,
                          borderRadius: 'var(--radius-sm)',
                          color: 'var(--text-primary)',
                          fontSize: '0.875rem',
                          textAlign: 'left',
                          cursor: quizSubmitted ? 'default' : 'pointer',
                          transition: 'all 0.15s',
                        }}
                      >
                        <span style={{
                          width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: showCorrect ? 'var(--green)' : showWrong ? 'var(--red)' : isSelected ? 'var(--accent)' : 'var(--bg-card)',
                          color: (isSelected || showCorrect || showWrong) ? '#fff' : 'var(--text-muted)',
                          fontSize: '0.75rem', fontWeight: '600',
                          border: (!isSelected && !showCorrect && !showWrong) ? '1px solid var(--border)' : 'none',
                        }}>
                          {showCorrect ? '✓' : showWrong ? '✗' : String.fromCharCode(65 + oi)}
                        </span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div style={{ display: 'flex', gap: '12px', marginTop: '1rem' }}>
            {!quizSubmitted ? (
              <button
                onClick={handleQuizSubmit}
                disabled={Object.keys(quizAnswers).length < topic.quiz.length}
                style={{
                  padding: '12px 24px',
                  background: Object.keys(quizAnswers).length < topic.quiz.length ? 'var(--text-muted)' : 'var(--accent)',
                  color: 'var(--bg-primary)',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  cursor: Object.keys(quizAnswers).length < topic.quiz.length ? 'not-allowed' : 'pointer',
                }}
              >
                Submit Quiz ({Object.keys(quizAnswers).length}/{topic.quiz.length} answered)
              </button>
            ) : (
              <>
                <div style={{
                  padding: '12px 20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                }}>
                  Score: <span style={{
                    color: progress.quizScores[topic.id] >= 80 ? 'var(--green)' : 'var(--accent)',
                    fontFamily: 'var(--font-mono)',
                  }}>{progress.quizScores[topic.id]}%</span>
                </div>
                <button
                  onClick={() => { setQuizAnswers({}); setQuizSubmitted(false); }}
                  style={{
                    padding: '12px 20px',
                    background: 'var(--bg-card)',
                    color: 'var(--text-secondary)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem',
                    border: '1px solid var(--border)',
                  }}
                >
                  Retry Quiz
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* INTERVIEW TAB */}
      {activeTab === 'interview' && (
        <div>
          {topic.interviewQuestions.map((iq, i) => (
            <div key={i} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '1.5rem',
              marginBottom: '1rem',
            }}>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'var(--text-heading)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
              }}>
                <span style={{
                  background: 'var(--purple-subtle)',
                  color: 'var(--purple)',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  flexShrink: 0,
                  marginTop: '2px',
                }}>Q</span>
                {iq.q}
              </h4>
              <div style={{
                padding: '1rem',
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border)',
                fontSize: '0.875rem',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
              }}>
                {iq.a}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* NOTES TAB */}
      {activeTab === 'notes' && (
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '1.5rem',
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>Your Notes for: {topic.title}</h3>
          <textarea
            value={noteText}
            onChange={e => setNoteText(e.target.value)}
            placeholder="Write your notes here... These are saved locally in your browser."
            style={{
              width: '100%',
              minHeight: '250px',
              padding: '16px',
              background: 'var(--bg-input)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-primary)',
              fontSize: '0.9rem',
              lineHeight: '1.7',
              resize: 'vertical',
              fontFamily: 'var(--font-body)',
            }}
            onFocus={e => e.target.style.borderColor = 'var(--accent)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
          <button
            onClick={handleSaveNote}
            style={{
              marginTop: '1rem',
              padding: '10px 20px',
              background: 'var(--accent)',
              color: 'var(--bg-primary)',
              borderRadius: 'var(--radius-sm)',
              fontWeight: '600',
              fontSize: '0.875rem',
            }}
          >
            Save Notes
          </button>
        </div>
      )}

      {/* Navigation */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '2rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid var(--border)',
      }}>
        {prevTopic ? (
          <Link to={`/topic/${prevTopic.id}`} style={{
            padding: '10px 18px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-secondary)',
            fontSize: '0.85rem',
            textDecoration: 'none',
          }}>
            ← {prevTopic.title}
          </Link>
        ) : <div />}
        {nextTopic ? (
          <Link to={`/topic/${nextTopic.id}`} style={{
            padding: '10px 18px',
            background: 'var(--accent)',
            color: 'var(--bg-primary)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.85rem',
            fontWeight: '600',
            textDecoration: 'none',
          }}>
            {nextTopic.title} →
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
