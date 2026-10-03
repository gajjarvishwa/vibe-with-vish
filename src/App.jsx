import Header from './components/Header'
import Footer from './components/Footer'
import Discover from "./pages/discover";
import Reels from "./pages/reels";

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Category from './pages/category'

import './App.css'
import Outfit from './pages/outfit';

function Home() {
  return (
    <>
      

      <main>

        {/* Hero Section */}
        <section className="hero">

          <img
            src="/images/hero-banner.png"
            alt="Hero Banner"
          />

          <a href="/discover" className="hero-btn">
            <i className="fa-solid fa-shirt"></i>

            <span>Discover Looks</span>

            <i className="fa-solid fa-arrow-right"></i>
          </a>

        </section>


        {/* Featured Categories */}
        <section className="featured-categories">

          <div className="section-title">
            <h2>✨ Featured Categories</h2>
            <p>Find your perfect vibe for every occasion.</p>
          </div>


          <div className="category-grid">

            <div className="category-card">
              <img
                src="/images/college fit.png"
                alt="collegefit"
              />
              <h3>
                College
                <br />
                Fits
              </h3>
            </div>


            <div className="category-card">
              <img
                src="/images/cafe looks.png"
                alt="cafelooks"
              />
              <h3>
                Cafe
                <br />
                Looks
              </h3>
            </div>


            <div className="category-card">
              <img
                src="/images/date night.png"
                alt="datenight"
              />
              <h3>
                Date
                <br />
                Night
              </h3>
            </div>


            <div className="category-card">
              <img
                src="/images/party wear.png"
                alt="partywear"
              />
              <h3>
                Party
                <br />
                Wear
              </h3>
            </div>


            <div className="category-card">
              <img
                src="/images/office style.png"
                alt="officestyle"
              />
              <h3>
                Office
                <br />
                Style
              </h3>
            </div>

          </div>

        </section>


        {/* Trending Reels */}
        <section className="trending-reels">

          <div className="section-title">
            <h2>🎥 Trending Reels</h2>
            <p>Watch the latest outfit inspiration.</p>
          </div>


          <div className="reels-grid">

            <div className="reel-card">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source
                  src="/videos/reel1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>


            <div className="reel-card">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source
                  src="/videos/reel2.mp4"
                  type="video/mp4"
                />
              </video>
            </div>


            <div className="reel-card">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source
                  src="/videos/reel3.mp4"
                  type="video/mp4"
                />
              </video>
            </div>


            <div className="reel-card">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source
                  src="/videos/reel4.mp4"
                  type="video/mp4"
                />
              </video>
            </div>


            <div className="reel-card">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source
                  src="/videos/reel5.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

          </div>

        </section>


        {/* Reel Modal */}
        <div id="reelModal" className="reel-modal">

          <span className="close-modal">&times;</span>

          <video id="modalVideo" controls></video>

        </div>

      </main>

      
    </>
  )
}



{/*DUMMY Data*/}


const outfits = [
  {
    id: 1,
    name: "Casual College Look",
    price: 1299,
    image: "/images/college fit.png"
  },
  {
    id: 2,
    name: "Chic Cafe Look",
    price: 1599,
    image: "/images/cafe looks.png"
  },
  {
    id: 3,
    name: "Elegant Date Night",
    price: 1899,
    image: "/images/date night.png"
  },
  {
    id: 4,
    name: "Party Glam Look",
    price: 2199,
    image: "/images/party wear.png"
  },
  {
    id: 5,
    name: "Professional Office Look",
    price: 1999,
    image: "/images/office style.png"
  }
]





















function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* All Categories */}
        <Route
          path="/categories"
          element={
            <Category
              category="Categories"
              outfits={outfits}
            />
          }
        />

        {/* Individual Categories */}
        <Route
          path="/college"
          element={
            <Category
              category="College Fits"
              outfits={outfits}
            />
          }
        />

        <Route
          path="/cafe"
          element={
            <Category
              category="Cafe Looks"
              outfits={outfits}
            />
          }
        />

        <Route
          path="/date-night"
          element={
            <Category
              category="Date Night"
              outfits={outfits}
            />
          }
        />

        <Route
          path="/party"
          element={
            <Category
              category="Party Wear"
              outfits={outfits}
            />
          }
        />

        <Route
          path="/office"
          element={
            <Category
              category="Office Style"
              outfits={outfits}
            />
          }
        />



        <Route path="/discover" element={<Discover />} />

        <Route
          path="/outfit/:id"
          element={<Outfit outfit={outfits[0]} />}
          />


          <Route
              path="/reels"
              element={<Reels />}
              />

      </Routes>

      

      <Footer />

    </BrowserRouter>
  )
}


export default App