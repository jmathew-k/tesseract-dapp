import React, { useState } from "react";
import cn from "classnames";
import styles from "./PurchaseHistory.module.sass";
import Loader from "../../../../components/Loader";
import Tooltip from "../../../../components/Tooltip";
import TooltipGlodal from "../../../../components/TooltipGlodal";
import ModalAsset from "../../../../components/ModalAsset";

import { history } from "../../../../mocks/history";

const PurchaseHistory = ({ className }) => {
  const [visibleModalAsset, setVisibleModalAsset] = useState(false);

  return (
    <>
      <div className={cn(styles.history, className)}>
        <div className={styles.label}>
          Purchase history{" "}
          <Tooltip
            className={styles.tooltip}
            title="Maximum 100 characters. No HTML or emoji allowed"
            icon="info"
            place="right"
          />
        </div>
        <div className={styles.inner}>
          <div className={styles.table}>
            <div className={styles.row}>
              <div className={styles.col}>Asset</div>
              <div className={styles.col}>Price</div>
              <div className={styles.col}>Date</div>
            </div>
            {history.map((x, index) => (
              <div
                className={styles.row}
                key={index}
                onClick={() => setVisibleModalAsset(true)}
              >
                <div className={styles.col}>
                  <div className={styles.item}>
                    <div className={styles.preview}>
                      <img
                        srcSet={`${x.image2x} 2x`}
                        src={x.image}
                        alt="Asset"
                      />
                    </div>
                    <div className={styles.details}>
                      <div className={styles.asset}>{x.asset}</div>
                      <div className={styles.link}>{x.link}</div>
                      <div className={styles.price}>${x.price}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.price}>${x.price}</div>
                </div>
                <div className={styles.col}>
                  <div className={styles.date}>{x.date}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.foot}>
            <button className={cn("button-stroke button-small", styles.button)}>
              <Loader className={styles.loader} />
              <span>Load more</span>
            </button>
          </div>
        </div>
      </div>
      <TooltipGlodal />
      <ModalAsset
        visible={visibleModalAsset}
        onClose={() => setVisibleModalAsset(false)}
      />
    </>
  );
};

export default PurchaseHistory;
