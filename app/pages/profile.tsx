import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { useAuth } from '../contexts/AuthContext';

export const Profile: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex flex-col flex-1 md:ml-63 mt-8 md:mt-4">
          <p>Loading user profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 p-4 md:ml-63 mt-8 md:mt-4">
        <main className="p-6">
          <h1 className="text-2xl font-bold">Profile</h1>
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <img
                className="w-24 h-24 rounded-full"
                src={user.avatar || 'https://placehold.co/150'}
                alt="User Avatar"
              />
              <div className="ml-6">
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <div className="mt-2 text-gray-600">
                <p>Phone: {user.phone || 'Not available'}</p>
                <p>Accepts WhatsApp: {user.accepts_whatsapp ? 'Yes' : 'No'}</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Subscription Plan</h3>
              <p className="mt-2 text-gray-600">
                You are currently on the{' '}
                <span className="font-bold text-blue-600">{user.plan || 'Free'}</span>{' '}
                plan.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};



