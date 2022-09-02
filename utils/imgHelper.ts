/* Checks whether the img size is <= the specified value */
export const fileSizeIsLEQ = (fileObj: File, sizeMB: number) => {
  return fileObj.size <= sizeMB * 1000000;
};

export const extractFileInfo = (fileObj: File) => {
  const rawName = fileObj.name;

  return {
    fileCtgy: fileObj.type.split("/")[0], // "image" | "video"
    fileExt: fileObj.type.split("/")[1],
    fileName: rawName.substring(0, rawName.lastIndexOf(".")) || rawName,
    fileSize: fileObj.size,
  };
};
