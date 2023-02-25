import React from "react";
import cn from "classnames";
import styles from "./Assets.module.sass";
import { Link } from "react-router-dom";
import Icon from "../../../../Icon";
import Asset from "../../../../Asset";
import Slider from "react-slick";

// data
import { assets } from "../../../../../mocks/assets";

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Assets = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-right" size="24" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-left" size="24" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className={styles.assets}>
      <div className={styles.head}>
        <div className={cn("title-green", styles.title)}>More like this</div>
        <Link
          className={cn("button-stroke button-small", styles.button)}
          to="/assets-dashboard"
        >
          <span>View all</span>
          <Icon name="arrow-right" size="24" />
        </Link>
      </div>
      <div className={styles.wrapper}>
        <Slider className="assets-slider" {...settings}>
          {assets.map((x, index) => (
            <Asset
              className={styles.asset}
              item={x}
              key={index}
              withoutСheckbox
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Assets;
