import "../styles/components.css";

function RepoList({ repos }) {
  return (
    <section
      className="repos"
      aria-label="GitHub repositories"
    >
      {repos.map((r) => (
        <a
          key={r.id || r.name} 
          className="card repo"
          href={`https://github.com/${r.owner?.login || ""}/${r.name}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open repository ${r.name}`} 
          title={`Open ${r.name} on GitHub`}      
        >
          <h3>{r.name}</h3>

          <p>{r.description || "No description provided."}</p> 

          <div className="repo-meta">
            <span>⭐ {r.stargazerCount ?? 0}</span>
            {r.primaryLanguage && (
              <span>{r.primaryLanguage.name}</span>
            )}
          </div>
        </a>
      ))}
    </section>
  );
}

export default RepoList;
