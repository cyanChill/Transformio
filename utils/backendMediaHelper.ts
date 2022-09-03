import { path as ffmpegPath } from "@ffmpeg-installer/ffmpeg";
import ffmpeg from "fluent-ffmpeg";
import formidable from "formidable";
import Debug from "debug";
const progressDebug = Debug("ffmpeg-progress");
const errorDebug = Debug("ffmpeg-error");

ffmpeg.setFfmpegPath(ffmpegPath);

export const convertVideo = (fileObj: formidable.File) => {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];

    const cmd = ffmpeg(fileObj.filepath)
      .videoCodec("libx265")
      .toFormat("matroska") // Output as .mkv format
      .on("end", () => resolve(Buffer.concat(chunks)))
      .on("progress", (progress) => progressDebug(progress))
      .on("error", (err, stdout, stderr) => {
        errorDebug(stderr);
        reject(err);
      });

    // Ref: https://github.com/fluent-ffmpeg/node-fluent-ffmpeg#pipestream-options-pipe-the-output-to-a-writable-stream
    const ffstream = cmd.pipe();
    ffstream.on("data", (chunk) => chunks.push(chunk));
  });
};
