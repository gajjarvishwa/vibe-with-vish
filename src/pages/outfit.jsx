function Outfit({ outfit }) {
  return (
    <div className="outfit-container">

      {/* BACK BUTTON */}
      <a
        href={`/category/${outfit.category}`}
        className="back-button"
        aria-label="Back to category"
      >
        <i className="fa-solid fa-arrow-left"></i>
      </a>


      {/* MAIN OUTFIT AREA */}
      <div className="outfit-top">


        {/* LEFT SIDE */}
        <div className="main-outfit-section">

          <div className="main-media">
            <img
              src={outfit.image}
              alt={outfit.name}
            />
          </div>


          <div className="outfit-info-section">

            <h2>
              {outfit.name}
            </h2>

            <p>
              {outfit.description}
            </p>

            <div className="total-price">

              <span>Total Outfit Price</span>

              <strong>
                ₹{outfit.price.toLocaleString("en-IN")}
              </strong>

            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="products-used">

          <h2>Products Used</h2>


          {/* PRODUCT 1 */}
          <div className="product-item">

            <div className="product-image">
              <img
                src="/images/college1.png"
                alt="Brown Shirt"
              />
            </div>

            <div className="product-details">

              <h3>Brown Shirt</h3>

              <p>₹1,499</p>

              <a
                href="#"
                className="product-link"
              >
                View Product →
              </a>

            </div>

          </div>


          {/* PRODUCT 2 */}
          <div className="product-item">

            <div className="product-image">
              <img
                src="/images/college1.png"
                alt="White Pants"
              />
            </div>

            <div className="product-details">

              <h3>White Pants</h3>

              <p>₹1,899</p>

              <a
                href="#"
                className="product-link"
              >
                View Product →
              </a>

            </div>

          </div>


          {/* PRODUCT 3 */}
          <div className="product-item">

            <div className="product-image">
              <img
                src="/images/college1.png"
                alt="Sneakers"
              />
            </div>

            <div className="product-details">

              <h3>Sneakers</h3>

              <p>₹1,499</p>

              <a
                href="#"
                className="product-link"
              >
                View Product →
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Outfit