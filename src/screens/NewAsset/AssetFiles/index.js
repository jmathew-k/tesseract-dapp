import React, { useState } from "react";
import cn from "classnames";
import styles from "./AssetFiles.module.sass";
import Card from "../../../components/Card";
import File from "../../../components/File";

const AssetFiles = ({ className }) => {
  return (
    <Card
      className={cn(styles.card, className)}
      title="Asset files"
      classTitle="title-blue"
    >
      <div className={styles.files}>
        <File
          className={styles.field}
          title="Click or drop image"
          label="Content"
          tooltip="Maximum 100 characters. No HTML or emoji allowed"
        />
        <File
          className={styles.field}
          title="Click or drop image"
          label="Fonts"
          tooltip="Maximum 100 characters. No HTML or emoji allowed"
        />
      </div>
    </Card>
  );
};

export default AssetFiles;
