import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/home.css";

function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <Navbar minimal />

      <main className="home">
        <span className="eyebrow">GITHUB, BUT VISUAL</span>

        <h1 className="gradient-text">Visualize your GitHub</h1>

        <p className="subtitle">
          Not just stats. Your code, your impact, your story.
        </p>

        <form
          className="search"
          onSubmit={(e) => {
            e.preventDefault();
            if (!username.trim()) return;
            navigate(`/dashboard/${username.trim()}`);
          }}
        >
          <input
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus         
            aria-label="GitHub username" 
          />

          <button
            type="submit"
            disabled={!username.trim()} 
          >
            View Dashboard →
          </button>
        </form>

        <p className="hint">
          Try: <span>torvalds, ry, antirez</span>
        </p>
      </main>
    </>
  );
}

export default Home;
