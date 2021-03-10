import { Product } from '../models/product.model';
import { Products } from '../../assets/fake-backend/products';

// initial state from Products
const initialState: Product[] = Products;

// Since there are no actions just yet, we simply return the original state
export const productsReducer = (state: Product[] = initialState, {}) => state;
