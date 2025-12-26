import "../styles/components.css";

function ProfileCard({ user }) {
  const githubUrl = `https://github.com/${user.login}`;

  return (
    <aside className="card profile">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open GitHub profile"
        title="Open GitHub profile"
      >
        <img
          src={user.avatarUrl}
          alt={`${user.login} GitHub avatar`} 
          loading="lazy"
        />
      </a>

      <h2>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub profile"
          title="Open GitHub profile"
          className="heading"
        >
          {user.name || user.login}
        </a>
      </h2>

      <p className="muted">@{user.login}</p>

      {user.bio && <p className="muted">{user.bio}</p>}
      {user.location && <p>{user.location}</p>}

      {user.websiteUrl && (
        <a
          href={user.websiteUrl}
          className="heading"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open personal website"
          title="Open personal website"
        >
          Portfolio
        </a>
      )}
    </aside>
  );
}

export default ProfileCard;
