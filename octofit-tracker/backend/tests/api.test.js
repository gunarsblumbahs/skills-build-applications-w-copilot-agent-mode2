const test = require('node:test');
const assert = require('node:assert/strict');
const { app } = require('../dist/server.js');

test('API routes return JSON for core resources', async () => {
  const server = app.listen(0);

  try {
    const address = server.address();
    const port = typeof address === 'object' && address ? address.port : 0;
    const endpoints = [
      '/api/users/',
      '/api/teams/',
      '/api/activities/',
      '/api/leaderboard/',
      '/api/workouts/',
    ];

    for (const endpoint of endpoints) {
      const response = await fetch(`http://127.0.0.1:${port}${endpoint}`);
      assert.equal(response.status, 200);
      const payload = await response.json();
      assert.ok(payload);
    }
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
});
