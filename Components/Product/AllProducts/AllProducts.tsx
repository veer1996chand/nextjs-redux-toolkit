import React from 'react';
import Leyout from '../../Templates/Leyout';

type Products = {
  children?: React.ReactNode;
};
/**
 * This is main Products of the come-fast
 */
const AllProducts: React.FC<Products> = ({ children }) => <>{children}</>;

export default AllProducts;
