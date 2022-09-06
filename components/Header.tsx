import Image from "next/image";

import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.imgContainer}>
          <Image
            src="/images/logo_outline.svg"
            alt=""
            width="128"
            height="128"
          />
        </div>
        <h1>Transformio</h1>
      </div>
    </header>
  );
};

export default Header;
