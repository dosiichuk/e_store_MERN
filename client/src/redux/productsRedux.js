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
const UPDATE_SUCCESS = createActionName('UPDATE_SUCCESS');
const DELETE_SUCCESS = createActionName('DELETE_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const createSuccess = payload => ({ payload, type: CREATE_SUCCESS });
export const updateSuccess = payload => ({ payload, type: UPDATE_SUCCESS });
export const deleteSuccess = payload => ({ payload, type: DELETE_SUCCESS });
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

export const createPostRequest = postData => async dispatch => {
  try {
    dispatch(fetchStarted());
    const response = await axios({
      method: 'post',
      url: `${config.api.baseUrl}/posts`,
      data: postData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    if (response.statusText === 'OK') {
      dispatch(createSuccess(response.data));
    }
  } catch (err) {
    dispatch(fetchError(err));
  }
};

export const updatePostRequest = postData => async dispatch => {
  try {
    dispatch(fetchStarted());
    const response = await axios.put(
      `${config.api.baseUrl}/posts/${postData.id}`,
      postData
    );

    if (response.statusText === 'OK') {
      dispatch(updateSuccess(response.data));
    }
  } catch (err) {
    dispatch(fetchError(err));
  }
};

export const deletePostRequest = _id => async dispatch => {
  try {
    dispatch(fetchStarted());
    const response = await axios.delete(`${config.api.baseUrl}/posts/${_id}`);

    if (response.statusText === 'OK') {
      dispatch(deleteSuccess(_id));
    }
  } catch (err) {
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
    case CREATE_SUCCESS: {
      if (action.payload.status === 'published') {
        return {
          ...statePart,
          loading: {
            active: false,
            error: false,
          },
          data: [...statePart.data, action.payload],
        };
      }
    }
    case UPDATE_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: statePart.data.map(post =>
          post._id !== action.payload._id ? post : action.payload
        ),
      };
    }
    case DELETE_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: statePart.data.filter(post => post._id !== action.payload),
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

    default:
      return statePart;
  }
};
