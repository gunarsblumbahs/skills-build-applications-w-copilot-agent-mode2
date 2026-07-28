export function buildApiUrl(resource) {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME || 'bookish-funicular-w5rjv9g46p4cgj6j';
  const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/${resource}/`
    : `http://localhost:8000/api/${resource}/`;

  return baseUrl;
}
