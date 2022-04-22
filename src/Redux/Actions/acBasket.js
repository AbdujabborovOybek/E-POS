export function addToBasket(item) {
  return {
    type: "ADD_TO_BASKET",
    payload: item,
  };
}

export function removeFromBasket(item) {
  return {
    type: "REMOVE_FROM_BASKET",
    payload: item,
  };
}

export function clearBasket() {
  return {
    type: "CLEAR_BASKET",
  };
}

// action increment count
export const increment = (item) => {
  return {
    type: "INCREMET",
    payload: item.id,
  };
};

export const totalPrice = () => {
  return {
    type: "TOTAL_PRICE",
  };
};

// delete item from basket
export const deleteItem = (id) => {
  return {
    type: "DELETE_ITEM",
    payload: id,
  };
};
