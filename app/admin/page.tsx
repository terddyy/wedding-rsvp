'use client';

import { useEffect, useState } from 'react';
import PageSection from '@/components/ui/PageSection';

interface Guest {
  id: string;
  name: string;
  rsvp_status: 'pending' | 'attending' | 'not_attending';
  plus_one?: string;
  message?: string;
  used: boolean;
  submitted_at?: string | null;
}

export default function AdminDashboard() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    attending: 0,
    notAttending: 0,
    pending: 0,
  });

  // Simple password protection (in production, use proper auth)
  const ADMIN_PASSWORD = 'wedding2026'; // Change this!

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
    } else {
      alert('Incorrect password!');
    }
  };

  useEffect(() => {
    // Check if already authenticated
    const isAuth = localStorage.getItem('adminAuth') === 'true';
    setIsAuthenticated(isAuth);

    if (isAuth) {
      fetchGuests();
    }
  }, [isAuthenticated]);

  const fetchGuests = async () => {
    try {
      setLoading(true);
      
      // Fetch guests from API endpoint
      const response = await fetch('/api/admin/guests', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${ADMIN_PASSWORD}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch guests');
      }

      const data = await response.json();
      const guestsList: Guest[] = data.guests;

      setGuests(guestsList);

      // Calculate stats
      const attending = guestsList.filter(g => g.rsvp_status === 'attending').length;
      const notAttending = guestsList.filter(g => g.rsvp_status === 'not_attending').length;
      const pending = guestsList.filter(g => g.rsvp_status === 'pending').length;

      setStats({
        total: guestsList.length,
        attending,
        notAttending,
        pending,
      });
    } catch (error) {
      console.error('Error fetching guests:', error);
      alert('Error loading guests. Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
    setPassword('');
  };

  const handleDeleteGuest = async (guestId: string, guestName: string) => {
    if (!confirm(`Are you sure you want to delete "${guestName}"? This cannot be undone.`)) {
      return;
    }

    try {
      const response = await fetch('/api/admin/guests', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${ADMIN_PASSWORD}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ guestId }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete guest');
      }

      alert(`Successfully deleted ${guestName}`);
      fetchGuests(); // Refresh the list
    } catch (error) {
      console.error('Error deleting guest:', error);
      alert('Error deleting guest. Check console for details.');
    }
  };

  const exportToCSV = () => {
    const csvContent = [
      ['Name', 'Status', 'Message', 'Submitted At'].join(','),
      ...guests.map(guest => [
        guest.name,
        guest.rsvp_status,
        guest.message?.replace(/,/g, ';') || '',
        guest.submitted_at ? new Date(guest.submitted_at).toLocaleString() : 'Not submitted'
      ].map(field => `"${field}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `wedding-rsvps-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  if (!isAuthenticated) {
    return (
      <PageSection>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Admin Dashboard
          </h1>
          <p className="text-lg text-gray-600">Enter password to access</p>
        </div>
        <div className="max-w-md mx-auto mt-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              placeholder="Enter admin password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={handleLogin}
              className="w-full mt-4 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Login
            </button>
            <p className="mt-4 text-sm text-gray-600 text-center">
              Default password: <code className="bg-gray-100 px-2 py-1 rounded">wedding2026</code>
            </p>
          </div>
        </div>
      </PageSection>
    );
  }

  return (
    <PageSection>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
          Admin Dashboard
        </h1>
        <p className="text-lg text-gray-600">Manage wedding RSVPs</p>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header Actions */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={fetchGuests}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            🔄 Refresh
          </button>
          <div className="space-x-2">
            <button
              onClick={exportToCSV}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              📊 Export CSV
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-gray-500 text-sm">Total Guests</div>
            <div className="text-3xl font-bold text-gray-800">{stats.total}</div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <div className="text-green-700 text-sm">Attending</div>
            <div className="text-3xl font-bold text-green-800">{stats.attending}</div>
          </div>
          <div className="bg-red-50 p-6 rounded-lg shadow-md">
            <div className="text-red-700 text-sm">Not Attending</div>
            <div className="text-3xl font-bold text-red-800">{stats.notAttending}</div>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <div className="text-yellow-700 text-sm">Pending</div>
            <div className="text-3xl font-bold text-yellow-800">{stats.pending}</div>
          </div>
        </div>

        {/* Guest List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading guests...</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Guest Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Message
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submitted
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {guests.map((guest) => (
                    <tr key={guest.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{guest.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          guest.rsvp_status === 'attending' 
                            ? 'bg-green-100 text-green-800'
                            : guest.rsvp_status === 'not_attending'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {guest.rsvp_status === 'attending' ? '✓ Attending' 
                            : guest.rsvp_status === 'not_attending' ? '✗ Not Attending'
                            : '⏳ Pending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                        {guest.message || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {guest.submitted_at ? new Date(guest.submitted_at).toLocaleDateString() : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => handleDeleteGuest(guest.id, guest.name)}
                          className="text-red-600 hover:text-red-900 font-medium"
                        >
                          🗑️ Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </PageSection>
  );
}
