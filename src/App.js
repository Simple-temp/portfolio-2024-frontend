import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./AdminPages/Dashboard/Dashboard";
import AdminHome from "./AdminPages/Home/Home";
import AdminAbout from "./AdminPages/About/About";
import NotFound from "./Pages/NotFound/NotFound";
import AdminServices from "./AdminPages/Services/Services";
import AdminPortfolio from "./AdminPages/Portfolio/Portfolio";
import AdminMessages from "./AdminPages/Messages/Messages";
import AdminFooter from "./AdminPages/Footer/Footer";
import AdminCustomOrder from "./AdminPages/CustomOrders/CustomOrder";
import AdminNotification from "./AdminPages/Notification/Notification";
import AdminWorkDone from "./AdminPages/WorkDone/WorkDone";
import AdminUserMail from "./AdminPages/UsersMail/UserMail";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Themes from "./Components/Themes/Themes";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <Themes/>
        <Routes>
          {/* This is Normal Routes */}

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* This is Admin Routes */}

          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/aboutme" element={<AdminAbout />} />
          <Route path="/admin/services" element={<AdminServices />} />
          <Route path="/admin/portfolio" element={<AdminPortfolio />} />
          <Route path="/admin/messages" element={<AdminMessages />} />
          <Route path="/admin/footer" element={<AdminFooter />} />
          <Route path="/admin/customorder" element={<AdminCustomOrder />} />
          <Route path="/admin/notification" element={<AdminNotification />} />
          <Route path="/admin/workdone" element={<AdminWorkDone />} />
          <Route path="/admin/usersmail" element={<AdminUserMail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
