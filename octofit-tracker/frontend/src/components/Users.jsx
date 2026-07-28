import { useEffect, useState } from 'react';
import { buildApiUrl } from '../utils/api';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await fetch(buildApiUrl('users'));
        if (!response.ok) throw new Error('Unable to load users');
        const data = await response.json();
        setUsers(Array.isArray(data) ? data : data.results || []);
      } catch (err) {
        setError(err.message || 'Unable to load users');
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  return (
    <section>
      <h2 className="h4 mb-3">Users</h2>
      {loading && <p>Loading users…</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && (
        <div className="row g-3">
          {users.map((user) => (
            <div key={user._id || user.email} className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="h6 mb-1">{user.name}</h3>
                  <p className="mb-1 text-muted">{user.email}</p>
                  <p className="mb-0">Role: {user.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
