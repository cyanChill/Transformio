import { useState, useEffect } from "react";

import styles from "../../styles/UploadForm.module.css";
import FileDragDrop from "../Form/FileDragDrop";

const UploadForm = () => {
  const readCurrFile = (val: File | null) => {
    console.log("File in File Input:", val);
  };

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <form>
          <FileDragDrop passCurrFile={readCurrFile} />
        </form>
      </div>
    </section>
  );
};

export default UploadForm;
