import React, { useState } from "react";
import cn from "classnames";
import styles from "./PopularAssets.module.sass";
import { Link } from "react-router-dom";
import Card from "../Card";
import ModalAsset from "../ModalAsset";

const assets = [
  {
    title: "Astronaut Galactic Kit v2",
    price: "Ξ0.38",
    active: true,
    image: "/images/content/astronaut.png",
    image2x: "/images/content/astronaut.png",
  },
  {
    title: "Power-up Space Cactus",
    price: "Ξ0.01",
    active: false,
    image: "/images/content/powerup-plant.png",
    image2x: "/images/content/powerup-plant.png",
  },
  {
    title: " Bot Disruptor Ally",
    price: "Ξ1.54",
    active: true,
    image: "/images/content/robot.png",
    image2x: "/images/content/robot.png",
  },
  {
    title: "Recovery Potion",
    price: "$Ξ0.24",
    active: true,
    image: "/images/content/potion.png",
    image2x: "/images/content/potion.png",
  },
  {
    title: "Crypter - NFT UI kit",
    price: "$2,453.80",
    active: true,
    image: "/images/content/asset-pic-5.jpg",
    image2x: "/images/content/asset-pic-5@2x.jpg",
  },
  {
    title: "Bento Matte 3D illustration 1.0",
    price: "$105.60",
    active: false,
    image: "/images/content/asset-pic-2.jpg",
    image2x: "/images/content/asset-pic-2@2x.jpg",
  },
  {
    title: "Fleet - travel shopping kit",
    price: "$648.60",
    active: true,
    image: "/images/content/asset-pic-3.jpg",
    image2x: "/images/content/asset-pic-3@2x.jpg",
  },
  {
    title: "Fleet - travel shopping kit",
    price: "$648.60",
    active: true,
    image: "/images/content/asset-pic-4.jpg",
    image2x: "/images/content/asset-pic-4@2x.jpg",
  },
];

const PopularAssets = ({ className, views }) => {
  const [visibleModalAsset, setVisibleModalAsset] = useState(false);

  return (
    <>
      <Card
        className={cn(styles.card, className)}
        title="Trending Assets"
        classTitle="title-blue"
      >
        <div className={styles.popular}>
          <div className={styles.head}>
            <div className={styles.stage}>Item</div>
            <div className={styles.stage}>Revenue</div>
          </div>
          <div className={styles.list}>
            {assets.map(
              (x, index) =>
                views > index && (
                  <div
                    className={styles.item}
                    key={index}
                    onClick={() => setVisibleModalAsset(true)}
                  >
                    <div className={styles.preview}>
                      <img
                        srcSet={`${x.image2x} 2x`}
                        src={x.image}
                        alt="Asset"
                      />
                    </div>
                    <div className={styles.title}>{x.title}</div>
                    <div className={styles.details}>
                      <div className={styles.price}>{x.price}</div>
                      {x.active ? (
                        <div className={cn("status-green", styles.status)}>
                          Active
                        </div>
                      ) : (
                        <div className={cn("status-red", styles.status)}>
                          Deactive
                        </div>
                      )}
                    </div>
                  </div>
                )
            )}
          </div>
          <Link
            className={cn("button-stroke", styles.button)}
            to="/assets/dashboard"
          >
            All Assets
          </Link>
        </div>
      </Card>
      <ModalAsset
        visible={visibleModalAsset}
        onClose={() => setVisibleModalAsset(false)}
      />
    </>
  );
};

export default PopularAssets;
