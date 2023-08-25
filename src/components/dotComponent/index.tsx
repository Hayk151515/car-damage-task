import styles from "./styles.module.scss";
import cx from "classnames";

interface IProps {
  shape?: "circle";
  color?: string;
  filled?: boolean;
}

export const DotComponent: React.FC<IProps> = ({
  shape = "circle",
  color = "#ff6f42",
  filled = true,
}) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={cx(styles[shape], {
        [styles.filled]: filled,
      })}
    />
  );
};
