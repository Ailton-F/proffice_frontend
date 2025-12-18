import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components/Sidebar';
import '../styles/dashboard.css';

export const Dashboard: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
      const checkSize = () => {
          setSidebarOpen(window.innerWidth > 768);
      }
      checkSize();
      window.addEventListener('resize', checkSize);
      return () => window.removeEventListener('resize', checkSize);
    }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'} mt-8 md:mt-4`}>
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard. Here you can manage your class plans, calendar, and more.</p>
        <p>The sidebar items can be customized based on your user role and subscription status. Check the <code>Sidebar.tsx</code> component to see how to implement this.</p>
      </main>
    </div>
  );
};

