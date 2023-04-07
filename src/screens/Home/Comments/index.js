import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Comments.module.sass";
import Card from "../../../components/Card";
import Icon from "../../../components/Icon";
import Favorite from "../../../components/Favorite";

const comments = [
  {
    title: "0x36463..",
    login: "traderx.eth",
    time: "1h",
    content: "On <strong>Lego Adventures – Game</strong>",
    comment: 'Great work <span role="img" aria-label="smile">😊</span>',
    avatar: "/images/content/traderx.png",
  },
  {
    title: "0x68464...",
    login: "crypton.eth",
    time: "8h",
    content: "On <strong>Lego Adventures – Game</strong>",
    comment: "I need bug fix for level2 !",
    avatar: "/images/content/cryptron.png",
  },
  {
    title: "0x47781..",
    login: "blockhunter.eth",
    time: "1h",
    content: "On <strong>Lego Adventures – Game</strong>",
    comment: "How can I get the v3 asset?",
    avatar: "/images/content/blockhunter.png",
  },
];

const Comments = ({ className }) => {
  return (
    <Card
      className={cn(styles.card, className)}
      title="Wallet Notifications"
      classTitle="title-yellow"
    >
      <div className={styles.comments}>
        <div className={styles.list}>
          {comments.map((x, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.avatar}>
                <img src={x.avatar} alt="Avatar" />
              </div>
              <div className={styles.details}>
                <div className={styles.line}>
                  <div className={styles.user}>
                    <span className={styles.title}>{x.title}</span>{" "}
                    <span className={styles.login}>{x.login}</span>
                  </div>
                  <div className={styles.time}>{x.time}</div>
                </div>
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: x.content }}
                ></div>
                <div
                  className={styles.comment}
                  dangerouslySetInnerHTML={{ __html: x.comment }}
                ></div>
                <div className={styles.control}>
                  <Link className={styles.link} to="/message-center">
                    <Icon name="message" size="20" />
                  </Link>
                  <Favorite className={cn(styles.favorite, styles.link)} />
                  <Link className={styles.link} to="/assets/comments">
                    <Icon name="link" size="20" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
          className={cn("button-stroke", styles.button)}
          to="/assets/comments"
        >
          View all
        </Link>
      </div>
    </Card>
  );
};

export default Comments;
