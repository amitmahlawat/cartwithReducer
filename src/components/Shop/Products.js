import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
const Dummy_Items=[
  {
  id:"#1",
  title:"my first book",
  price:3,
  quantity:1,
  description:"this is my first ever book"
},
{
  id:"#2",
  title:"my second book",
  price:4,
  quantity:1,
  description:"this is my second ever book"
}
]

  return (

    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      <ProductItem
          items={Dummy_Items}
         />
      </ul>
    </section>
  );
};

export default Products;
