import { useState, useEffect } from "react"

function Reels() {

  const [selectedReel, setSelectedReel] = useState(null)


  const reels = [
    {
      id: 1,
      number: "01",
      video: "/videos/reel1.mp4",
      poster: "/images/college1.png",
      title: "Campus Cool",
      description: <>Effortless. Comfy.<br />Always in style.</>,
      likes: 435,
      outfit: "/outfit/1"
    },
    {
      id: 2,
      number: "02",
      video: "/videos/reel2.mp4",
      poster: "/images/college2.png",
      title: "Night Lights",
      description: <>Bright nights.<br />Bigger vibes.</>,
      likes: 612,
      outfit: "/outfit/2"
    },
    {
      id: 3,
      number: "03",
      video: "/videos/reel3.mp4",
      poster: "/images/college3.png",
      title: "Summer Breeze",
      description: <>Light fabrics.<br />Soft mood.</>,
      likes: 589,
      outfit: "/outfit/3",
      featured: true
    },
    {
      id: 4,
      number: "04",
      video: "/videos/reel4.mp4",
      poster: "/images/college4.png",
      title: "Soft Ethnic",
      description: <>Grace in every<br />drape.</>,
      likes: 708,
      outfit: "/outfit/4"
    },
    {
      id: 5,
      number: "05",
      video: "/videos/reel5.mp4",
      poster: "/images/college5.png",
      title: "Party Glam",
      description: <>Bold. Glamorous.<br />Unforgettable.</>,
      likes: 925,
      outfit: "/outfit/5"
    },
    {
      id: 6,
      number: "06",
      video: "/videos/reel6.mp4",
      poster: "/images/college1.png",
      title: "Minimal Mood",
      description: <>Less is more,<br />always.</>,
      likes: 476,
      outfit: "/outfit/6"
    },
    {
      id: 7,
      number: "07",
      video: "/videos/reel6.mp4",
      poster: "/images/college1.png",
      title: "Minimal Mood",
      description: <>Less is more,<br />always.</>,
      likes: 476,
      outfit: "/outfit/6"
    },
    {
      id: 8,
      number: "08",
      video: "/videos/reel6.mp4",
      poster: "/images/college1.png",
      title: "Minimal Mood",
      description: <>Less is more,<br />always.</>,
      likes: 476,
      outfit: "/outfit/6"
    }
  ]


  // ESC key se modal close
  useEffect(() => {

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedReel(null)
      }
    }

    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }

  }, [])


  return (
    <div className="reels-page">


      {/* HERO SECTION */}

      <section className="reels-hero">

        {/* LEFT CONTENT */}

        <div className="reels-hero-content">

          <span className="reels-eyebrow">
            ✦ REELS
          </span>

          <h1>
            Style in Motion,
            <br />
            Inspiration in
            <span> Every Frame.</span>
          </h1>

          <div className="reels-title-line"></div>

          <p>
            From everyday fits to statement looks,
            watch fashion come alive.
          </p>

          <div className="reels-week-pill">
            <span>✦</span>
            <span>New looks every week</span>
          </div>

        </div>


        {/* RIGHT HERO IMAGE */}

        <div className="reels-hero-visual">

          <div className="reels-fashion-ring"></div>

          <img
            src="/images/a1.png"
            alt="Fashion inspiration"
          />

        </div>

      </section>



      {/* REELS SHOWCASE */}

      <section className="reels-showcase">

        <div className="reels-track">

          {reels.map((reel) => (

            <article
              className={`reel-look-card ${
                reel.featured ? "reel-featured" : ""
              }`}
              data-outfit={reel.outfit}
              key={reel.id}
              onClick={() => setSelectedReel(reel)}
            >

              <div className="reel-media">

                <video
                  src={reel.video}
                  poster={reel.poster}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                />


                <div className="reel-number">
                  {reel.number}
                </div>


                <button
                  className="reel-play"
                  type="button"
                  aria-label={`Play ${reel.title} reel`}
                  onClick={(event) => {
                    event.stopPropagation()
                    setSelectedReel(reel)
                  }}
                >
                  <i className="fa-solid fa-play"></i>
                </button>


                <div className="reel-content">

                  <h3>
                    {reel.title}
                  </h3>

                  <p>
                    {reel.description}
                  </p>

                  <div className="reel-likes">

                    <i className="fa-solid fa-heart"></i>

                    <span>
                      {reel.likes}
                    </span>

                  </div>


                  <a
                    href={reel.outfit}
                    className="card-view-look"
                    onClick={(event) => event.stopPropagation()}
                  >
                    View Look
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* SCROLL HINT */}

        <div className="reels-scroll-hint">

          <span>←</span>

          <span>
            Scroll left or right to explore more looks
          </span>

          <span>→</span>

        </div>

      </section>



      {/* EDITORIAL END SECTION */}

      <section className="reels-end-section">


        {/* LEFT COPY */}

        <div className="reels-end-copy">

          <span className="reels-end-eyebrow">
            LOVE A LOOK?
          </span>

          <h2>
            Turn inspiration
            <br />
            into <em>your next look.</em>
          </h2>

          <p>
            Discover the complete outfit
            and shop every piece in the look.
          </p>

          <a
            href="/discover"
            className="reels-end-btn"
          >
            Explore the Lookbook

            <i className="fa-solid fa-arrow-right"></i>
          </a>

        </div>



        {/* CENTER BRAND ORBIT */}

        <div className="reels-brand-area">

          <div className="reels-brand-orbit orbit-one"></div>

          <div className="reels-brand-orbit orbit-two"></div>

          <div className="reels-brand-mark">

            <span>V</span>

            <span className="brand-star">
              ✦
            </span>

            <span>V</span>

            <small>
              VIBE WITH VISH
            </small>

          </div>

        </div>



        {/* RIGHT BENEFITS */}

        <div className="reels-benefits">


          {/* BENEFIT 1 */}

          <div className="reels-benefit">

            <div className="reels-benefit-icon">
              <i className="fa-solid fa-shirt"></i>
            </div>

            <div>
              <strong>Handpicked</strong>
              <span>Looks</span>
            </div>

          </div>


          {/* BENEFIT 2 */}

          <div className="reels-benefit">

            <div className="reels-benefit-icon">
              <i className="fa-solid fa-video"></i>
            </div>

            <div>
              <strong>New Reels</strong>
              <span>Every Week</span>
            </div>

          </div>


          {/* BENEFIT 3 */}

          <div className="reels-benefit">

            <div className="reels-benefit-icon">
              <i className="fa-regular fa-heart"></i>
            </div>

            <div>
              <strong>Style That</strong>
              <span>Inspires</span>
            </div>

          </div>

        </div>



        {/* SIGNATURE */}

        <div className="reels-signature">

          <span></span>

          <p>
            STYLE ISN'T JUST SEEN, IT'S FELT.
          </p>

          <span></span>

        </div>

      </section>



      {/* REEL VIDEO MODAL */}

      {selectedReel && (

        <div
          className="reel-modal active"
          id="reelModal"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedReel(null)
            }
          }}
        >

          <button
            type="button"
            className="reel-modal-close"
            aria-label="Close reel"
            onClick={() => setSelectedReel(null)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>


          <div className="reel-modal-content">

            <div className="modal-video-wrapper">

              <video
                src={selectedReel.video}
                controls
                autoPlay
                playsInline
              />

              <a
                className="modal-shop-look"
                href={selectedReel.outfit}
              >
                View Look
                <i className="fa-solid fa-arrow-right"></i>
              </a>

            </div>

          </div>

        </div>

      )}

    </div>
  )
}

export default Reels