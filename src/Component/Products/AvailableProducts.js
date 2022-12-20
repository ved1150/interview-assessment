import React from 'react';
import Card from '../UI/Card';
import ProductItem from './ProductItem/ProductItem';
import classes from './AvailableProducts.module.css'
const DUMMY_PRODUCTS = [
  {
    id: '1',
    name: 'Watch',
    description: 'Time with Perfection',
    price: 22.99,
  },
  {
    id: "2",
    name: "Headphones",
    description: "Plug it, listen to it, feel it",
    price: 16.5,
  },
  {
    id: "3",
    name: "Phone",
    description: "Making communication easier",
    price: 512.99,
  },
  {
    id: "4",
    name: "Sunglasses",
    description: "Love what you wear",
    price: 18.99,
  },
];
const AvailableProducts= () => {
  const productList = DUMMY_PRODUCTS.map((product) => (
    <ProductItem
      id={product.id}
      key={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{productList}</ul>
      </Card>
    </section>
  );
};
export default AvailableProducts;