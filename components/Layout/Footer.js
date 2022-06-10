import Link from "next/link";
import styles from "../../styles/Footer.module.css"

const Footer = () => {
    return ( 
        <div className={styles.footer}>
            <div className="left">
                <ul>
                    <li className={styles.item}>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/location">
                            <a>Location</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/reviews">
                            <a>Reviews</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="right">
                <div className={styles.logo}>
                    <Link href="/">
                        <a >Le<br />Petit Cottage</a>
                    </Link>
                </div>
                <p className={styles.copy}>Copyright &copy; 2020 - Le Petit Cottage.</p>
            </div>

        </div>
     );
}
 
export default Footer;
