export const initialState = {
  products: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
    filters: { author: { _id: '28340' } },
  },
  cart: {
    products: [],
    user: null,
    loading: {
      active: true,
      error: false,
    },
  },
  orders: {
    orders: [],
    loading: {
      active: false,
      error: false,
    },
  },
  user: {
    loggedIn: false,
    name: null,
    email: null,
    location: null,
    role: undefined,
    id: null,
    loading: {
      active: true,
      error: false,
    },
  },
};
