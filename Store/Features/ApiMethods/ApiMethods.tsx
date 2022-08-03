import axios from 'axios';
import { FilterInterface } from '../../../Components/Product/Utils/Interface';
import { API_URL } from '../../Utils/ApiConstant';

// get Products list by filters
export const getProducts = async (filters: FilterInterface) => {
  const response = await axios.get(API_URL?.PRODUCTS_LIST, {
    params: filters,
  });
  return response.data || [];
};

// get product details by product id
export const getProductByProdId = async (id: string | number) => {
  const response = await axios.get(API_URL?.PRODUCTS_LIST, { params: { id } });
  return response.data[0] || [];
};
