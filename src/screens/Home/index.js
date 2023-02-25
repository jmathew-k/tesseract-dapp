import React from "react";
import cn from "classnames";
import styles from "./Home.module.sass";
import TooltipGlodal from "../../components/TooltipGlodal";
import Overview from "./Overview";
import PopularAssets from "../../components/PopularAssets";
import Comments from "./Comments";
import RefundRequests from "../../components/RefundRequests";
import ProTips from "./ProTips";
import MoreUsers from "./MoreUsers";
import AssetViews from "./AssetViews";

const Home = () => {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.col}>
          <Overview className={styles.card} />
          <AssetViews className={styles.card} />
          <ProTips className={styles.card} />
          <MoreUsers />
        </div>
        <div className={styles.col}>
          <PopularAssets className={styles.card} views="4" />
          <Comments className={styles.card} />
          <RefundRequests title="Refund requests" classTitle="title-red" />
        </div>
      </div>
      <TooltipGlodal />
    </>
  );
};

export default Home;
