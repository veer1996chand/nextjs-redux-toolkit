import type { InferGetStaticPropsType } from 'next';
import { Pagination } from '@nextui-org/react';
import AllProducts from '../../Components/Product/AllProducts/AllProducts';
import { useAppDispatch, useAppSelector } from '../../Store/Hooks/Hooks';
import { selectProduct } from '../../Store/Features/ProductSlice/ProductSlice';
import ProductListView from '../../Components/Product/ProductListView/ProductListView';
import { getProducts } from '../../Store/Features/ApiMethods/ApiMethods';
import { INITIAL_PAGE, MIN_RECORDS_PER_PAGE } from '../../Utils/Constant';
import Leyout from '../../Components/Templates/Leyout';
import { FilterInterface } from '../../Components/Product/Utils/Interface';
import { useState } from 'react';

const Products = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [productList, setProductList] = useState(products);
  // const dispatch = useAppDispatch();
  // const { data, pending, error } = useAppSelector(selectProduct);
  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);

  const getNewProductList = async (e: number) => {
    const list = await getProductsList({ _page: e } as FilterInterface);
    setProductList(list);
  };

  return (
    <Leyout title={'Products'} description={''}>
      <AllProducts>
        <ProductListView data={productList} />
      </AllProducts>
      <Pagination
        total={500}
        initialPage={INITIAL_PAGE}
        onChange={(e) => getNewProductList(e)}
      />
    </Leyout>
  );
};

export default Products;

export const getProductsList = (filters?: FilterInterface) => {
  const filter = {
    _page: INITIAL_PAGE,
    _limit: MIN_RECORDS_PER_PAGE,
    ...filters,
  };
  return getProducts(filter);
};

export const getStaticProps = async () => {
  return {
    props: {
      products: await getProductsList(),
    },
  };
};
