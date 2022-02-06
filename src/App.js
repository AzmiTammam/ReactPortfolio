import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './Styles/style.css'
import HomePage from "./Pages/HomePage";
import Login from "./Components/Login/Login";
const Navbar = React.lazy(() => import('./Components/Navbar/Navbar'));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>} >
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<Login />} />
    </Routes>
    </BrowserRouter>
    </Suspense>

  );
}

export default App;
