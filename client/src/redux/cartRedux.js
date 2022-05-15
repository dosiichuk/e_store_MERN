/* selectors */
export const getCartProducts = ({ cart }) => {
  return cart.products;
};
export const getCart = ({ cart }) => cart;

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
const CHANGE_PRODUCT_QUANTITY = createActionName('CHANGE_PRODUCT_QUANTITY');
const ADD_NOTE_TO_ITEM = createActionName('ADD_NOTE_TO_ITEM');
const CLEAR_CART = createActionName('CLEAR_CART');
const SAVE_CART_TO_LOCAL_STORAGE = createActionName('SAVE_CART_TO_LOCAL_STORAGE');
const RETRIEVE_CART_FROM_LOCAL_STORAGE = createActionName(
  'RETRIEVE_CART_FROM_LOCAl_STORAGE'
);

/* action creators */

export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
export const changeProductQuantity = payload => ({
  payload,
  type: CHANGE_PRODUCT_QUANTITY,
});
export const addNoteToItem = payload => ({ payload, type: ADD_NOTE_TO_ITEM });
export const clearCart = payload => ({ payload, type: CLEAR_CART });
export const saveCartToLocalStorage = payload => {
  window.localStorage.setItem('cart', JSON.stringify(payload));
  return {
    payload,
    type: SAVE_CART_TO_LOCAL_STORAGE,
  };
};
export const retrieveCartFromLocalStorage = payload => {
  const cart = JSON.parse(window.localStorage.getItem('cart'));
  return {
    payload: cart,
    type: RETRIEVE_CART_FROM_LOCAL_STORAGE,
  };
};

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
    case CHANGE_PRODUCT_QUANTITY: {
      return {
        ...statePart,
        products: statePart.products.map(product =>
          product._id === action.payload._id
            ? { ...product, quantity: product.quantity + action.payload.changeBy }
            : product
        ),
      };
    }
    case ADD_NOTE_TO_ITEM: {
      return {
        ...statePart,
        products: statePart.products.map(product =>
          product._id === action.payload._id
            ? { ...product, userNote: action.payload.userNote }
            : product
        ),
      };
    }
    case CLEAR_CART: {
      return { ...statePart, products: action.payload };
    }
    case SAVE_CART_TO_LOCAL_STORAGE: {
      return { ...statePart };
    }
    case RETRIEVE_CART_FROM_LOCAL_STORAGE: {
      return { ...statePart, ...action.payload };
    }
    default:
      return statePart;
  }
};
