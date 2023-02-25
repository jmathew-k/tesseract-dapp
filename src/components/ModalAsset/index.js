import React, { useCallback, useEffect } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import styles from "./ModalAsset.module.sass";
import Icon from "../Icon";
import Asset from "./Asset";

const ModalAsset = ({ visible, onClose }) => {
  const escFunction = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  useEffect(() => {
    if (visible) {
      const target = document.querySelector("#modal-asset");
      disableBodyScroll(target);
    } else {
      clearAllBodyScrollLocks();
    }
  }, [visible]);

  return createPortal(
    visible && (
      <div id="modal-asset" className={styles.modal}>
        <div className={styles.control}>
          <Link
            className={cn("button-white", styles.button)}
            to="/assets/add"
          >
            Edit asset
          </Link>
          <button className={styles.close} onClick={onClose}>
            <Icon name="close" size="20" />
          </button>
        </div>
        <div className={styles.outer}>
          <Asset />
        </div>
      </div>
    ),
    document.body
  );
};

export default ModalAsset;
