import React, { useState } from "react";
import cn from "classnames";
import styles from "./Overview.module.sass";
import Item from "./Item";
import Card from "../../../components/Card";
import Dropdown from "../../../components/Dropdown";
import Users from "../../../components/Users";
import Chart from "./Chart";

const intervals = ["All","30d", "7d", "1d"];

const nav = [
  {
    title: "Assets",
    counter: "516",
    icon: "shopping-bag",
    color: "#B1E5FC",
    value: -37.8,
  },
  {
    title: "Transactions",
    counter: "2k",
    icon: "activity",
    color: "#CABDFF",
    value: 37.8,
  },
];

const Overview = ({ className }) => {
  const [sorting, setSorting] = useState(intervals[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Card
      className={cn(styles.card, className)}
      title="Overview"
      classTitle="title-red"
      head={
        <Dropdown
          className={styles.dropdown}
          classDropdownHead={styles.dropdownHead}
          value={sorting}
          setValue={setSorting}
          options={intervals}
          small
        />
      }
    >
      <div className={styles.overview}>
        <div className={styles.nav}>
          {nav.map((x, index) => (
            <Item
              className={cn(styles.item, {
                [styles.active]: index === activeIndex,
              })}
              key={index}
              onActive={() => setActiveIndex(index)}
              item={x}
            />
          ))}
        </div>
        <div className={styles.body}>
          {activeIndex === 0 && <Users />}
          {activeIndex === 1 && <Chart />}
        </div>
      </div>
    </Card>
  );
};

export default Overview;
