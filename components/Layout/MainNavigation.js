import { useState } from "react";
import Link from "next/link";

import styles from "../../styles/MainNavigation.module.css"

const MainNavigation = () => {

    const [isOpen, setIsOpen] = useState(false); 
    const openMenu = () => setIsOpen(!isOpen);

    return ( 
        <header className={styles.header}>
        <nav className={styles.navbar}>
            <Link href="/">
                <a className={styles.navlogo}>Le<br />Petit Cottage</a>
            </Link>
          <ul className={isOpen === false ? 
                styles.navmenu : styles.navmenu +' '+styles.active}>
            <li className={styles.navitem}>
                <Link href="/">
                    <a className={styles.navlink}>Home</a>
                </Link>
            </li>
            <li className={styles.navitem}>
                The Cottage
                {/* <Link href="/property">
                    <a className={styles.navlink}>The Cottage</a>
                </Link> */}
            </li>
            <li className={styles.navitem}>
                <Link href="/bookings">
                    <a className={styles.navlink} onClick={() => setIsOpen(false)}>Booking</a>
                    
                </Link>
            </li>
            <li className={styles.navitem}>
                Location
                {/* <Link href="/location">
                    <a className={styles.navlink}>Location</a>
                    
                </Link> */}
            </li>
            <li className={styles.navitem}>
                Local Area
                {/* <Link href="/local_area">
                    <a className={styles.navlink}>Local Area</a>
                    
                </Link> */}
            </li>
            <li className={styles.navitem}>
                Gallery
                <Link href="/gallery">
                    <a className={styles.navlink} onClick={() => setIsOpen(false)}>Gallery</a>
                    
                </Link>
            </li>
            <li className={styles.navitem}>
                Contact
                {/* <Link href="/contact">
                    <a className={styles.navlink}>Contact</a>
                    
                </Link> */}
            </li>
          </ul>
          <button className={isOpen === false ? 
                            styles.hamburger : styles.hamburger+' '+styles.active}
                            onClick={openMenu}
                            >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
        
     );
}
 
export default MainNavigation;