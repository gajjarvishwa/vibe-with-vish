import '../App.css'

function Header() {
  return (
    <header>
      <nav className="navbar">

        <div className="logo">
          <a href="/" className="logo-link">

            <div className="logo-icon">
              <span className="logo-v">V</span>
              <span className="logo-star">✦</span>
              <span className="logo-v">V</span>
            </div>

            <p className="logo-text">VIBE WITH VISH</p>

          </a>
        </div>

        <ul className="nav-links">

          <li>
            <a href="/">Home</a>
          </li>

          <li className="dropdown">
            <a href="/categories">
              Categories
              <i className="fa-solid fa-chevron-down"></i>
            </a>

            <div className="dropdown-menu">
              <a href="/college">
                College Fits
                <i className="fa-solid fa-arrow-right"></i>
              </a>

              <a href="/cafe">
                Cafe Looks
                <i className="fa-solid fa-arrow-right"></i>
              </a>

              <a href="/date-night">
                Date Night
                <i className="fa-solid fa-arrow-right"></i>
              </a>

              <a href="/party">
                Party Wear
                <i className="fa-solid fa-arrow-right"></i>
              </a>

              <a href="/office">
                Office Style
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </li>

          <li>
            <a href="/reels">Reels</a>
          </li>

        </ul>

      </nav>
    </header>
  )
}

export default Header