//
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true };
    case 'GET_ITEMS':
      return { ...state, loading: false, cart: action.payload };
    case 'CLEAR_ALL':
      return { ...state, cart: [] };
    case 'CHANGE_QUANTITY':
      return {
        ...state,
        cart: state.cart
          .map((i) => {
            return i.id === action.payload.id
              ? { ...i, amount: i.amount + action.payload.num }
              : i;
          })
          .filter((i) => i.amount !== 0),
      };
    case 'GET_TOTAL':
      let { amount, total } = state.cart.reduce(
        (acc, cur) => {
          acc = {
            amount: acc.amount + cur.amount,
            total: acc.total + cur.price * cur.amount,
          };
          return acc;
        },
        { amount: 0, total: 0 }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, amount, total };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter((i) => i.id !== action.payload),
      };
    default:
      throw new Error();
  }
};
//
export default reducer;
