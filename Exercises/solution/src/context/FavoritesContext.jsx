import { createContext, useState, useContext } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (character) => {
    setFavorites((prev) => [...prev, character]);
  };

  const removeFavorite = (characterId) => {
    setFavorites((prev) => prev.filter((char) => char.id !== characterId));
  };

  const isFavorite = (characterId) => {
    return favorites.some((char) => char.id === characterId);
  };

  const toggleFavorite = (character) => {
    if (isFavorite(character.id)) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
