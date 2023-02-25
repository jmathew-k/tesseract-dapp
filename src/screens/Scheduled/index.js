import React, { useState } from "react";
import cn from "classnames";
import styles from "./Scheduled.module.sass";
import Card from "../../components/Card";
import Form from "../../components/Form";
import Icon from "../../components/Icon";
import Table from "../../components/Table";
import Asset from "../../components/Asset";
import Loader from "../../components/Loader";
import Panel from "./Panel";

// data
import { assets } from "../../mocks/assets";

const Scheduled = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <>
      <Card
        className={styles.card}
        classCardHead={styles.head}
        title="Assets"
        classTitle={cn("title-purple", styles.title)}
        head={
          <Form
            className={styles.form}
            value={search}
            setValue={setSearch}
            onSubmit={() => handleSubmit()}
            placeholder="Search Asset"
            type="text"
            name="search"
            icon="search"
          />
        }
      >
        <div className={styles.wrapper}>
          <Table items={assets} title="Scheduled for" />
        </div>
      </Card>
      <Panel />
    </>
  );
};

export default Scheduled;
