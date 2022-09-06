# Transformio

This is an application to transform files to more effiicent formats such as `webp` & `mp4` (in `h.264` or `h.265` encoding [depends on configurations]).

https://user-images.githubusercontent.com/83375816/188737102-cf3c00b8-d883-4093-b586-624c6b4de08c.mp4

# Installation & Setup

## Prerequisites:

You must have **ffmpeg** installed on your device. For info on how to install **ffmpeg**, follow go to [https://ffmpeg.org/download.html](https://ffmpeg.org/download.html).

## Environment Variables

These are generally optional.

| Variable Name | Value |
| ------------- | ----- |
| `DEBUG` | A comma-seperated list specifying which debug messages we want to show. Possible values are: `api-error`, `ffmpeg-progress`, and `ffmpeg-error`. |
| `DONT_USE_H264` | Determines whether we encode videos in `h.264` or `h.265`. If we set the variable to `"true"`, we'll encode using `h.265`, otherwise, we'll encode in `h.264`. **_(It's suggested to leave this empty as not all applications support h.265 encoded videos.)_** |
| `NEXT_PUBLIC_MAX_FILE_SIZE_MB` | This is a positive integer which limits the maximum size file input we can convert. |

## How to Run Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Some Notes on Hosting This Publically

- If we want the video converion to work, the server should have a decent amount of RAM.
  - For the free-tier of `Heroku` (~512 MB of RAM), it'll work for small file sizes (though **I wouldn't suggest hosting on Heroku** as if you try to convert large files, it'll give a `memory quota exceeded` error that **may lead Heroku to ban your account without warning**.)
  - For the free-tier of `Fly.io` (~256 MB of RAM), it won't work as it'll throw an error and forcibly kill the conversion task (for info on installing ffmpeg on a Fly.io app, refer [here](https://community.fly.io/t/how-can-i-use-ffmpeg-on-fly-io/4366)).
