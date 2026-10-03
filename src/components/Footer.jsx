import '../App.css'

function Footer() {
  return (
    <footer>

      <div className="footer-logo">
        <div className="footer-logo-icon">
          <span className="footer-v">V</span>
          <span className="footer-star">✦</span>
          <span className="footer-v">V</span>
        </div>

        <p className="footer-logo-text">
          VIBE WITH VISH
        </p>
      </div>

      <ul className="footer-links">
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/categories">Categories</a>
        </li>

        <li>
          <a href="/reels">Reels</a>
        </li>
      </ul>

      <div className="footer-social">

        <a href="#" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a href="#" aria-label="YouTube">
          <i className="fa-brands fa-youtube"></i>
        </a>

      </div>

      <p className="footer-copy">
        © 2026 Vibe With Vish. All Rights Reserved.
      </p>

    </footer>
  )
}

export default Footer