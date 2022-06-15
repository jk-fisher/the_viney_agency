import Footer from "./Footer";
import MainNavigation from "./MainNavigation";
import styles from "../../styles/Layout.module.css";

export const Layout = ({children, allPageData }) => {
  console.log('layout', allPageData)
  return ( 
      <div className={styles.container}>
        <MainNavigation allPageData={allPageData}/>  
          <main className={styles.main}>{children}</main>
        <Footer />
      </div>
   );
}
 
export const getLayout = (page, { allPageData }) => <Layout allPageData={allPageData}>{page}</Layout>
