import Link from "next/link";
import styles from "../../styles/Footer.module.css"
import Image from "next/image"
import logo from "../../public/assets/favicon.png"

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
                            <Image src={logo} alt="The Viney Agency Logo" />
                        </a>
                </Link>
            </div>
            <ul className={styles.wrapper}>
                {contactInfo}

            </ul>
        </div>
     );
}
 
export default Footer;
