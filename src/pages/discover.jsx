function Discover() {
  return (
    <div className="discover-page">

      {/* Decorative background */}
      <div className="discover-botanical"></div>

      {/* PAGE HEADER */}
      <section className="discover-header">
        <h1>Discover Looks</h1>

        <h2>Our Best &amp; Most Loved Looks</h2>

        <p>Hand-picked outfits worth checking out.</p>
      </section>


      {/* BEST LOOKS */}
      <section className="best-looks-section">

        <h2 className="section-heading">
          Best Looks
        </h2>

        <div className="featured-looks">

          {/* FEATURED LOOK 1 */}
          <div className="featured-look featured-large">

            <div className="featured-image">

              <img
                className="image-bg"
                src="/images/best1.png"
                alt=""
              />

              <img
                className="image-main"
                src="/images/college1.png"
                alt="Casual Campus Look"
              />

            </div>

            <div className="featured-content">

              <span className="look-badge">
                01
              </span>

              <span className="look-label">
                OUR PICK
              </span>

              <h3>Casual Campus Look</h3>

              <p>
                Effortless. Comfy. Always in style.
              </p>

              <strong>₹4,899</strong>

              <a
                href="/outfit/1"
                className="discover-btn"
              >
                View Look →
              </a>

            </div>

          </div>


          {/* FEATURED LOOK 2 */}
          <div className="featured-look">

            <div className="featured-image">

              <img
                className="image-bg"
                src="/images/best2.png"
                alt=""
              />

              <img
                className="image-main"
                src="/images/college2.png"
                alt="Date Night Charm"
              />

            </div>

            <div className="featured-content">

              <span className="look-badge">
                02
              </span>

              <span className="look-label">
                EDITOR'S PICK
              </span>

              <h3>Date Night Charm</h3>

              <p>
                Chic. Classy. Unforgettable.
              </p>

              <strong>₹3,999</strong>

              <a
                href="/outfit/2"
                className="discover-btn"
              >
                View Look →
              </a>

            </div>

          </div>


          {/* FEATURED LOOK 3 */}
          <div className="featured-look">

            <div className="featured-image">

              <img
                className="image-bg"
                src="/images/college3.png"
                alt=""
              />

              <img
                className="image-main"
                src="/images/college3.png"
                alt="Soft Ethnic Grace"
              />

            </div>

            <div className="featured-content">

              <span className="look-badge">
                03
              </span>

              <span className="look-label">
                MOST LOVED
              </span>

              <h3>Soft Ethnic Grace</h3>

              <p>
                Grace in every detail.
              </p>

              <strong>₹4,599</strong>

              <a
                href="/outfit/3"
                className="discover-btn"
              >
                View Look →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* HAND-PICKED BEST LOOKS */}
      <section className="handpicked-section">

        <h2 className="section-heading">
          Hand-Picked Best Looks
        </h2>

        <div className="handpicked-grid">

          {/* CARD 1 */}
          <div className="handpicked-card tall-card">

            <div className="handpicked-image">

              <img
                className="image-bg"
                src="/images/college4.png"
                alt=""
              />

              <img
                className="image-main"
                src="/images/college4.png"
                alt="Minimal Street Look"
              />

            </div>

            <div className="handpicked-content">

              <h3>Minimal Street Look</h3>

              <p>
                Clean. Minimal. Modern.
              </p>

              <strong>₹3,799</strong>

              <a href="/outfit/4">
                View Look →
              </a>

            </div>

          </div>


          {/* CARD 2 */}
          <div className="handpicked-card">

            <div className="handpicked-image">

              <img
                className="image-bg"
                src="/images/college5.png"
                alt=""
              />

              <img
                className="image-main"
                src="/images/college5.png"
                alt="Floral Day Out"
              />

            </div>

            <div className="handpicked-content">

              <h3>Floral Day Out</h3>

              <p>
                Fresh. Feminine. Beautiful.
              </p>

              <strong>₹3,499</strong>

              <a href="/outfit/5">
                View Look →
              </a>

            </div>

          </div>


          {/* CARD 3 */}
          <div className="handpicked-card">

            <div className="handpicked-image">

              <img
                className="image-bg"
                src="/images/college1.png"
                alt=""
              />

              <img
                className="image-main"
                src="/images/college1.png"
                alt="Party Glam Look"
              />

            </div>

            <div className="handpicked-content">

              <h3>Party Glam Look</h3>

              <p>
                Bold. Glamorous. Unstoppable.
              </p>

              <strong>₹5,199</strong>

              <a href="/outfit/1">
                View Look →
              </a>

            </div>

          </div>


          {/* CARD 4 */}
          <div className="handpicked-card">

            <div className="handpicked-image">

              <img
                className="image-bg"
                src="/images/college2.png"
                alt=""
              />

              <img
                className="image-main"
                src="/images/college2.png"
                alt="Urban Cool Look"
              />

            </div>

            <div className="handpicked-content">

              <h3>Urban Cool Look</h3>

              <p>
                Trendy. Relaxed. Effortless.
              </p>

              <strong>₹3,299</strong>

              <a href="/outfit/2">
                View Look →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* NEW LOOKS BANNER */}
      <section className="new-looks-banner">

        <div className="new-looks-text">

          <h2>
            New looks every week!
          </h2>

          <p>
            Fresh styles. New vibes. Discover what's new.
          </p>

        </div>

        <a
          href="/reels"
          className="new-arrivals-btn"
        >
          <span>Best Looks</span>
          <i className="fa-solid fa-arrow-right"></i>
        </a>

      </section>

    </div>
  )
}

export default Discover