import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";import '../styles/globals.css'
function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({ 
        duration: 2000,
        easing: "ease-out-cubic",
        })
  }, []);

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />, pageProps);
}

export default MyApp
