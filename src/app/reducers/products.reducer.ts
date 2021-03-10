import { Product } from "../models/product.model";
import { FakeBackend_Product } from "../../assets/fake-backend/products";

// initial state from FakeBackend_Product
const initialState: Product[] = FakeBackend_Product;

// Since there are no actions just yet, we simply return the original state
export const productsReducer = (state: Product[] = initialState, {}) => state