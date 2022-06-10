import Footer from "./Footer";
import MainNavigation from "./MainNavigation";
import styles from "../../styles/Layout.module.css";


const Layout = ({children}) => {
  return ( 
      <div className={styles.container}>
        <MainNavigation />  
          <main className={styles.main}>{children}</main>
        <Footer />
      </div>
   );
}
 
export default Layout;
