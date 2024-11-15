import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import UserLoginActivity from "./LoginPage/UserLoginActivity";
import NavbarLoginActivity from "./LoginPage/NavbarLoginActivity";
import HomePageActivity from "./LoginPage/HomePageActivity";

function App() {
  

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<HomePageActivity/>} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
