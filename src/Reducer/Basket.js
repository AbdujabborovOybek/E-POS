const basket = JSON.parse(localStorage.getItem("basket")) || [];

export const reBasket = (satate = basket, action) => {
  switch (action.type) {
    case "ADD_BASKET":
      let found = false;
      satate.map((item) => {
        if (item.id === action.payload.id) {
          item.count = action.payload.count;
          found = true;
        }
        return null;
      });

      if (!found) {
        return [...satate, action.payload];
      }
      return [...satate];

    case "REMOVE_BASKET":
      return satate.filter((item) => item.id !== action.payload);

    case "UPDATE_BASKET":
      return satate.map((item) => {
        if (item.id === action.payload.id) {
          item.count = action.payload.count;
        }
        return item;
      });

    case "CLEAR_BASKET":
      return [];

    default:
      return satate;
  }
};

export const addBasket = (item) => {
  return {
    type: "ADD_BASKET",
    payload: item,
  };
};

export const updateBasket = (item) => {
  return {
    type: "UPDATE_BASKET",
    payload: item,
  };
};

export const removeBasket = (id) => {
  return {
    type: "REMOVE_BASKET",
    payload: id,
  };
};

export const clearBasket = () => {
  return {
    type: "CLEAR_BASKET",
  };
};
