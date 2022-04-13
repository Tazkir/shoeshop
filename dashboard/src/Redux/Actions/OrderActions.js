import {
  // ORDER_DELIVERED_FAIL,
  // ORDER_DELIVERED_REQUEST,
  // ORDER_DELIVERED_SUCCESS,
  // ORDER_DETAILS_FAIL,
  // ORDER_DETAILS_REQUEST,
  // ORDER_DETAILS_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
} from '../Constants/OrderConstants';
import { logout } from './userActions';
import axios from 'axios';

// GET ALL ORDERS
export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/all`, config);

    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_LIST_FAIL,
      payload: message,
    });
  }
};
