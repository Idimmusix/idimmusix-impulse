// import dynamic from "next/dynamic";
// import { Suspense } from "react";
// if (process.env.NODE_ENV === "development") {
//   import("@impulse/dev").then((impulse) => impulse.run());
// }
// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
  {
    process.env.NODE_ENV === "development" && (
      <script src="https://cdn.jsdelivr.net/npm/@impulse.dev/runtime@latest/inject.js"></script>
    );
  }
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
export default MyApp;
