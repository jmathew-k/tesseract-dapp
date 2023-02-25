import React, { useState } from "react";
import cn from "classnames";
import styles from "./Released.module.sass";
import Card from "../../components/Card";
import Form from "../../components/Form";
import Icon from "../../components/Icon";
import Market from "./Market";
import Asset from "../../components/Asset";
import Loader from "../../components/Loader";
import Panel from "./Panel";

// data
import { assets } from "../../mocks/assets";

const sorting = ["list", "grid"];

const Released = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleChange = (id) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter((x) => x !== id));
    } else {
      setSelectedFilters((selectedFilters) => [...selectedFilters, id]);
    }
  };

  return (
    <>
      <Card
        className={styles.card}
        classCardHead={styles.head}
        title="Assets"
        classTitle={cn("title-purple", styles.title)}
        head={
          <>
            <Form
              className={styles.form}
              value={search}
              setValue={setSearch}
              onSubmit={() => handleSubmit()}
              placeholder="Search asset"
              type="text"
              name="search"
              icon="search"
            />
            <div className={styles.sorting}>
              {sorting.map((x, index) => (
                <button
                  className={cn(styles.link, {
                    [styles.active]: index === activeIndex,
                  })}
                  onClick={() => setActiveIndex(index)}
                  key={index}
                >
                  <Icon name={x} size="24" />
                </button>
              ))}
            </div>
          </>
        }
      >
        <div className={styles.wrapper}>
          {activeIndex === 0 && <Market />}
          {activeIndex === 1 && (
            <>
              <div className={styles.list}>
                {assets.map((x, index) => (
                  <Asset
                    className={styles.asset}
                    value={selectedFilters.includes(x.id)}
                    onChange={() => handleChange(x.id)}
                    item={x}
                    key={index}
                  />
                ))}
              </div>
              <div className={styles.foot}>
                <button
                  className={cn("button-stroke button-small", styles.button)}
                >
                  <Loader className={styles.loader} />
                  <span>Load more</span>
                </button>
              </div>
            </>
          )}
        </div>
      </Card>
      <Panel />
    </>
  );
};

export default Released;
