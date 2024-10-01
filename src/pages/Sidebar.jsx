import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [showWebSettings, setShowWebSettings] = useState(false);
  const [showSystemSettings, setShowSystemSettings] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showSchools, setShowSchools] = useState(false);
  const [showPackage, setShowPackage] = useState(false);
  const [showAddons, setShowAddons] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);
  const [showSubscriptionTransaction, setShowSubscriptionTransaction] = useState(false);

  return (
    <div className="sidebar">
      <div className="logo">
        <h2>  School Hai</h2>
      </div>
      <input type="text" className="search-menu" placeholder="Search..." />
      <nav>
        <ul>
          <li>
            <div onClick={() => setShowDashboard(!showDashboard)} className="toggle">
              <i className="fas fa-tachometer-alt"></i> Dashboard
              <i className={`fas ${showDashboard ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            {showDashboard && (
              <ul>
                <li><Link to="/">Dashboard Home</Link></li>
              </ul>
            )}
          </li>

          <li>
            <div onClick={() => setShowSchools(!showSchools)} className="toggle">
              <i className="fas fa-school"></i> Schools
              <i className={`fas ${showSchools ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            {showSchools && (
              <ul>
                <li><Link to="/schools">Manage Schools</Link></li>
              </ul>
            )}
          </li>

          <li>
            <div onClick={() => setShowPackage(!showPackage)} className="toggle">
              <i className="fas fa-box"></i> Package
              <i className={`fas ${showPackage ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            {showPackage && (
              <ul>
                <li><Link to="/package">View Packages</Link></li>
              </ul>
            )}
          </li>

          <li>
            <div onClick={() => setShowAddons(!showAddons)} className="toggle">
              <i className="fas fa-plus-square"></i> Addons
              <i className={`fas ${showAddons ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            {showAddons && (
              <ul>
                <li><Link to="/addons">Manage Addons</Link></li>
              </ul>
            )}
          </li>

          <li>
            <div onClick={() => setShowFeatures(!showFeatures)} className="toggle">
              <i className="fas fa-star"></i> Features
              <i className={`fas ${showFeatures ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            {showFeatures && (
              <ul>
                <li><Link to="/features">View Features</Link></li>
              </ul>
            )}
          </li>

          <li>
            <div onClick={() => setShowSubscription(!showSubscription)} className="toggle">
              <i className="fas fa-credit-card"></i> Subscription
              <i className={`fas ${showSubscription ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            {showSubscription && (
              <ul>
                <li><Link to="/subscription">Manage Subscriptions</Link></li>
              </ul>
            )}
          </li>

          <li>
            <div onClick={() => setShowSubscriptionTransaction(!showSubscriptionTransaction)} className="toggle">
              <i className="fas fa-file-invoice-dollar"></i> Subscription Transaction
              <i className={`fas ${showSubscriptionTransaction ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            {showSubscriptionTransaction && (
              <ul>
                <li><Link to="/subscription-transaction">View Transactions</Link></li>
              </ul>
            )}
          </li>

          <li>
            <div onClick={() => setShowWebSettings(!showWebSettings)} className="toggle">
              <i className="fas fa-cog"></i> Web Settings
              <i className={`fas ${showWebSettings ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            {showWebSettings && (
              <ul>
                <li><Link to="/web-settings/general">General Settings</Link></li>
                <li><Link to="/web-settings/features">Feature Sections</Link></li>
                <li><Link to="/web-settings/faqs">FAQs</Link></li>
              </ul>
            )}
          </li>

          <li>
            <div onClick={() => setShowSystemSettings(!showSystemSettings)} className="toggle">
              <i className="fas fa-tools"></i> System Settings
              <i className={`fas ${showSystemSettings ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            {showSystemSettings && (
              <ul>
                <li><Link to="/system-settings/general">General Settings</Link></li>
                <li><Link to="/system-settings/features">Feature Sections</Link></li>
                <li><Link to="/system-settings/faqs">FAQs</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
