import { appWithTranslation } from "next-i18next";
import Head from 'next/head'
// import nextI18NextConfig from '../next-i18next.config.js';

import "../styles/globals.css";
import {useEffect} from "react";

function App({ Component, pageProps }) {
  const setVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    setVh();

    window.addEventListener('resize', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="height=device-height ,width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <Component {...pageProps} style={{
        width: '100%',
        height: '100%'
      }} />
    </>
  )
}

export default appWithTranslation(App /*, nextI18NextConfig*/);
