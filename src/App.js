import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./AdminPages/Dashboard/Dashboard";
import AdminHome from "./AdminPages/Home/Home";
import AdminAbout from "./AdminPages/About/About";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>

          {/* This is Normal Routes */}

          <Route path="/" element={<Home/>} />

          {/* This is Admin Routes */}

          <Route path="/admin/dashboard" element={<Dashboard/>} />
          <Route path="/admin/home" element={<AdminHome/>} />
          <Route path="/admin/aboutme" element={<AdminAbout/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
