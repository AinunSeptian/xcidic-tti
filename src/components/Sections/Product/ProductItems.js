import React, { useRef, useState, useEffect } from 'react';

//////
import dummiesProduct from '../../../dummies-product.json';
import classes from './ProductItems.module.css';
/////

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import './styles.css';

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

let arrayFirstHalf;
let arraySecondHalf;

const ProductItems = () => {
  const [products, setProducts] = useState([]);
  const [firstList, setFirstList] = useState([]);
  const [secondList, setSecondList] = useState([]);
  // const ulRef = useRef();
  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(ulRef.current.scrollLeft);
  //   }, 500);
  // }, []);
  useEffect(() => {
    setProducts(dummiesProduct.data);
  }, []);

  useEffect(() => {
    let yourArray = products;
    let halfwayThrough = Math.floor(yourArray.length / 2);
    // or instead of floor you can use ceil depending on what side gets the extra data

    arrayFirstHalf = yourArray.slice(0, halfwayThrough);
    arraySecondHalf = yourArray.slice(halfwayThrough, yourArray.length);

    if (products.length > 1) {
      const firstMap = arrayFirstHalf.map((product) => (
        <li key={product.id} className={classes.productItems}>
          <img
            className={classes.img1}
            src={product.img}
            alt={'Product - ' + product.id}
          />
          <h2>{product.title}</h2>
          <p className={classes.p1}>{product.type}</p>

          <img
            className={classes.img2}
            src={product.regionImg}
            alt={product.title + ' - Img'}
          />
        </li>
      ));

      setFirstList(firstMap);
      const secondMap = arraySecondHalf.map((product) => (
        <li key={product.id} className={classes.productItems}>
          <img
            className={classes.img1}
            src={product.img}
            alt={'Product - ' + product.id}
          />
          <h2>{product.title}</h2>
          <p className={classes.p1}>{product.type}</p>

          <img
            className={classes.img2}
            src={product.regionImg}
            alt={product.title + ' - Img'}
          />
        </li>
      ));
      setSecondList(secondMap);
    }
  }, [products]);

  console.log(products);
  console.log(firstList);
  console.log(secondList);

  let productList = [];
  for (let i = 0; i < firstList.length; i++) {
    productList.push(
      <SwiperSlide>
        {firstList[i]}
        <br></br>
        {secondList[i]}
      </SwiperSlide>
    );
  }

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={3}
        spaceBetween={-120}
        className={'mySwiper'}
      >
        {productList}
      </Swiper>
    </>
  );
};

export default ProductItems;
