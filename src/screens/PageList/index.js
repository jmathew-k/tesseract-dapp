import React from "react";
import { Link } from "react-router-dom";
import styles from "./PageList.module.sass";

const PageList = () => {
  return (
    <div className={styles.page} style={{ fontSize: 16, fontWeight: 500 }}>
      <p style={{ marginBottom: 5 }}>
        <Link to="/">Home</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/assets/dashboard">Assets dashboard</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/assets/add">New asset</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/assets/drafts">Drafts</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/assets/released">Released</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/assets/comments">Comments</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/assets/scheduled">Scheduled</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/users/overview">Users</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/users/user-list">User list</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/analytics">Analyze</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/notification">Notification</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/settings">Settings</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/upgrade-to-pro">Upgrade to pro</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/message-center">Message center</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/explore-creators">Explore creators</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/affiliate-center">Affiliate center</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/sign-up">Sign up</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/sign-in">Sign in</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/income/earning">Earning</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/income/refunds">Refunds</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/income/payouts">Payouts</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/income/statements">Statements</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/shop">Shop</Link>
      </p>
    </div>
  );
};

export default PageList;
