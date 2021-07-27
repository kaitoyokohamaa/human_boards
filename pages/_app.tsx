import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
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
