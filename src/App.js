import react from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './Styles/style.css'
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
