import '../styles/globals.css'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />, pageProps);
}
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
    
//   )
// }

export default MyApp
