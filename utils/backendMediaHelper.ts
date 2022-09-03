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
      .toFormat("mp4")
      // In order to output mp4 in stream: https://github.com/fluent-ffmpeg/node-fluent-ffmpeg/issues/346#issuecomment-67299526
      .outputOptions("-movflags frag_keyframe+empty_moov")
      // Return the combined buffer of converted video
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
