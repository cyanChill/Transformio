import styles from "../styles/Hero.module.css";
import ImageStack from "./svgs/animated/ImageStack";

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <div className={`container ${styles.heroContainer}`}>
        <p className={styles.heroText}>
          Convert your images & videos into more efficient formats such as{" "}
          <strong className="txt-gradient">webp</strong> and{" "}
          <strong className="txt-gradient">mp4</strong>.
        </p>

        <div className={styles.animatedSVG}>
          <ImageStack />
        </div>
      </div>
    </section>
  );
};

export default Hero;
