export const reLogin = (state = false, action) => {
  switch (action.type) {
    case "RE_LOGIN":
      return action.payload;
    default:
      return state;
  }
};

export const acLogin = (boolean) => {
  return {
    type: "RE_LOGIN",
    payload: boolean,
  };
};
