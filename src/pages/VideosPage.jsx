import { useState } from 'react';
import { Link } from 'react-router-dom';
import curriculum from '../data/curriculum';
import topicVideos from '../data/topicVideos';

export default function VideosPage() {
  const [activeModule, setActiveModule] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const modules = ['all', ...new Set(curriculum.map(t => t.module))];

  const filtered = activeModule === 'all' ? curriculum : curriculum.filter(t => t.module === activeModule);

  // Count total unique videos
  const allVideoIds = new Set();
  Object.values(topicVideos).forEach(vids => vids.forEach(v => allVideoIds.add(v.id)));

  return (
    <div style={{ animation: 'fadeIn 0.5s ease forwards' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
          Video Lessons
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Learn JavaScript with Code with Harry — {allVideoIds.size} curated videos across {curriculum.length} topics
        </p>
      </div>

      {/* Featured playlist banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(239,68,68,0.1), var(--bg-card))',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        marginBottom: '2rem',
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          background: 'var(--red)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          flexShrink: 0,
        }}>&#9654;</div>
        <div style={{ flex: 1, minWidth: '200px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>Code with Harry — JavaScript Playlist</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Complete 100-video JavaScript tutorial series in Hindi</p>
        </div>
        <a
          href="https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '10px 20px',
            background: 'var(--red)',
            color: '#fff',
            borderRadius: 'var(--radius-sm)',
            fontWeight: '600',
            fontSize: '0.85rem',
            textDecoration: 'none',
          }}
        >
          View Full Playlist →
        </a>
      </div>

      {/* Embedded player for selected video */}
      {selectedVideo && (
        <div style={{
          marginBottom: '2rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
          animation: 'fadeIn 0.3s ease',
        }}>
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
          }}>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
              title={selectedVideo.title}
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
          <div style={{
            padding: '1rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
          }}>
            <div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '4px' }}>{selectedVideo.title}</h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--red)' }}>Code with Harry</p>
            </div>
            <button
              onClick={() => setSelectedVideo(null)}
              style={{
                padding: '6px 14px',
                background: 'var(--bg-secondary)',
                color: 'var(--text-muted)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.78rem',
                border: '1px solid var(--border)',
                cursor: 'pointer',
              }}
            >
              Close Player
            </button>
          </div>
        </div>
      )}

      {/* Module Filter */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '1.5rem',
        overflowX: 'auto',
        paddingBottom: '4px',
      }}>
        {modules.map(m => (
          <button key={m} onClick={() => setActiveModule(m)} style={{
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: activeModule === m ? '600' : '400',
            background: activeModule === m ? 'var(--accent)' : 'var(--bg-card)',
            color: activeModule === m ? 'var(--bg-primary)' : 'var(--text-muted)',
            border: `1px solid ${activeModule === m ? 'var(--accent)' : 'var(--border)'}`,
            whiteSpace: 'nowrap',
            cursor: 'pointer',
          }}>
            {m === 'all' ? 'All Topics' : m}
          </button>
        ))}
      </div>

      {/* Topics with their related videos */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filtered.map((topic, i) => {
          const videos = topicVideos[topic.id] || [];
          if (videos.length === 0) return null;

          return (
            <div key={topic.id} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              animation: 'fadeIn 0.5s ease forwards',
              animationDelay: `${Math.min(i * 0.04, 0.3)}s`,
              opacity: 0,
            }}>
              {/* Topic header */}
              <div style={{
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border)',
                flexWrap: 'wrap',
                gap: '8px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--accent)',
                    background: 'var(--accent-subtle)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontWeight: '700',
                  }}>#{topic.id}</span>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-heading)' }}>
                    {topic.title}
                  </h3>
                  <span style={{
                    fontSize: '0.65rem',
                    color: 'var(--text-muted)',
                    background: 'var(--bg-secondary)',
                    padding: '2px 6px',
                    borderRadius: '3px',
                  }}>{videos.length} video{videos.length > 1 ? 's' : ''}</span>
                </div>
                <Link
                  to={`/topic/${topic.id}`}
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--accent)',
                    textDecoration: 'none',
                    padding: '4px 10px',
                    border: '1px solid var(--border-accent)',
                    borderRadius: '4px',
                  }}
                >
                  Go to Topic →
                </Link>
              </div>

              {/* Video thumbnails row */}
              <div style={{
                display: 'flex',
                overflowX: 'auto',
                padding: '12px',
                gap: '10px',
              }}>
                {videos.map((video, vi) => (
                  <div
                    key={vi}
                    onClick={() => setSelectedVideo(video)}
                    style={{
                      flexShrink: 0,
                      width: '220px',
                      cursor: 'pointer',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      border: selectedVideo?.id === video.id ? '2px solid var(--red)' : '1px solid var(--border)',
                      transition: 'all 0.15s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ position: 'relative' }}>
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                        alt={video.title}
                        style={{
                          width: '100%',
                          height: '124px',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                        loading="lazy"
                      />
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0,0,0,0.3)',
                        opacity: 0,
                        transition: 'opacity 0.2s',
                      }}
                        onMouseEnter={e => e.currentTarget.style.opacity = 1}
                        onMouseLeave={e => e.currentTarget.style.opacity = 0}
                      >
                        <div style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: 'var(--red)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontSize: '0.9rem',
                        }}>&#9654;</div>
                      </div>
                      {vi === 0 && (
                        <span style={{
                          position: 'absolute',
                          top: '6px',
                          left: '6px',
                          background: 'var(--accent)',
                          color: 'var(--bg-primary)',
                          padding: '1px 6px',
                          borderRadius: '3px',
                          fontSize: '0.6rem',
                          fontWeight: '700',
                        }}>PRIMARY</span>
                      )}
                    </div>
                    <div style={{ padding: '8px 10px', background: 'var(--bg-secondary)' }}>
                      <div style={{
                        fontSize: '0.72rem',
                        color: 'var(--text-heading)',
                        lineHeight: 1.3,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}>
                        {video.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
