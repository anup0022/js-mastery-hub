# JS Mastery Hub

**Learn JavaScript from Zero to Hero** -- an interactive, all-in-one learning platform built with React.

**[Live Demo](https://anup0022.github.io/js-mastery-hub/)**

---

## About

JS Mastery Hub is a comprehensive JavaScript learning platform designed for self-paced study. It combines structured curriculum, video lessons, interactive code playgrounds, quizzes, and interview preparation into a single, cohesive experience -- all running entirely in the browser with no backend required.

---

## Features

### Structured Curriculum
- 28 topics organized into progressive modules (Basics, Functions, DOM, Async, Advanced)
- Difficulty levels: Beginner, Intermediate, Advanced
- Each topic includes theory, code examples, quizzes, and interview questions

### Interactive Code Playground
- In-browser JavaScript execution with real-time output
- Syntax-highlighted editor with line numbers
- Captures `console.log`, `console.error`, and `console.warn` output
- Tab indentation and Ctrl+Enter to run

### Video Library
- Curated video lessons mapped to each topic
- Embedded YouTube player with related videos
- Content sourced from Code with Harry's JavaScript playlist (Hindi)

### Quizzes & Assessments
- Multiple-choice quizzes per topic with instant feedback
- Score tracking with best-score persistence
- Color-coded correct/incorrect indicators

### Mock Interview Mode
- 15+ categorized interview questions (Closures, DOM, Async, etc.)
- Flashcard-style mock interview flow with self-assessment
- Difficulty tags: Easy, Medium, Hard
- Runnable code examples within answers

### Progress Tracking
- Topic completion tracking with visual progress bars
- Study streak counter (consecutive days)
- Quiz score history
- Overall dashboard with stats overview

### Personal Notes & Bookmarks
- Per-topic note-taking with persistent storage
- Bookmark topics for quick access
- Aggregated notes and bookmarks pages

### Dark / Light Theme
- Toggle between dark and light modes
- Preference persisted across sessions

---

## Tech Stack

| Layer        | Technology                           |
|------------- |--------------------------------------|
| Framework    | React 18                             |
| Routing      | React Router v6                      |
| Build Tool   | Vite 5                               |
| Styling      | CSS Variables + Inline Styles        |
| State        | React Context API                    |
| Persistence  | localStorage                         |
| Hosting      | GitHub Pages                         |

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
git clone https://github.com/anup0022/js-mastery-hub.git
cd js-mastery-hub
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── CodePlayground.jsx   # In-browser JS executor
│   ├── Layout.jsx           # Sidebar + header layout
│   └── SplitEditor.jsx      # HTML/CSS/JS split editor
├── context/
│   ├── AuthContext.jsx       # Local authentication
│   ├── ProgressContext.jsx   # Learning progress state
│   └── ThemeContext.jsx      # Dark/light theme toggle
├── data/
│   ├── curriculum.js         # Topics, content, quizzes
│   ├── mockInterviews.js     # Interview Q&A bank
│   └── topicVideos.js        # Video mappings
├── pages/
│   ├── Dashboard.jsx         # Stats overview
│   ├── TopicsPage.jsx        # Filterable topic grid
│   ├── TopicDetail.jsx       # 6-tab topic detail view
│   ├── VideosPage.jsx        # Video library
│   ├── InterviewPage.jsx     # Interview prep + mock mode
│   ├── NotesPage.jsx         # Aggregated notes
│   ├── BookmarksPage.jsx     # Saved topics
│   └── LoginPage.jsx         # Auth screen
├── App.jsx                   # Routes and providers
└── main.jsx                  # Entry point
```

---

## Deployment

This project is deployed automatically to GitHub Pages via GitHub Actions. Every push to `main` triggers a build and deploy workflow.

**Live URL:** https://anup0022.github.io/js-mastery-hub/

---

## License

This project is open source and available under the [MIT License](LICENSE).
