
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
        <ul className="tree-menu">
          <li>
            Parent 1
            <ul>
              <li>Child 1</li>
              <li>Child 2</li>
            </ul>
          </li>
          <li>
            Parent 2
            <ul>
              <li>Child 3</li>
              <li>Child 4</li>
            </ul>
          </li>
        </ul>
      </aside>
      <main className="main">{children}</main>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default Layout;
