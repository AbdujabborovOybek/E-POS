export const reSearch = (state = "", action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return action.search;
    default:
      return state;
  }
};

export const acSearch = (search) => {
  return {
    type: "SET_SEARCH",
    search,
  };
};
