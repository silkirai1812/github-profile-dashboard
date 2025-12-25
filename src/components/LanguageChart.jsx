import "../styles/components.css";

function LanguageChart({ repos }) {
  const languageMap = {};

  repos.forEach((repo) => {
    if (repo.primaryLanguage) {
      const name = repo.primaryLanguage.name;
      languageMap[name] = (languageMap[name] || 0) + 1;
    }
  });

  const entries = Object.entries(languageMap);
  const total = entries.reduce((sum, [, count]) => sum + count, 0);

  if (total === 0) {
    return (
      <div className="card language-chart">
        <h3>Languages</h3>
        <p className="muted">No language data available.</p>
      </div>
    );
  }


  return (
    <div
      className="card language-chart"
      role="region"                    
      aria-label="Repository languages" 
    >
      <h3 className="heading">Languages</h3>


      <ul className="legend">
        {entries.map(([lang, count]) => (
          <li key={lang}>
             {lang} ({count})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageChart;
