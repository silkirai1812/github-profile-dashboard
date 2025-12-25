import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchGitHubProfile } from "../services/githubApi";
import ProfileCard from "../components/ProfileCard";
import StatsCard from "../components/StatsCard";
import RepoList from "../components/RepoList";
import LanguageChart from "../components/LanguageChart";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

function Dashboard() {
  const { username } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username || !username.trim()) {
      setError("No username provided");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    setUser(null);

    fetchGitHubProfile(username)
      .then((data) => setUser(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [username]);


  if (loading) {
    return <p style={{ padding: 40 }}>Loading profile…</p>;
  }


  if (error) {
    return (
      <div className="error-screen">
        <h1>😕</h1>
        <h2>{error}</h2>
        <p>Please check the username and try again.</p>
        <button onClick={() => navigate("/")}>← Back to Home</button>
      </div>
    );
  }


  if (!user) {
    return (
      <div className="error-screen">
        <h2>Something went wrong</h2>
        <button onClick={() => navigate("/")}>← Back to Home</button>
      </div>
    );
  }


  const repos = user.repositories?.nodes || [];
  const totalStars = repos.reduce(
    (sum, r) => sum + (r.stargazerCount || 0),
    0
  );

  return (
  <>
    <Navbar githubUrl={`https://github.com/${user.login}`} />

    <main className="dashboard">
      <div className="dashboard-grid">
        <aside className="sidebar">
          <ProfileCard user={user} />
          <LanguageChart repos={repos} />
        </aside>

        <section className="content">
          <div className="stats">
            <StatsCard label="Repos" value={user.repositories.totalCount} />
            <StatsCard label="Stars" value={totalStars} />
            <StatsCard label="Followers" value={user.followers.totalCount} />
            <StatsCard label="Following" value={user.following.totalCount} />
          </div>

          <RepoList repos={repos} />
        </section>
      </div>
    </main>
  </>
);

}

export default Dashboard;
