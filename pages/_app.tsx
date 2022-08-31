import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{ style: { width: "max-content", maxWidth: "45rem" } }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
