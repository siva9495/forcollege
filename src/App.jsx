import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import DashboardActivity from './DashboardPage/DashboardActivity';
import AuthPage from './LoginPage/AuthPage';
import CurrentJobs from './CurrentJobsPage/CurrentJobs';
import UserDetailsDashboard from './DashboardPage/UserDetailsDashboard';

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          {/* <Route path="/" element={<DashboardActivity />} /> */}
          <Route path="/signin" element={<AuthPage />} />
          <Route path="/" element={<UserDetailsDashboard/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
