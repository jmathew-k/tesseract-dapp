import React, { useState } from "react";
import styles from "./Control.module.sass";
import cn from "classnames";
import Icon from "../../Icon";
import ModalAsset from "../../ModalAsset";

const Control = ({ className }) => {
  const [visibleModalAsset, setVisibleModalAsset] = useState(false);

  const actions = [
    {
      icon: "edit",
      action: () => console.log("edit"),
    },
    {
      icon: "trash",
      action: () => console.log("remove"),
    },
    {
      icon: "arrow-right",
      action: () => setVisibleModalAsset(true),
    },
  ];

  return (
    <>
      <div className={cn(styles.control, className)}>
        {actions.map((x, index) => (
          <button className={styles.button} key={index} onClick={x.action}>
            <Icon name={x.icon} size="20" />
          </button>
        ))}
      </div>
      <ModalAsset
        visible={visibleModalAsset}
        onClose={() => setVisibleModalAsset(false)}
      />
    </>
  );
};

export default Control;
