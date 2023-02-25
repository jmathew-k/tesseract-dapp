import React, { useState } from "react";
import styles from "./Row.module.sass";
import cn from "classnames";
import Checkbox from "../../../../../components/Checkbox";
import Balance from "../../../../../components/Balance";
import ModalAsset from "../../../../../components/ModalAsset";
import Control from "../../Control";

import { numberWithCommas } from "../../../../../utils.js";

const Row = ({ item, value, onChange, up }) => {
  const [visibleActions, setVisibleActions] = useState(false);
  const [visibleModalAsset, setVisibleModalAsset] = useState(false);

  return (
    <>
      <div className={styles.row} onMouseLeave={() => setVisibleActions(false)}>
        <div className={styles.col}>
          <Checkbox
            className={styles.checkbox}
            value={value}
            onChange={onChange}
          />
        </div>
        <div className={styles.col}>
          <div
            className={styles.item}
            onClick={() => setVisibleModalAsset(true)}
          >
            <div className={styles.preview}>
              <img
                srcSet={`${item.image2x} 2x`}
                src={item.image}
                alt="Asset"
              />
            </div>
            <div className={styles.details}>
              <div className={styles.asset}>{item.asset}</div>
              <div className={styles.wrap}>
                <div className={styles.price}>${item.price}</div>
                <div className={styles.category}>{item.category}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.label}>Status</div>
          {item.status ? (
            <div className={cn("status-green", styles.status)}>Active</div>
          ) : (
            <div className={cn("status-red", styles.status)}>Deactive</div>
          )}
          <Control
            className={styles.control}
            visibleActions={visibleActions}
            setVisibleActions={setVisibleActions}
            up={up}
          />
        </div>
        <div className={styles.col}>${item.price}</div>
        <div className={styles.col}>
          <div className={styles.label}>Sales</div>
          <div className={styles.sales}>
            <div className={styles.number}>${numberWithCommas(item.sales)}</div>
            <Balance className={styles.balance} value={item.balance} />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.label}>Views</div>
          <div className={styles.box}>
            <div className={styles.number}>
              {(item.views / 1000).toFixed(0)}k
            </div>
            <div className={styles.line}>
              <div
                className={styles.progress}
                style={{
                  backgroundColor: "#2A85FF",
                  width: item.viewsPercent,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.label}>Likes</div>
          <div className={styles.box}>
            <div className={styles.number}>{item.likes}</div>
            <div className={styles.line}>
              <div
                className={styles.progress}
                style={{
                  backgroundColor: "#8E59FF",
                  width: item.likesPercent,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <ModalAsset
        visible={visibleModalAsset}
        onClose={() => setVisibleModalAsset(false)}
      />
    </>
  );
};

export default Row;
