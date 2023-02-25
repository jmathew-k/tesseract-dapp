import React from "react";
import cn from "classnames";
import styles from "./Analytics.module.sass";
import TooltipGlodal from "../../components/TooltipGlodal";
import Overview from "./Overview";
import RecentPost from "./RecentPost";

const Analytics = () => {
  return (
    <>
      <div className={styles.section}>
        <Overview className={styles.card} />
        <RecentPost />
      </div>
      <TooltipGlodal />
    </>
  );
};

export default Analytics;
