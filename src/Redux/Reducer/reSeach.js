// Readucer for search

export const reSeach = (state = "", action) => {
  switch (action.type) {
    case "SEARCH":
      return action.payload;
    default:
      return state;
  }
};
