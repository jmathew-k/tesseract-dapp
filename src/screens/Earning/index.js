import React from "react";
import cn from "classnames";
import styles from "./Earning.module.sass";
import TooltipGlodal from "../../components/TooltipGlodal";
import Overview from "./Overview";
import AssetSales from "./AssetSales";
import TopCountries from "./TopCountries";
import Table from "./Table";

const Earning = () => {
  return (
    <>
      <div className={styles.section}>
        <Overview className={styles.card} />
        <div className={styles.row}>
          <div className={styles.col}>
            <AssetSales />
          </div>
          <div className={styles.col}>
            <TopCountries />
          </div>
        </div>
        <Table />
      </div>
      <TooltipGlodal />
    </>
  );
};

export default Earning;
