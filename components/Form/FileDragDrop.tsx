import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { BsDownload } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

import styles from "../../styles/FileDragDrop.module.css";

interface FileDragDropProps {
  name?: string;
  passCurrFile: (val: File | null) => void;
}

const FileDragDrop = ({
  name = "fileInput",
  passCurrFile,
}: FileDragDropProps) => {
  const dropContainerRef = useRef<HTMLInputElement>(null);

  const [mediaFile, setMediaFile] = useState<File | null>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.target;
    if (!target || !target.files || target.files.length === 0) return;
    setMediaFile(target.files[0]);
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setMediaFile(e.dataTransfer.files[0]);
  };

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevents file from being opened on drag
    if (!dropContainerRef.current) return;
    const dragContainer = dropContainerRef.current as HTMLDivElement;
    dragContainer.classList.add(styles.dragHover);
  };

  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!dropContainerRef.current) return;
    const dragContainer = dropContainerRef.current as HTMLDivElement;
    dragContainer.classList.remove(styles.dragHover);
  };

  const removeFile = () => setMediaFile(null);

  useEffect(() => {
    if (mediaFile && mediaFile.type) {
      const [fileCtgy, fileExt] = mediaFile.type.split("/");
      if (!fileCtgy || !fileExt) {
        // Unknown file type property
        setMediaFile(null);
        toast.error("Unknown media type.");
      } else if (fileCtgy !== "image" && fileCtgy !== "video") {
        // File isn't an image or video
        setMediaFile(null);
        toast.error("Media isn't an image or video.");
      } else if (fileExt === "webp" || fileExt === "mp4") {
        // Reject webp & mp4 files as they're already in efficient formats
        setMediaFile(null);
        toast.error("Media is already in an efficient format.");
      } else {
        passCurrFile(mediaFile);
      }
    } else {
      passCurrFile(null);
    }
  }, [mediaFile]); // eslint-disable-line

  return (
    <>
      <div
        className={`${styles.dragContainer} ${mediaFile && styles.hidden}`}
        onDrop={dropHandler}
        onDragOver={dragOverHandler}
        onDragLeave={dragEndHandler}
        onDragEnd={dragEndHandler}
        ref={dropContainerRef}
      >
        <BsDownload className={styles.downloadIcon} />
        <label htmlFor="file" className={styles.inputLabel}>
          <strong>Choose a file</strong>
          <span className="box__dragndrop"> or drag it here</span>.
        </label>
        <input
          className={styles.hidden}
          id="file"
          name={name}
          type="file"
          accept="image/*,video/*"
          onClick={(e) => ((e.target as HTMLInputElement).value = "")}
          onChange={changeHandler}
        />
      </div>

      <div className={`${styles.selFile} ${!mediaFile && styles.hidden}`}>
        <p className="ellipse">{mediaFile?.name}</p>
        <IoClose className={styles.icon} onClick={removeFile} />
      </div>
    </>
  );
};

export default FileDragDrop;
