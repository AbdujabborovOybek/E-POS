export const addBasket = (item) => {
  return {
    type: "ADD_BASKET",
    payload: item,
  };
};

const basket = JSON.parse(localStorage.getItem("basket")) || [];

export const reBasket = (satate = basket, action) => {
  switch (action.type) {
    case "ADD_BASKET":
      return [...satate, action.payload];

    default:
      return satate;
  }
};
