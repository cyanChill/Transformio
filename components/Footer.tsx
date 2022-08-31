import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={`container ${styles.footerContainer}`}>
        © Copyright {new Date().getFullYear()}, Anthony Liang
      </div>
    </footer>
  );
};

export default Footer;
