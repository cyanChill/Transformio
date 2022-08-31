import styles from "../../../styles/ImageStack.module.css";
import ImageIcon from "../ImageIcon";

const ImageStack = () => {
  return (
    <div className={styles.stackContainer}>
      <ImageIcon />
      <ImageIcon />
      <ImageIcon />
    </div>
  );
};

export default ImageStack;
