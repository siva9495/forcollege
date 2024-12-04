import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import DashboardActivity from './DashboardPage/DashboardActivity';

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/dashboard/*" element={<DashboardActivity />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
