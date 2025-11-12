import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Sync to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (country) => {
    // Avoid duplicates
    if (!favorites.find((fav) => fav.name.common === country.name.common)) {
      setFavorites([...favorites, country]);
    }
  };

  const removeFavorite = (countryName) => {
    setFavorites(favorites.filter((fav) => fav.name.common !== countryName));
  };

  const isFavorite = (countryName) => {
    return favorites.some((fav) => fav.name.common === countryName);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoriteContext);
