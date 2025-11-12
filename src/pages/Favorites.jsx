import { useFavorites } from "../context/FavoriteContext";
import { CountryCard } from "../components/layout/CountryCard";

export const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <section className="favorites-section">
      {/* Clean and consistent heading */}
      <h2 className="favorites-heading">Your Favorite Countries ❤️</h2>

      {favorites.length === 0 ? (
        <p className="no-favorites-text">No favorites added yet.</p>
      ) : (
        <div className="country-grid">
          {favorites.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </div>
      )}
    </section>
  );
};
