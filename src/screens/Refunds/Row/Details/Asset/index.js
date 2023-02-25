import React from "react";
import styles from "./Asset.module.sass";
import cn from "classnames";

const Asset = ({ item, className }) => {
  return (
    <div className={cn(styles.item, className)}>
      <div className={styles.preview}>
        <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Asset" />
      </div>
      <div className={styles.details}>
        <div className={styles.asset}>{item.asset}</div>
        {item.status ? (
          <div className={styles.new}>New request</div>
        ) : (
          <div className={styles.progress}>In progress</div>
        )}
      </div>
    </div>
  );
};

export default Asset;
