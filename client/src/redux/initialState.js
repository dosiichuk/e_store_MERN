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
    loggedIn: true,
    name: 'John Doe',
    email: 'test@test.com',
    location: 'Warsaw',
    role: undefined,
    id: '625dd54c1ed2a75524bb1e77',
    loading: {
      active: true,
      error: false,
    },
  },
};
