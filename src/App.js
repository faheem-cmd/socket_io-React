import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Dashboard from "./components/Dashboard";
import Students from "./components/Students";
function App() {
  return (
    <ChakraProvider>
      <Router>
        {/* 
        <div className="auth-wrapper">
          <div className="auth-inner"> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
        </Routes>
        {/* </div>
        </div> */}
      </Router>
    </ChakraProvider>
  );
}

export default App;
