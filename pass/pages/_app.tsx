import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-3.6.1.min.js"
        strategy={"beforeInteractive"}
      />
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"
        strategy={"beforeInteractive"}
      />

      <Component {...pageProps} />
    </>
  );
}
