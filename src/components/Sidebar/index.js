import React, { useState } from "react";
import styles from "./Sidebar.module.sass";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import Icon from "../Icon";
import Theme from "../Theme";
import Dropdown from "./Dropdown";
import Help from "./Help";
import Image from "../Image";

const navigation = [
  {
    title: "Home",
    icon: "home",
    url: "/",
  },
  {
    title: "Assets",
    slug: "assets",
    icon: "diamond",
    add: true,
    dropdown: [
      {
        title: "Dashboard",
        url: "/assets/dashboard",
      },
      {
        title: "Drafts",
        url: "/assets/drafts",
        counter: "2",
        colorCounter: "#FFBC99",
      },
      {
        title: "Released",
        url: "/assets/released",
      },
      {
        title: "Comments",
        url: "/assets/comments",
      },
      {
        title: "Scheduled",
        url: "/assets/scheduled",
        counter: "8",
        colorCounter: "#B5E4CA",
      },
    ],
  },
  {
    title: "Users",
    slug: "users",
    icon: "profile-circle",
    dropdown: [
      {
        title: "Overview",
        url: "/users/overview",
      },
      {
        title: "User list",
        url: "/users/user-list",
      },
    ],
  },
  {
    title: "Shop",
    icon: "store",
    url: "/shop",
  },
  {
    title: "Income",
    slug: "income",
    icon: "pie-chart",
    dropdown: [
      {
        title: "Earning",
        url: "/income/earning",
      },
      {
        title: "Refunds",
        url: "/income/refunds",
      },
      {
        title: "Payouts",
        url: "/income/payouts",
      },
      {
        title: "Statements",
        url: "/income/statements",
      },
    ],
  },
  {
    title: "Analytics",
    icon: "promotion",
    url: "/analytics",
  },
];

const Sidebar = ({ className, onClose }) => {
  const [visibleHelp, setVisibleHelp] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        className={cn(styles.sidebar, className, { [styles.active]: visible })}
      >
        <button className={styles.close} onClick={onClose}>
          <Icon name="close" size="24" />
        </button>
        <Link className={styles.logo} to="/" onClick={onClose}>
          <Image
            className={styles.pic}
            src="/images/logo-light.svg"
            srcDark="/images/logo-dark.svg"
            alt="Core"
          />
        </Link>
        <div className={styles.menu}>
          {navigation.map((x, index) =>
            x.url ? (
              <NavLink
                className={styles.item}
                activeClassName={styles.active}
                to={x.url}
                key={index}
                exact
                onClick={onClose}
              >
                <Icon name={x.icon} size="24" />
                {x.title}
              </NavLink>
            ) : (
              <Dropdown
                className={styles.dropdown}
                visibleSidebar={visible}
                setValue={setVisible}
                key={index}
                item={x}
                onClose={onClose}
              />
            )
          )}
        </div>
        <button className={styles.toggle} onClick={() => setVisible(!visible)}>
          <Icon name="arrow-right" size="24" />
          <Icon name="close" size="24" />
        </button>
        <div className={styles.foot}>
          <button className={styles.link} onClick={() => setVisibleHelp(true)}>
            <Icon name="help" size="24" />
            Help & getting started
            <div className={styles.counter}>8</div>
          </button>
          <Theme className={styles.theme} visibleSidebar={visible} />
        </div>
      </div>
      <Help
        visible={visibleHelp}
        setVisible={setVisibleHelp}
        onClose={onClose}
      />
      <div
        className={cn(styles.overlay, { [styles.active]: visible })}
        onClick={() => setVisible(false)}
      ></div>
    </>
  );
};

export default Sidebar;
