import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import UserLoginActivity from "./LoginPage/UserLoginActivity";
import NavbarLoginActivity from "./LoginPage/NavbarLoginActivity";

function App() {
  

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<UserLoginActivity/>} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
