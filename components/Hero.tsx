import styles from "../styles/Hero.module.css";
import ImageStack from "./svgs/animated/ImageStack";

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroText}>
          <h1>Transformio</h1>
          <p>
            Convert your images & videos into more efficient formats such as{" "}
            <strong>webp</strong> and <strong>mp4</strong>.
          </p>
        </div>

        <div className={styles.animatedSVG}>
          <ImageStack />
        </div>
      </div>
    </section>
  );
};

export default Hero;
