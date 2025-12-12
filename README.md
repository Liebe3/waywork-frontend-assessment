# Waywork - Next Generation Talent Mobility Platform

A modern, responsive React application for matching job seekers with perfect job opportunities using skill-based matching. Built with cutting-edge technologies for an exceptional user experience.

## 🌟 Features

- **Profile Management** - Create and manage your professional profile with skills and experience
- **Browse All Jobs** - Explore all available job opportunities in one place
- **Application Tracking** - Track the status of your job applications
- **Responsive Design** - Perfect experience on desktop, tablet, and mobile devices
- **Beautiful Animations** - Smooth, engaging transitions and interactions
- **Real-time Notifications** - Instant feedback for all actions with SweetAlert2

## 🛠️ Tech Stack

### Core Framework

- **React** - Modern UI library with latest features
- **Vite** - Lightning-fast build tool and dev server

### Styling & UI

- **Tailwind** - Utility-first CSS framework for rapid UI development
- **Radix UI Components** - Accessible, unstyled component primitives

### Animations & Interactions

- **Motion (Framer Motion)** - Powerful animation library for smooth interactions
- **Lucide React** - Beautiful, consistent icon library

### Notifications & Alerts

- **SweetAlert2** - Elegant popup alerts and notifications

## 📦 Installation

### Setup Steps

1. **Clone the repository**

```bash
git clone <repository-url>
cd waywork-frontend-assessment
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

## 📝 Available Scripts

```bash
# Start development server
npm run dev
```

## 📂 Project Structure

```
src/
├── components/
│   ├── ApplicationTracker.jsx      # Track job applications with status
│   ├── JobList.jsx                 # Display all available jobs
│   ├── Matches.jsx                 # Show matched job opportunities
│   ├── ProfileForm.jsx             # User profile management
│   ├── TabNavigation.jsx           # Tab-based navigation system
│   └── ui/                         # Radix UI components
│       ├── badge.jsx
│       ├── button.jsx
│       ├── card.jsx
│       ├── input.jsx
│       └── label.jsx
├── pages/
│   └── Dashboard.jsx               # Main application container
├── data/
│   └── jobsData.js                 # Job listings data
├── utils/
│   └── alert.js                    # Reusable alert utility functions
├── App.jsx                         # Root application component
├── App.css                         # Global styles
├── index.css                       # Base styles
└── main.jsx                        # Application entry point
```

## 🎯 How to Use

### 1. Create Your Profile

- Navigate to the **Profile** tab
- Fill in your personal information (name, email, phone, address)
- Add your professional skills (comma-separated)
- Enter your years of experience

### 2. Find Job Matches

- Click **"Find My Perfect Matches"** button
- The app will match your skills with available jobs
- You'll automatically be taken to the **Matches** tab to see results

### 3. Browse All Jobs

- Visit the **All Jobs** tab to see every job opportunity
- Review job details, required skills, location, and salary
- Apply to any job that interests you

### 4. Track Applications

- View the **Applications** tab to see all your submissions
- Check the status of each application (Under Review, etc.)
- See application dates and job details at a glance

## 🚀 Key Features Explained

### Smart Skill Matching

- System matches your skills against job requirements
- Flexible matching algorithm handles different skill names
- Instant feedback on number of matches found

### Responsive Design

- Mobile-first approach for small screens
- Tablet-optimized layout for medium devices
- Full desktop experience with all features visible

### Smooth Animations

- Page transitions with fade and slide effects
- Button hover and tap animations
- Tab switching with smooth transitions

### User-Friendly Alerts

- Profile validation alerts
- Application success notifications
- Match found confirmations
- Helpful error messages

## 🎨 Color Theme

The application uses a modern **Emerald Green**

## 💡 Code Quality

### Clean Architecture

- Separated concerns with dedicated components
- Reusable utility functions for alerts
- Consistent naming conventions
- Clear, readable component structure

### Best Practices

- Functional components with React Hooks
- Proper state management with useState
- Component composition and reusability
- Responsive CSS with Tailwind breakpoints

### State Management

- Use React useState for component state
- Lift state to Dashboard for shared data
- Pass data as props
- Keep state minimal and focused

## 💭 Reflections & Trade-offs

### Design Decisions

**Simplified Matching Algorithm**

- **Trade-off**: Used basic skill substring matching instead of ML-based similarity scoring
- **Rationale**: Keeps the application lightweight and understandable
- **Benefit**: Fast, responsive matching without external dependencies

**Centralized State Management**

- **Chosen**: React hooks with useState in Dashboard component
- **Trade-off**: Works great for medium-sized apps but could benefit from Context API or Zustand for larger projects
- **Benefit**: Simple, straightforward state flow without extra abstractions
- **Future**: Consider React Context or Zustand for deeply nested components

**Alert Utility Separation**

- **Design**: Extracted all SweetAlert2 calls into reusable utility functions
- **Benefit**: Easy to maintain, modify alerts globally, and test

## 🚀 Next Steps & Future Enhancements

### Short Term

1. **Add URL Routing** - Implement React Router for bookmarkable tabs
2. **Persistent Storage** - Save user profile and applications to localStorage or backend
3. **Advanced Filtering** - Add filters for salary range, location, experience level
4. **Search Functionality** - Allow users to search jobs by title or company
5. **Job Details Modal** - Show full job description in a modal or separate page

---
