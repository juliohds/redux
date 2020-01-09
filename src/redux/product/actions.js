import { createAction } from 'redux-actions';
import { GET_PRODUCTS } from './types';

export const getAllProducts = createAction(GET_PRODUCTS);
