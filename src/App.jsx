import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import UserLoginActivity from "./LoginPage/UserLoginActivity";
import NavbarLoginActivity from "./LoginPage/NavbarLoginActivity";
import HomePageActivity from "./LoginPage/HomePageActivity";
import NavSideBar from "./DashboardPage/NavSideBar";

function App() {
  

  return (
    <>
      <Toaster/>
      <Router>
        <Routes>
          <Route path="/" element={<NavSideBar/>} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
