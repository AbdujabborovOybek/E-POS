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

// ===== user =====

export const reUser = (state = {}, action) => {
  switch (action.type) {
    case "USER":
      return action.payload;
    default:
      return state;
  }
};

export const acUser = (user) => {
  return {
    type: "USER",
    payload: user,
  };
};
