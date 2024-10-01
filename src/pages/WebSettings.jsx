// src/pages/WebSettings.js
import React, { useState } from 'react';

const WebSettings = () => {
  const [activeSection, setActiveSection] = useState('general');

  return (
    <div>
      <h1>Web Settings</h1>
      <nav>
        <button onClick={() => setActiveSection('general')}>General Settings</button>
        <button onClick={() => setActiveSection('features')}>Features</button>
        <button onClick={() => setActiveSection('faqs')}>FAQs</button>
      </nav>
      <div>
        {activeSection === 'general' && (
          <div>
            <h2>General Settings</h2>
            {/* General Settings content */}
          </div>
        )}
        {activeSection === 'features' && (
          <div>
            <h2>Features</h2>
            {/* Features content */}
          </div>
        )}
        {activeSection === 'faqs' && (
          <div>
            <h2>FAQs</h2>
            {/* FAQs content */}
          </div>
        )}
      </div>
    </div>
  );
};

export default WebSettings;
