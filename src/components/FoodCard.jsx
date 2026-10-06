function FoodCard({ food, onAdd, isFavorite, onFavorite }) {
    return (
        <article className="food-card">
            <div className="food-image">
                <img src={food.image} alt={food.name} />

                <button
                className="favorite-btn"
                onClick={() => onFavorite(food.id)}
            aria-label="Toggle favorite"
        >
            {isFavorite ? "♥" : "♡"}
            </button>
            </div>
        </article>
    );
}

export default FoodCard;