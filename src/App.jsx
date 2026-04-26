import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import TopicsPage from './pages/TopicsPage';
import TopicDetail from './pages/TopicDetail';
import VideosPage from './pages/VideosPage';
import InterviewPage from './pages/InterviewPage';
import NotesPage from './pages/NotesPage';
import BookmarksPage from './pages/BookmarksPage';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-primary)',
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid var(--border)',
          borderTopColor: 'var(--accent)',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }
  return user ? children : <Navigate to="/login" />;
}

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <LoginPage />} />
      <Route path="/dashboard" element={<ProtectedRoute><Layout><Dashboard /></Layout></ProtectedRoute>} />
      <Route path="/topics" element={<ProtectedRoute><Layout><TopicsPage /></Layout></ProtectedRoute>} />
      <Route path="/topic/:id" element={<ProtectedRoute><Layout><TopicDetail /></Layout></ProtectedRoute>} />
      <Route path="/videos" element={<ProtectedRoute><Layout><VideosPage /></Layout></ProtectedRoute>} />
      <Route path="/interview" element={<ProtectedRoute><Layout><InterviewPage /></Layout></ProtectedRoute>} />
      <Route path="/notes" element={<ProtectedRoute><Layout><NotesPage /></Layout></ProtectedRoute>} />
      <Route path="/bookmarks" element={<ProtectedRoute><Layout><BookmarksPage /></Layout></ProtectedRoute>} />
      <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
    </Routes>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <AuthProvider>
          <ProgressProvider>
            <AppRoutes />
          </ProgressProvider>
        </AuthProvider>
      </ThemeProvider>
    </HashRouter>
  );
}
