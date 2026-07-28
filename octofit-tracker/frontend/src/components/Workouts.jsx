import { useEffect, useState } from 'react';
import { buildApiUrl } from '../utils/api';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        const response = await fetch(buildApiUrl('workouts'));
        if (!response.ok) throw new Error('Unable to load workouts');
        const data = await response.json();
        setWorkouts(Array.isArray(data) ? data : data.results || []);
      } catch (err) {
        setError(err.message || 'Unable to load workouts');
      } finally {
        setLoading(false);
      }
    };

    loadWorkouts();
  }, []);

  return (
    <section>
      <h2 className="h4 mb-3">Workouts</h2>
      {loading && <p>Loading workouts…</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && (
        <div className="row g-3">
          {workouts.map((workout) => (
            <div key={workout._id || workout.title} className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="h6 mb-1">{workout.title}</h3>
                  <p className="mb-1 text-muted">Difficulty: {workout.difficulty}</p>
                  <p className="mb-0">Focus: {workout.focus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
