

function Category({ category, outfits }) {
  return (
    <div className="category-page">

      <div className="category-header">

        <h1>{category}</h1>

        <p>
          Discover complete outfit combinations curated for your style.
        </p>

      </div>


      <div className="outfit-grid">

        {outfits.map((outfit) => (
          <div className="outfit-card" key={outfit.id}>

            <div className="outfit-image">

              <img
                src={outfit.image}
                alt={outfit.name}
              />

            </div>


            <div className="outfit-info">

              <h3>
                {outfit.name}
              </h3>

              <p className="outfit-price">
                ₹{outfit.price.toLocaleString("en-IN")}
              </p>

              <a
                href={`/outfit/${outfit.id}`}
                className="view-look"
              >
                View Complete Look →
              </a>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Category