
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import menuData from "./data/menu.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import About from "./pages/About";

function App() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      setFoods(menuData);
      setLoading(false);
    } catch (err) {
      setError("Could not load the menu.");
      setLoading(false);
    }
  }, []);

  function addToCart(food) {
    setCart(current => {
      const existing = current.find(item => item.id === food.id);

      if (existing) {
        return current.map(item =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...food, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart(current => current.filter(item => item.id !== id));
  }

  function updateQuantity(id, quantity) {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }

    setCart(current =>
      current.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }

  function toggleFavorite(id) {
    setFavorites(current =>
      current.includes(id)
        ? current.filter(item => item !== id)
        : [...current, id]
    );
  }

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  if (loading) {
    return <div className="status">Loading menu...</div>;
  }

  if (error) {
    return <div className="status error">{error}</div>;
  }

  return (
    <>
      <Navbar cartCount={cartCount} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              popularFoods={foods.filter(food => food.popular)}
              onAdd={addToCart}
            />
          }
        />

        <Route
          path="/menu"
          element={
            <Menu
              foods={foods}
              onAdd={addToCart}
              favorites={favorites}
              onFavorite={toggleFavorite}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onRemove={removeFromCart}
              onQuantity={updateQuantity}
            />
          }
        />

        <Route path="/about" element={<About />} />

        <Route
          path="*"
          element={
            <main className="section empty-state">
              <h1>404 - Page not found</h1>
            </main>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;