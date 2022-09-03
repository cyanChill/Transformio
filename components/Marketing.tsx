import { MdDevices, MdCloudUpload, MdShield, MdSpeed } from "react-icons/md";

import styles from "../styles/Marketing.module.css";

const Marketing = () => {
  return (
    <section className={styles.wrapper}>
      <div className={`container ${styles.marketingContainer}`}>
        <div className={styles.feature}>
          <MdSpeed className={styles.featureIcon} />
          <p className={styles.featureName}>Fast and simple</p>
          <p className={styles.featureDescription}>
            Just select the media file (image or video) and we&apos;ll
            automatically convert it to <strong>.webp</strong> or{" "}
            <strong>.mp4</strong> (respectively) automatically.
          </p>
        </div>

        <div className={styles.feature}>
          <MdCloudUpload className={styles.featureIcon} />
          <p className={styles.featureName}>In the cloud</p>
          <p className={styles.featureDescription}>
            Your files are converted on the fly on our servers and returned to
            you to be downloaded.
          </p>
        </div>

        <div className={styles.feature}>
          <MdShield className={styles.featureIcon} />
          <p className={styles.featureName}>Security</p>
          <p className={styles.featureDescription}>
            Since this app is avaliable open source, you can run this
            application locally (just follow the instructions on the{" "}
            <a
              href="https://github.com/cyanChill/Transformio"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Github
            </a>
            ).
          </p>
        </div>

        <div className={styles.feature}>
          <MdDevices className={styles.featureIcon} />
          <p className={styles.featureName}>All Devices Supported</p>
          <p className={styles.featureDescription}>
            Transformio is browser-based and works on all platforms.
            There&apos;s no need to download any software (unless you care about
            security and want to run this application locally).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Marketing;
