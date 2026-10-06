
function Cart({ cart, onRemove, onQuantity }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="section">
      <div className="section-heading">
        <h1>Your Cart</h1>
        <p>Review your selected dishes.</p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-state">
          <h2>Your cart is empty</h2>
          <p>Add something delicious from our menu.</p>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>

                  <div className="quantity">
                    <button
                      onClick={() =>
                        onQuantity(item.id, item.quantity - 1)
                      }
                    >−</button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        onQuantity(item.id, item.quantity + 1)
                      }
                    >+</button>
                  </div>
                </div>

                <div className="cart-actions">
                  <strong>
                    ${(item.price * item.quantity).toFixed(2)}
                  </strong>
                  <button
                    className="remove-btn"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h2>Total: ${total.toFixed(2)}</h2>
            <button
              className="primary-btn"
              onClick={() =>
                alert("Thank you! Demo order submitted.")
              }
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;