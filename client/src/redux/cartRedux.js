/* selectors */
export const getCartProducts = ({ cart }) => {
  return cart.products;
};

export const getCartCount = ({ cart }) => {
  if (cart.products.length === 0) return 0;
  return cart.products.reduce((acc, curr) => acc + curr.quantity, 0);
};

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');

/* action creators */

export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const productAlreadyInCart = statePart.products.find(
        item => item._id === action.payload._id
      );
      if (productAlreadyInCart !== undefined)
        return {
          ...statePart,
          products: statePart.products.map(product =>
            product._id === productAlreadyInCart._id
              ? { ...productAlreadyInCart, quantity: productAlreadyInCart.quantity + 1 }
              : product
          ),
        };
      return {
        ...statePart,
        products: [...statePart.products, { ...action.payload, quantity: 1 }],
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...statePart,
        products: statePart.products.filter(product => product._id !== action.payload),
      };
    }

    default:
      return statePart;
  }
};
