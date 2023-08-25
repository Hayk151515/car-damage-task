import { useEvent, useStore } from "effector-react";
import * as model from "./model";
import { useEffect } from "react";
import { IPluginOptions } from "../../App";
import { DotComponent } from "../../components/dotComponent";
import styles from "./home.module.scss";

import CarImage from "../../assets/car.webp";

const POSITIONS: { [key: string]: number } = {
  A: 4,
  B: 5,
  C: 4,
};

const categories = Object.keys(POSITIONS).map((key) =>
  Array.from({ length: POSITIONS[key] }, (_, index) => `${key}${index + 1}`)
);

interface IProps {
  options: IPluginOptions;
}

export const Home: React.FC<IProps> = ({ options }) => {
  const positions = useStore(model.$positions);
  const handlePageMount = useEvent(model.pageMounted);
  const handleTogglePosition = useEvent(model.togglePosition);

  useEffect(() => {
    const { onPositionChange } = options;
    if (!onPositionChange) {
      return;
    }
    onPositionChange(positions);
  }, [options, positions]);

  useEffect(() => {
    const { onInit, initializedOptions = [] } = options;
    onInit && onInit();
    handlePageMount(initializedOptions);
  }, [handlePageMount, options]);

  return (
    <div className={styles.container}>
      <img src={CarImage} alt="" />
      <div className={styles.positions}>
        {categories.map((category, index) => (
          <div key={index} className={styles.category}>
            {category.map((label) => (
              <div
                className={styles.overlayItem}
                key={label}
                onClick={() => handleTogglePosition(label)}
              >
                <DotComponent filled={positions.includes(label)} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
