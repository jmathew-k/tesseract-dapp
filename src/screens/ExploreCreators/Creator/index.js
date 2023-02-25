import { useState } from "react";
import cn from "classnames";
import styles from "./Creator.module.sass";
import ModalAsset from "../../../components/ModalAsset";

import { numberWithCommas } from "../../../utils.js";

const Creator = ({ className, item, index }) => {
  const [visible, setVisible] = useState(false);
  const [visibleModalAsset, setVisibleModalAsset] = useState(false);

  return (
    <>
      <div className={cn(styles.creator, className)}>
        <div className={styles.head}>
          <div className={styles.user}>
            <div className={styles.avatar}>
              <img src={item.avatar} alt="Avatar" />
            </div>
            <div className={styles.details}>
              <div className={styles.line}>
                <div className={styles.man}>{item.creator}</div>
                {index < 3 && (
                  <div
                    className={styles.number}
                    style={{ backgroundColor: item.colorNumber }}
                  >
                    #{index + 1}
                  </div>
                )}
              </div>
              <div className={styles.parameters}>
                <div className={styles.parameter}>
                  <span>{item.assetsCounter}</span> assets
                </div>
                <div className={styles.parameter}>
                  <span>{numberWithCommas(item.followers)}</span> followers
                </div>
              </div>
            </div>
          </div>
          <div className={styles.btns}>
            <button
              className={cn("button-stroke", styles.button, {
                [styles.active]: visible,
              })}
              onClick={() => setVisible(!visible)}
            >
              Follow<span>ing</span>
            </button>
            <button className={cn("button", styles.button)}>Shop now</button>
          </div>
        </div>
        <div className={styles.assets}>
          {item.assets.map((x, index) => (
            <div
              className={styles.asset}
              key={index}
              onClick={() => setVisibleModalAsset(true)}
            >
              <img srcSet={`${x.image2x} 2x`} src={x.image} alt="Asset" />
            </div>
          ))}
        </div>
      </div>
      <ModalAsset
        visible={visibleModalAsset}
        onClose={() => setVisibleModalAsset(false)}
      />
    </>
  );
};

export default Creator;
