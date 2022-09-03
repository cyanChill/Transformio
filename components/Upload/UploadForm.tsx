import React, { useState, useRef } from "react";
import toast from "react-hot-toast";

import styles from "../../styles/UploadForm.module.css";
import { fileSizeIsLEQ, extractFileInfo } from "../../utils/imgHelper";
import { asyncTimeout } from "../../utils/asyncTimeout";
import FileDragDrop from "../Form/FileDragDrop";
import LoadingSpinner from "../UI/LoadingSpinner";

type convertStates = "none" | "in-progress" | "done";

const maxFileSizeMB = +`${process.env.NEXT_PUBLIC_MAX_FILE_SIZE_MB}`;

const UploadForm = () => {
  const downloadRef = useRef<HTMLAnchorElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [currFile, setCurrFile] = useState<File | null>(null);
  const [convertState, setConvertState] = useState<convertStates>("none");

  const readCurrFile = (val: File | null) => setCurrFile(val);

  const sendConvertRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    const downloadComp = downloadRef.current;
    const formComp = formRef.current;

    if (!formComp || !downloadComp) {
      // Somehow, the user submitted the form before the refs were applied
      toast.error("Something is wrong with the app.");
    } else if (!currFile) {
      toast.error("You must submit a file to convert.");
    } else {
      const { fileCtgy, fileName } = extractFileInfo(currFile);

      if (!fileSizeIsLEQ(currFile, maxFileSizeMB)) {
        toast.error(`File is not < ${maxFileSizeMB} MB in size.`);
        return;
      }

      // Customize animation duration
      const animDurationMs = 500;
      // Apply "closing" animation
      formComp.style.setProperty("--animDuration", `${animDurationMs}ms`);
      formComp.classList.add(styles.closeAnim);
      // Add artificial delay to our code (to let animation finish)
      await asyncTimeout(animDurationMs);
      // Hide the element on the DOM
      formComp.classList.remove(styles.closeAnim);
      formComp.classList.add(styles.hide);

      // Send convert request
      setConvertState("in-progress");
      const formData = new FormData();
      const fileBlob = new Blob([currFile], { type: currFile.type });
      formData.append("mediaFile", fileBlob);

      const res = await fetch("/api/convert", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        // Get buffer from backend
        const dataBuffer = await res.arrayBuffer();
        // File Download logic:
        const blob = new Blob([dataBuffer], {
          type: `${fileCtgy}/${fileCtgy === "image" ? "webp" : "mp4"}`,
        });
        // Update the download component values for our new converted media
        downloadComp.href = window.URL.createObjectURL(blob);
        downloadComp.download = `${fileName}.${
          fileCtgy === "image" ? "webp" : "mp4"
        }`;
        downloadComp.click();
        toast.success("Successfully converted file.");
        // Conversion request done
        setConvertState("done");
      } else {
        const data = await res.json();
        toast.error(data.message);
        formComp.classList.remove(styles.hide);
        setConvertState("none");
      }
    }
  };

  const resetState = async () => {
    setCurrFile(null);
    setConvertState("none");

    const downloadComp = downloadRef.current;
    const formComp = formRef.current;

    if (downloadComp && formComp) {
      downloadComp.href = "#";
      downloadComp.download = "#";

      formComp.classList.remove(styles.hide);
      // Customize animation duration
      const animDurationMs = 500;
      formComp.style.setProperty("--animDuration", `${animDurationMs}ms`);
      formComp.classList.add(styles.openAnim);
      // Add artificial delay to our code (to let animation finish)
      await asyncTimeout(animDurationMs);
      formComp.classList.remove(styles.openAnim);
    }
  };

  return (
    <section className={styles.wrapper}>
      {/* Upload Form */}
      <div className="container">
        <form
          onSubmit={sendConvertRequest}
          className={styles.uploadForm}
          ref={formRef}
        >
          <FileDragDrop passCurrFile={readCurrFile} value={currFile} />

          <button
            type="submit"
            className={`${styles.btn} && ${!currFile && styles.hide}`}
          >
            Convert
          </button>
        </form>

        {/* Converting Loading */}
        <div
          className={`${styles.convertingIndicator} ${
            convertState !== "in-progress" && styles.hide
          }`}
        >
          <LoadingSpinner />
          <p>Your file is currently being converted...</p>
        </div>

        {/* Converting Completed */}
        <button
          className={`${styles.btn} ${convertState !== "done" && styles.hide}`}
          onClick={resetState}
        >
          Convert Another File?
        </button>

        {/* Hidden download field */}
        <a
          href="#"
          download="#"
          ref={downloadRef}
          style={{ visibility: "hidden" }}
        />
      </div>
    </section>
  );
};

export default UploadForm;
