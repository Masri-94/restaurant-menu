
import { Link } from "react-router-dom";

function Home({ popularFoods, onAdd }) {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">WELCOME TO SAVOR</span>
          <h1>Good food.<br />Great moments.</h1>
          <p>
            Discover delicious meals made with fresh
            ingredients and served with love.
          </p>
          <Link to="/menu" className="primary-btn">
            Explore Menu
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">OUR FAVORITES</span>
          <h2>Popular dishes</h2>
        </div>

        <div className="food-grid">
          {popularFoods.map(food => (
            <article className="food-card" key={food.id}>
              <img src={food.image} alt={food.name} />
              <div className="food-info">
                <h3>{food.name}</h3>
                <p>{food.description}</p>
                <div className="food-bottom">
                  <strong>${food.price.toFixed(2)}</strong>
                  <button onClick={() => onAdd(food)}>
                    + Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;