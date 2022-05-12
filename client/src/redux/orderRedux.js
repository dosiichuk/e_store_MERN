import axios from 'axios';
import config from '../config';

/* selectors */
export const getIsLoading = ({ products }) => products.loading.active;

/* action name creator */
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const CREATE_ORDER = createActionName('CREATE_ORDER');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const createOrder = payload => ({ payload, type: CREATE_ORDER });

export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const createOrderRequest = formData => async (dispatch, getState) => {
  try {
    dispatch(fetchStarted());
    const response = await axios({
      method: 'post',
      url: `${config.api.baseUrl}/orders`,
      data: formData,
      headers: { 'Content-Type': 'application/json' },
    });
    dispatch(createOrder(response.data));
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
    case CREATE_ORDER: {
      return {
        ...statePart,
        orders: [...statePart.orders, action.payload],
      };
    }

    default:
      return statePart;
  }
};
