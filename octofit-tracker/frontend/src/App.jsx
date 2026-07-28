import { NavLink, Routes, Route } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

const navItems = [
  { to: '/', label: 'Overview' },
  { to: '/users', label: 'Users' },
  { to: '/teams', label: 'Teams' },
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/workouts', label: 'Workouts' },
];

function App() {
  return (
    <div className="container py-4 py-lg-5">
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body p-4 p-lg-5">
          <p className="text-uppercase text-primary fw-semibold mb-2">OctoFit Tracker</p>
          <h1 className="display-6 fw-bold mb-3">Modern fitness tracking for teams</h1>
          <p className="lead text-muted mb-4">
            Connect the presentation, logic, and data tiers with environment-aware API routes.
          </p>
          <p className="small text-muted mb-0">
            Fixed - Define VITE_CODESPACE_NAME in .env.local to use Codespaces URLs. When it is unset, the app falls back to localhost.
          </p>
        </div>
      </div>

      <nav className="nav nav-pills flex-wrap gap-2 mb-4">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/users" element={<Users />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  );
}

function Overview() {
  return (
    <div className="row g-3">
      <div className="col-lg-6">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h2 className="h5">Connected tiers</h2>
            <p className="text-muted mb-0">React 19 frontend, Express API, and MongoDB-backed data services.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h2 className="h5">Environment-aware API</h2>
            <p className="text-muted mb-0">The frontend builds URLs from import.meta.env and safely avoids undefined hostnames.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
