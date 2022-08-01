import React from 'react';
import Leyout from '../../Templates/Leyout';

type Products = {
  children?: React.ReactNode;
};
/**
 * This is main Products of the come-fast
 */
const Products: React.FC<Products> = ({ children }) => <>{children}</>;

export default Products;
