import { Card, Col, Row, Button, Text } from '@nextui-org/react';
import Link from 'next/link';
import { ProductInterface } from '../Utils/Interface';

export const ProductCard = (props: ProductInterface) => {
  const { id, title, thumbnailUrl, albumId } = props || {};
  return (
    <Card css={{ w: '99%', h: '400px' }} key={albumId}>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            New
          </Text>
          <Text h3 color="black">
            {title}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={thumbnailUrl}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: 'absolute',
          bgBlur: '#ffffff66',
          borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text color="#000" size={12}>
              Price
            </Text>
            <Text color="#000" size={12}>
              {id + 10}&#8377;
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Link
                href={{
                  pathname: '/Products/[product]',
                  query: { product: id },
                }}
              >
                <Text
                  css={{ color: 'inherit' }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Buy Now
                </Text>
              </Link>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
