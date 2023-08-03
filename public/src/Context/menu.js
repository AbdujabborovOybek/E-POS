export const reMenu = (state = false, action) => {
  switch (action.type) {
    case "MENU":
      return action.payload;
    default:
      return state;
  }
};

export const acMenu = (payload) => ({ type: "MENU", payload });
