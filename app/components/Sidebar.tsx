import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/sidebar.css';
import { Link } from 'react-router';

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const { user } = useAuth(); // Assuming useAuth provides user info

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setIsOpen(!mobile);
    };

    handleResize(); // Call on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Placeholder for sidebar items.
  // This can be dynamically generated based on user roles and subscriptions.
  const sidebarItems = [
    { name: 'Dashboard', path: '/dashboard', icon: 'home' },
    { name: 'Class Plans', path: '/class-plans', icon: 'plan' },
    { name: 'Calendar', path: '/calendar', icon: 'calendar' },
    { name: 'Profile', path: '/profile', icon: 'user' },
  ];

  // Example of conditional items based on user subscription
  // if (user && user.isSubscribed) {
  //   sidebarItems.push({ name: 'Premium Feature', path: '/premium', icon: '⭐' });
  // }

  // Example of conditional items based on user role
  // if (user && user.roles.includes('admin')) {
  //   sidebarItems.push({ name: 'Admin Panel', path: '/admin', icon: '⚙️' });
  // }

  return (
    <>
      {isMobile && (
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      )}
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h3>Proffice</h3>
        </div>
        <nav>
          <ul className="sidebar-menu">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="flex items-center">
                  <i className={`fi fi-rs-${item.icon} mr-3`}></i>
                  <span className="mr-3">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
