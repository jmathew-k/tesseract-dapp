import React from "react";
import cn from "classnames";
import styles from "./AssetsDashboard.module.sass";
import TooltipGlodal from "../../components/TooltipGlodal";
import Overview from "./Overview";
import AssetActivity from "./AssetActivity";
import AssetViews from "./AssetViews";
import Assets from "./Assets";

const AssetsDashboard = () => {
  return (
    <>
      <div className={styles.section}>
        <Overview className={styles.card} />
        <div className={styles.row}>
          <div className={styles.col}>
            <AssetActivity />
          </div>
          <div className={styles.col}>
            <AssetViews />
          </div>
        </div>
        <Assets />
      </div>
      <TooltipGlodal />
    </>
  );
};

export default AssetsDashboard;
