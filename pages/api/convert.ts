import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import sharp from "sharp";
import Debug from "debug";
const errorDebug = Debug("api-error");

import { fileSizeIsLEQ } from "../../utils/imgHelper";
import { convertVideo } from "../../utils/backendMediaHelper";

const maxFileSizeMB = +`${process.env.NEXT_PUBLIC_MAX_FILE_SIZE_MB}`;

export const config = {
  api: {
    bodyParser: false, // Don't allow body parsing; accept data as stream
    responseLimit: false, // Allow sending responses > 4 MB
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      await ConvertFile(req, res);
      return;

    default:
      res.status(405).json({
        message: `${req.method?.toUpperCase()} method is not supported.`,
      });
  }
}

interface formDataResults {
  err?: any;
  fields?: formidable.Fields;
  files?: formidable.Files;
}

const ConvertFile = async (req: NextApiRequest, res: NextApiResponse) => {
  // Extract info from formdata
  const data: formDataResults = await new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) reject({ err });
      resolve({ err, fields, files });
    });
  });

  const inputFile = data.files?.mediaFile;
  if (!inputFile) {
    res.status(404).json({ message: "No file recieved." });
    return;
  }

  const mediaFile = Array.isArray(inputFile) ? inputFile[0] : inputFile;
  if (!fileSizeIsLEQ(mediaFile, maxFileSizeMB)) {
    res.status(406).json({ message: `File size is > ${maxFileSizeMB} MB.` });
    return;
  }
  // We know mediaFile should exist & have a mimetype (TypeScript says only
  // type "File" has it while formidable.File doesn't)
  // @ts-ignore
  const fileType = mediaFile.mimetype.split("/")[0];

  try {
    let fileBuffer;

    switch (fileType) {
      case "image":
        fileBuffer = await sharp(mediaFile.filepath).webp().toBuffer();
        res.setHeader("Content-Type", "image/webp");
        break;

      case "video":
        fileBuffer = await convertVideo(mediaFile);
        res.setHeader("Content-Type", "video/mp4");
        break;

      default:
        res.status(404).json({ message: "Invalid file type." });
        return;
    }
    return res.status(200).send(fileBuffer);
  } catch (err) {
    errorDebug(err);
    res.status(500).json({ message: "Failed to convert file." });
  }
};
