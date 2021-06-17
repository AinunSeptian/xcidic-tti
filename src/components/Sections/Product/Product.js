import ProductItems from './ProductItems';
import classes from './Product.module.css';

import useWindowSize from '../../../hooks/useWindowSize';
import { useEffect, useState } from 'react';

import verticalTimeline from '../../../assets/img/vertical-timeline.svg';

const CardProduct = () => {
  const size = useWindowSize();
  const [responsive, setResponsive] = useState({});

  const mobileWidth = 688;

  useEffect(() => {
    // setResponsive({ currentSizeWidth: size.width });

    if (!responsive.currentSizeWidth && size.width > mobileWidth) {
      return;
    }

    if (responsive.currentSizeWidth && size.width < mobileWidth) {
      return;
    }

    // .productItemWrapper {
    //   float: right;
    //   display: flex;
    //   overflow: scroll;
    //   height: 280px;
    //   max-width: 63vh;
    //   zoom: 80%;
    //   padding-left: 10px;
    //   margin: 170px 0px 0px 0px;
    // }

    if (size.width < mobileWidth) {
      return setResponsive({
        display: 'flex',
        float: 'left',
        overflow: 'scroll',
        height: '280px',
        maxWidth: '100%',
        zoom: '80%',
        paddingLeft: '10px',
        margin: '170px 0px 0px 50px',
        currentSizeWidth: size.width,
        h2Style: {
          position: 'absolute',
          float: 'left',
          marginTop: '280px',
        },
      });
    }

    if (size.width > mobileWidth) {
      return setResponsive({});
    }
  }, [size.width, responsive]);

  return (
    <section className={classes.productSection}>
      <i className={classes.timeline}>
        <img src={verticalTimeline} alt='vertical-timeline' />
      </i>
      <h1>Product Showcase</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis,
        aliquam cras neque nunc leo cursus elit. Massa feugiat malesuada
        malesuada turpis. Ultrices amet diam neque egestas nec, quam. Sed augue
        nulla nunc eu imperdiet. Arcu.
      </p>
      <h3>{size.width < mobileWidth ? 'Featured Products' : 'Top Products'}</h3>
      <div className={classes.productItemWrapper} style={{ ...responsive }}>
        <ProductItems className={classes.productWrapper} />
        <h4 style={{ ...responsive.h2Style }}>See more products</h4>
      </div>
    </section>
  );
};

export default CardProduct;
