import { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('jsmastery_progress');
    return saved ? JSON.parse(saved) : {
      completedTopics: [],
      quizScores: {},
      bookmarks: [],
      notes: {},
      studyStreak: 0,
      lastStudyDate: null,
      totalStudyTime: 0,
      interviewsCompleted: [],
    };
  });

  useEffect(() => {
    localStorage.setItem('jsmastery_progress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    const today = new Date().toDateString();
    if (progress.lastStudyDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const isConsecutive = progress.lastStudyDate === yesterday.toDateString();
      setProgress(prev => ({
        ...prev,
        studyStreak: isConsecutive ? prev.studyStreak : 0,
      }));
    }
  }, []);

  const markTopicComplete = (topicId) => {
    const today = new Date().toDateString();
    setProgress(prev => ({
      ...prev,
      completedTopics: prev.completedTopics.includes(topicId) 
        ? prev.completedTopics 
        : [...prev.completedTopics, topicId],
      lastStudyDate: today,
      studyStreak: prev.lastStudyDate === today ? prev.studyStreak : prev.studyStreak + 1,
    }));
  };

  const saveQuizScore = (topicId, score) => {
    setProgress(prev => ({
      ...prev,
      quizScores: { ...prev.quizScores, [topicId]: Math.max(score, prev.quizScores[topicId] || 0) },
    }));
  };

  const toggleBookmark = (topicId) => {
    setProgress(prev => ({
      ...prev,
      bookmarks: prev.bookmarks.includes(topicId)
        ? prev.bookmarks.filter(id => id !== topicId)
        : [...prev.bookmarks, topicId],
    }));
  };

  const saveNote = (topicId, note) => {
    setProgress(prev => ({
      ...prev,
      notes: { ...prev.notes, [topicId]: note },
    }));
  };

  const markInterviewComplete = (interviewId) => {
    setProgress(prev => ({
      ...prev,
      interviewsCompleted: prev.interviewsCompleted.includes(interviewId)
        ? prev.interviewsCompleted
        : [...prev.interviewsCompleted, interviewId],
    }));
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      markTopicComplete,
      saveQuizScore,
      toggleBookmark,
      saveNote,
      markInterviewComplete,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within ProgressProvider');
  return context;
}
