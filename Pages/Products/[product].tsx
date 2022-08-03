import { useRouter } from 'next/router';
import { Link } from '@nextui-org/react';
import ErrorPage from 'next/error';
import Leyout from '../../Components/Templates/Leyout';
import ProductInfo from '../../Components/Product/ProductInfo/ProductInfo';
import {
  getProductByProdId,
  getProducts,
} from '../../Store/Features/ApiMethods/ApiMethods';
import { getProductList } from '../../Store/Features/ProductSlice/ProductSlice';
import { ProductInterface } from '../../Components/Product/Utils/Interface';
import { InferGetStaticPropsType } from 'next';
import { Image } from '@nextui-org/react';

type Params = {
  product: string;
};

const Product = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { product, isFallback } = router.query;
  if (!isFallback && !product) {
    return <ErrorPage statusCode={404} />;
  }
  const { url, title, albumId } = props || {};

  return (
    <Leyout title="product" description="product details page">
      <Link block color="secondary" href="/Products">
        Back
      </Link>
      <ProductInfo>
        <Image
          showSkeleton
          width={320}
          height={180}
          maxDelay={10000}
          src={url}
          alt="Default Image"
        />
        <h3>Price: {albumId + 10} rs</h3>
        <h3>Title: {title}</h3>
        <p>Description: {title}</p>
      </ProductInfo>
    </Leyout>
  );
};
export default Product;

export const getStaticProps = async ({ params }: { params: Params }) => {
  const { product } = params;
  const data = await getProductByProdId(product);
  return {
    props: { ...data },
  };
};

export async function getStaticPaths() {
  const products = await getProducts({});
  return {
    paths: products.map((product: ProductInterface) => {
      const { id } = product;
      return {
        params: {
          product: id.toString(),
        },
      };
    }),
    fallback: false,
  };
}
