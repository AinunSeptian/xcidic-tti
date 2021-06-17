import ProductItems from './ProductItems';
import classes from './CardProduct.module.css';

const CardProduct = () => {
  return (
    <section className={classes.productSection}>
      <h1>Product Showcase</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis,
        aliquam cras neque nunc leo cursus elit. Massa feugiat malesuada
        malesuada turpis. Ultrices amet diam neque egestas nec, quam. Sed augue
        nulla nunc eu imperdiet. Arcu.
      </p>
      <h3>Top Products</h3>
      <div className={classes.productItemWrapper}>
        <ProductItems className={classes.productWrapper} />
        <h4>See more products</h4>
      </div>
    </section>
  );
};

export default CardProduct;
