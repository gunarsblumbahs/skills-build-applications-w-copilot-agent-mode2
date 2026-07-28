import { useEffect, useState } from 'react';
import { buildApiUrl } from '../utils/api';

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const response = await fetch(buildApiUrl('activities'));
        if (!response.ok) throw new Error('Unable to load activities');
        const data = await response.json();
        setActivities(Array.isArray(data) ? data : data.results || []);
      } catch (err) {
        setError(err.message || 'Unable to load activities');
      } finally {
        setLoading(false);
      }
    };

    loadActivities();
  }, []);

  return (
    <section>
      <h2 className="h4 mb-3">Activities</h2>
      {loading && <p>Loading my activities…</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && (
        <div className="row g-3">
          {activities.map((activity) => (
            <div key={activity._id || activity.type} className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="h6 mb-1">{activity.type}</h3>
                  <p className="mb-1 text-muted">Duration: {activity.duration} min</p>
                  <p className="mb-0">{activity.notes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
