import { GET_PRODUCTS, SET_QUANTIFY } from './types';

const initialState = {
    products: [],
    quantify: 0,   
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
        return { ...state, products: action.payload };
    case SET_QUANTIFY:
        return { ...state, quantify: action.payload };
    default:
      return state;
  }
};


