import { useNavigate } from "react-router-dom";
import "../styles/components.css";

function Navbar({ githubUrl, minimal = false }) {
  const navigate = useNavigate();

  return (
    <header className={`navbar ${minimal ? "navbar-minimal" : ""}`}>
      <div className="nav-left">
        <span
          className="brand"
          onClick={() => navigate("/")}
          role="button"               
          tabIndex={0}                 
          aria-label="Go to home"      
          title="Go to Home"            
          onKeyDown={(e) => {           
            if (e.key === "Enter") navigate("/");
          }}
        >
          📊 GitPulse
        </span>
      </div>

      {!minimal && (
        <div className="nav-right">
          <button
            className="nav-btn"
            onClick={() => navigate("/")}
            aria-label="Back to home"   
            title="Back to hookup"    
          >
            ← Home
          </button>

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
              aria-label="Open GitHub profile" 
              title="Open GitHub profile"     
            >
              GitHub ↗
            </a>
          )}
        </div>
      )}

      {minimal && (
        <div className="nav-right ">
          <a
            href="https://github.com/silkirai1812"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
            aria-label="Open GitHub profile" 
            title="Open GitHub profile"   
          >
            GitHub ↗
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
