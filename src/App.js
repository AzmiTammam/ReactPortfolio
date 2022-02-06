import react from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './Styles/style.css'
import HomePage from "./Pages/HomePage";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
