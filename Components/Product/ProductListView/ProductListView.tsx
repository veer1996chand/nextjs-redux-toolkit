import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { Grid } from '@nextui-org/react';
import { ProductInterface } from '../Utils/Interface';

/**
 * This is product list
 */
const ProductListView = ({ data }: { data: [] }) => {
  return (
    <Grid.Container gap={2} justify="center">
      {data.map((product: ProductInterface, index: number) => (
        <Grid xs={2} key={index}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default ProductListView;
