import Link from "next/link";
import styles from "../../styles/Footer.module.css"
import Image from "next/image"
import logo from "../../public/assets/favicon.png"
import aaa from "../../public/assets/AAA.png"
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    const contacts =
    [
        {
            name: "Charlie Viney",
            address: "21, Dartmouth Park Avenue, London, NW5 1JL",
            email: "charlie@thevineyagency.com"
        },
        {
            name: "Amberley Lowis",
            address: "15, Lyne Crescent, London, E17 5HY",
            email: "amberley@thevineyagency.com"
        }
    ]
    const contactInfo = contacts.map((contact, index) => {
        return (
            <li className={styles.gridItem} key={index}>
                <span className={styles.bold}>{contact.name}</span>
                <span className={styles.text}>
                    The Viney Agency, <br/>
                    {contact.address}
                </span>
                <span className={styles.text}>
                    Email:&nbsp;{contact.email}
                </span>
            </li>
        )
    })
    return ( 
        
        <div className={styles.footer}>
            <div className={styles.logoWrapper}>
                <Link href="/">
                    <a className={styles.logo}>
                        <Image 
                            src={logo} 
                            alt="The Viney Agency Logo"
                            layout="responsive" />
                    </a>
                </Link>
            </div>
            <ul className={styles.wrapper}>
                {contactInfo}
                <div className={styles.imgWrapper}>
                    <Image 
                        className={styles.aaaLogo}
                        src={aaa} 
                        alt="Association of Author's Agents"
                        layout="responsive" />
                </div>
            <SocialIcon className={styles.social} url="https://twitter.com" bgColor="#CECECE" network="twitter" style={{ height: 35, width: 35 }}/>
            </ul>
            <div className={styles.subFooter}>
                <Link href='/privacy'>
                    <a className={`${styles.caps} ${styles.col_1}`}>Privacy notice</a>
                </Link>
                <div className={`${styles.col_2}`}>The Viney Agency, 64, New Cavendish Street, London W1G 8TB.<br/>Please note this is not an office address. </div>
                <div className={`${styles.caps} ${styles.col_3}`}>COPYRIGHT © 2022 THE VINEY AGENCY</div>
            </div>
        </div>
     );
}
 
export default Footer;
