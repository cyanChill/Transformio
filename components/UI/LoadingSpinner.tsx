import React from "react";

import styles from "../../styles/LoadingSpinner.module.css";

interface LoadingSpinnerProps {
  size?: string;
  thickness?: string;
  fullWidth?: boolean;
}

interface styles {
  [x: string]: string | number;
}

const LoadingSpinner = ({
  size,
  thickness,
  fullWidth,
}: LoadingSpinnerProps) => {
  let additionalStyles: styles = {};
  if (size) additionalStyles["--size"] = size;
  if (thickness) additionalStyles["--thickness"] = thickness;

  if (fullWidth) {
    return (
      <div className={styles.loadingContainer}>
        <div
          className={`${styles.loading}`}
          style={additionalStyles as React.CSSProperties}
        />
      </div>
    );
  }

  return (
    <div
      className={styles.loading}
      style={additionalStyles as React.CSSProperties}
    />
  );
};

export default LoadingSpinner;
