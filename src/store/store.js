const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      //   characters: [],
      //   episodes: [],
      favorite: [],
    },
    actions: {
      addFavorite: (favorite) => {
        const store = getStore();
        const favorite = store.favorite.push();
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
