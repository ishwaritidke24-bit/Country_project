import { useFavorites } from "../../context/FavoriteContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export const CountryCard = ({ country }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(country?.name?.common);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    if (!country) return; // safety check
    if (favorite) {
      removeFavorite(country.name.common);
    } else {
      addFavorite(country);
    }
  };

  // Function to navigate to country detail page
  const handleReadMore = () => {
    const countryName = country?.name?.common?.replace(/\s/g, '-');
    navigate(`/country/${countryName}`);
  };

  return (
    <div className="country-card">
      <div className="bg-white-box"> 
        <img src={country?.flags?.png} alt={country?.name?.common} />
        
        <div className="countryInfo">
          <h2>{country?.name?.common}</h2>
          <p>Population: {country?.population?.toLocaleString()}</p>
          <p>Region: {country?.region}</p>
          <p>Capital: {country?.capital?.[0]}</p>
          
          <button 
            className="readMore-button"
            onClick={handleReadMore} // Attach navigation
          >
            Read More
          </button>
        </div>

        <button
          className={`fav-btn ${favorite ? "active" : ""}`}
          onClick={handleClick}
        >
          {favorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
};
