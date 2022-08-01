import Head from 'next/head';
import React from 'react';

type ProductInfo = {
  children?: React.ReactNode;
};
/**
 * This is main ProductInfo of the come-fast
 */
const ProductInfo: React.FC<ProductInfo> = ({ children }) => <>{children}</>;

export default ProductInfo;
