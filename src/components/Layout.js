// src/components/Layout.js
import React, { useState } from 'react';
import './Layout.css';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="layout">
      <header className="header">
        Header
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isSidebarOpen ? 'Close' : 'Open'} Sidebar
        </button>
      </header>
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        Sidebar
      </aside>
      <main className="main">{children}</main>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default Layout;
