import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/components.css";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      {/* LEFT SIDE */}
      <div className="footer-left">
        <div className="footer-branding">
          <span
            className="footer-brand"
            role="button"
            tabIndex={0}
            aria-label="Go to home"
            title="Go to Home"
            onClick={() => {
              navigate("/");
              requestAnimationFrame(() => {
                window.scrollTo({ top: 0, left: 0, behavior: "instant" });
              });
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate("/");
                requestAnimationFrame(() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                });
              }
            }}
          >
            📊 GitPulse
          </span>

          <span className="footer-eyebrow">
            A visual pause — your GitHub profile, reimagined.
          </span>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="footer-right">
        <span className="footer-madeby">
          Made by <strong>Silki Rai</strong> · © 2025
        </span>

        <div className="footer-icons">
          <a
            href="https://github.com/silkirai1812"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
