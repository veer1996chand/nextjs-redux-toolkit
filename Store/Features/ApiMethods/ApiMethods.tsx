import axios from 'axios';
import { FilterInterface } from '../../../Components/Product/Utils/Interface';
import { API_STATUS, API_URL } from '../../Utils/ApiConstant';

export const getProducts = async (filters: FilterInterface) => {
  const response = await axios.get(API_URL?.PRODUCTS_LIST, {
    params: filters,
  });
  return response.data || [];
};
