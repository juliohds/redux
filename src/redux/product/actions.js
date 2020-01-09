import { createAction } from 'redux-actions';
import { GET_PRODUCTS, SET_QUANTIFY } from './types';

export const setAllProducts = createAction(GET_PRODUCTS);
export const setQuantify = createAction(SET_QUANTIFY);