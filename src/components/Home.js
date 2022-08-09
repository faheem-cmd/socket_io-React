import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "../components/Dashboard";

function Home() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route exact path="dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default Home;
