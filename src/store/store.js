const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      //   characters: [],
      //   episodes: [],
      favorite: [],
    },
    actions: {
      addFav: (name) => {
        const store = getStore();
        const favorite = store.favorite.push(name);
        setStore({ favorite: [...store.favorite, favorite] });
      },
      //   deleteFavorite: (newFavorites) => {
      //     setStore({
      //       favorites: newFavorites,
      //     });
      //,
    },
  };
};

export default getState;
