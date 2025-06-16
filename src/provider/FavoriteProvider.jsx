import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";
const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourites = (latitude, longitude, location) => {
    setFavourites(...favourites, {
      latitude: latitude,
      longitude: location,
      location: location,
    });
  };
  const removeFromFavourites = (location) => {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location
    );

    setFavourites(restFavourites);
  };
  return <FavouriteContext.Provider>{children}</FavouriteContext.Provider>;
};

export default FavouriteProvider;
