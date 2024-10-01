import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Schools from "./pages/Schools";
import Package from "./pages/Package";
import Addons from "./pages/Addons";
import Features from "./pages/Features";
import Subscription from "./pages/Subscription";
import SubscriptionTransaction from "./pages/SubscriptionTransaction";
import StaffManagement from "./pages/StaffManagement";
import WebSettings from "./pages/WebSettings";
import SystemSeting from "./pages/SystemSeting";
import Sidebar from "./pages/Sidebar";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/package" element={<Package />} />
            <Route path="/addons" element={<Addons />} />
            <Route path="/features" element={<Features />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/subscription-transaction" element={<SubscriptionTransaction />} />
            <Route path="/staff-management" element={<StaffManagement />} />
            <Route path="/web-settings" element={<WebSettings />} />
            <Route path="/system-settings" element={<SystemSeting />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
