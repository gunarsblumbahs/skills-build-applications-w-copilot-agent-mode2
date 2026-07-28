import { useEffect, useState } from 'react';
import { buildApiUrl } from '../utils/api';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadTeams = async () => {
      try {
        const response = await fetch(buildApiUrl('teams'));
        if (!response.ok) throw new Error('Unable to load teams');
        const data = await response.json();
        setTeams(Array.isArray(data) ? data : data.results || []);
      } catch (err) {
        setError(err.message || 'Unable to load teams');
      } finally {
        setLoading(false);
      }
    };

    loadTeams();
  }, []);

  return (
    <section>
      <h2 className="h4 mb-3">Teams</h2>
      {loading && <p>Loading teams…</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && (
        <div className="row g-3">
          {teams.map((team) => (
            <div key={team._id || team.name} className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="h6 mb-1">{team.name}</h3>
                  <p className="mb-1 text-muted">Captain: {team.captain}</p>
                  <p className="mb-0">Focus: {team.focus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
