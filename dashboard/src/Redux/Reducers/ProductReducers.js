import {
  // PRODUCT_CREATE_FAIL,
  // PRODUCT_CREATE_REQUEST,
  // PRODUCT_CREATE_RESET,
  // PRODUCT_CREATE_SUCCESS,
  // PRODUCT_DELETE_FAIL,
  // PRODUCT_DELETE_REQUEST,
  // PRODUCT_DELETE_SUCCESS,
  // PRODUCT_EDIT_FAIL,
  // PRODUCT_EDIT_REQUEST,
  // PRODUCT_EDIT_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  // PRODUCT_UPDATE_FAIL,
  // PRODUCT_UPDATE_REQUEST,
  // PRODUCT_UPDATE_RESET,
  // PRODUCT_UPDATE_SUCCESS,
} from '../Constants/ProductConstants';

// ALL PRODUCTS
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
