
import { useState } from "react";
import FoodCard from "../components/FoodCard";

function Menu({
  foods,
  onAdd,
  favorites,
  onFavorite
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const categories = [
    "All", "Burgers", "Pizza", "Pasta", "Salads"
  ];

  const filteredFoods = foods
    .filter(food =>
      food.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter(food =>
      category === "All" || food.category === category
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return a.id - b.id;
    });

  return (
    <main className="section">
      <div className="section-heading">
        <span className="eyebrow">EXPLORE OUR FOOD</span>
        <h1>Our Menu</h1>
        <p>Find something delicious for every mood.</p>
      </div>

      <input
        className="search-input"
        type="search"
        placeholder="Search for a dish..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="filters">
        {categories.map(item => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="sort-row">
        <label htmlFor="sort">Sort by price:</label>
        <select
          id="sort"
          value={sort}
          onChange={e => setSort(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="low">Lowest first</option>
          <option value="high">Highest first</option>
        </select>
      </div>

      {filteredFoods.length === 0 ? (
        <div className="empty-state">
          <h2>No dishes found</h2>
          <p>Try another search or category.</p>
        </div>
      ) : (
        <div className="food-grid">
          {filteredFoods.map(food => (
            <FoodCard
              key={food.id}
              food={food}
              onAdd={onAdd}
              isFavorite={favorites.includes(food.id)}
              onFavorite={onFavorite}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Menu;