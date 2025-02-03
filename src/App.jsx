import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import DashboardActivity from './DashboardPage/DashboardActivity';
import HomePageActivity from './LoginPage/HomePageActivity';

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          {/* Redirect root path "/" to "/dashboard" */}
          {/* <Route path="/" element={<Navigate to="/" replace />} />
          <Route path="/*" element={<DashboardActivity />} /> */}
          <Route path='/' element={<HomePageActivity/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
