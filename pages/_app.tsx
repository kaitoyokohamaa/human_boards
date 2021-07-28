import "./styles/tailwind.css";

import type { AppProps /*, AppContext */ } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      ></link>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
