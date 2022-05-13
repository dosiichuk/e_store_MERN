import axios from 'axios';
import config from '../config';

/* selectors */
export const getAll = ({ products }) => {
  return products.data;
};
export const getProductById = ({ products }, id) =>
  products.data.find(product => product._id == id);

export const getIsLoading = ({ products }) => products.loading.active;

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const CREATE_SUCCESS = createActionName('CREATE_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const CREATE_REVIEW = createActionName('CREATE_REVIEW');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const createSuccess = payload => ({ payload, type: CREATE_SUCCESS });
export const createReview = payload => ({ payload, type: CREATE_REVIEW });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const fetchProductsRequest = () => async (dispatch, getState) => {
  try {
    const productDataIsEmpty = getAll(getState()).length === 0;
    const isLoading = getIsLoading(getState());
    if (productDataIsEmpty && !isLoading) {
      dispatch(fetchStarted());
      const { data } = await axios.get(`${config.api.baseUrl}/products`);
      if (data.length > 0) {
        dispatch(fetchSuccess(data));
      }
    }
  } catch (err) {
    dispatch(fetchError(err));
  }
};

export const createReviewRequest = reviewData => async (dispatch, getState) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${config.api.baseUrl}/reviews`,
      data: reviewData,
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.data) {
      dispatch(createReview(response.data));
    }
  } catch (err) {
    console.log(err);
    dispatch(fetchError(err));
  }
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }

    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case CREATE_REVIEW: {
      return {
        ...statePart,
        data: statePart.data.map(product =>
          product._id === action.payload.product
            ? { ...product, reviews: [...product.reviews, action.payload] }
            : product
        ),
      };
    }
    default:
      return statePart;
  }
};
