import { useEffect, useState } from 'react';
import { buildApiUrl } from '../utils/api';

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadLeaderboard = async () => {
      try {
        const response = await fetch(buildApiUrl('leaderboard'));
        if (!response.ok) throw new Error('Unable to load leaderboard');
        const data = await response.json();
        setLeaderboard(Array.isArray(data) ? data : data.results || []);
      } catch (err) {
        setError(err.message || 'Unable to load leaderboard');
      } finally {
        setLoading(false);
      }
    };

    loadLeaderboard();
  }, []);

  return (
    <section>
      <h2 className="h4 mb-3">Leaderboard</h2>
      {loading && <p>Loading leaderboard…</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && (
        <div className="list-group">
          {leaderboard.map((entry) => (
            <div key={entry._id || entry.userId} className="list-group-item d-flex justify-content-between align-items-center">
              <span>#{entry.rank || '-'} {entry.userId}</span>
              <span className="badge bg-primary rounded-pill">{entry.score}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
