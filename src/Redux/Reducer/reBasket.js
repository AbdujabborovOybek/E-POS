// create locol storge for basket
const basket = JSON.parse(localStorage.getItem("basket")) || [];

export const reBasket = (state = basket, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return [...state, action.payload];
    case "REMOVE_FROM_BASKET":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

let price = 0;

basket.map((item) => {
  price = price + parseInt(item.price);
  return price;
});

export const totalPrice = (state = price, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return state + +action.payload.price;
    case "REMOVE_FROM_BASKET":
      return state - action.payload.price;
    default:
      return state;
  }
};
