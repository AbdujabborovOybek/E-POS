// create locol storge for basket
const basket = JSON.parse(localStorage.getItem("basket")) || [];

export const reBasket = (state = basket, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      localStorage.setItem(
        "basket",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    case "INCREMET":
      return state.map((item) => {
        if (item.id === action.payload) {
          localStorage.setItem("basket", JSON.stringify(state));
          return { ...item, count: item.count + 1 };
        } else {
          return item;
        }
      });

    case "DELETE_ITEM":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

// total price is basket

let sum = 0;

basket.map((item) => {
  sum += item.price * item.count;
  return null;
});

export const reTotalPrice = (state = sum, action) => {
  switch (action.type) {
    case "TOTAL_PRICE":
      let sum = 0;
      basket.map((item) => {
        sum += item.price * item.count;
        return sum;
      });
      return sum;
    default:
      return state;
  }
};
