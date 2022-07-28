import { useState, useEffect, useRef, Fragment } from "react"
import { motion, useScroll } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/assets/favicon.png"

import styles from "../../styles/MainNavigation.module.css"

const slideTransition = {
    y: {
        duration: 0.5,
        ease: "easeIn"
    }
}

const Backdrop = ({ onClose }) => {
    return <div className={styles.backdrop} onClick={onClose} />
}

const MainNavigation = ({ allPageData }) => {


    const [isOpen, setIsOpen] = useState(false); 
    const openMenu = () => setIsOpen(!isOpen);

    const prevScrollY = useRef(0);
    const { scrollY } = useScroll()
    const [ showNavigation, setShowNavigation ] = useState(true)

    const closeNavHandler = () => {
        setIsOpen(false);
    }   

    useEffect(() => {
        
        // console.log('scroll useeffect ran')
    return scrollY.onChange((latest) => {
        if (latest > 640 && latest > prevScrollY.current){
            // console.log('going down')
            setShowNavigation(false)
        }else if(prevScrollY.current > latest){
            // console.log('goingup')
            setShowNavigation(true)
        }
        // console.log("Page scroll: ", latest, scrollY)
        prevScrollY.current = latest
    })
    }, [scrollY])
    
    const variants = {
        show: {y: "0rem"},
        hide: {y: "-10rem"}
    }
    // const headers = allPageData.map((page) => {
    //     return <li className={styles.navitem} key={page.id}>
    //         <Link href={`/pages/${page.id}`}>
    //             <a classname={styles.navlink} onClick={() => setIsOpen(false)}>{page.title}</a>
    //         </Link>
    //     </li>
    // })
    // console.log('headers', headers)
    return ( <Fragment>

        <header className={styles.header}>
        <motion.nav 
            className={styles.navbar}
            transition={slideTransition}
            animate={showNavigation ? "show" : "hide"}
            variants={variants}>
            <div className={styles.navlogo}>
                <Link href="/">
                    <a className={styles.button}>
                        <Image src={logo} alt="The Viney Agency Logo" />
                    </a>
                </Link>
            </div>
          <ul className={isOpen === false ? 
                styles.navmenu : styles.navmenu +' '+styles.active}>
            <li className={styles.navitem}>
                <Link href="/">
                    <a className={styles.navlink} onClick={() => setIsOpen(false)}>Home</a>
                </Link>
            </li>
            <li className={styles.navitem} key={allPageData[0].id}>
                <Link href={`/${allPageData[0].id}`}>
                    <a className={styles.navlink} onClick={() => setIsOpen(false)}>{allPageData[0].title}</a>
                </Link>
            </li>
            <li className={styles.navitem}>
                <Link href="/authors">
                    <a className={styles.navlink} onClick={() => setIsOpen(false)}>Authors</a>
                </Link>
            </li>
            <li className={styles.navitem} key={allPageData[1].id}>
                <Link href={`/${allPageData[1].id}`}>
                    <a className={styles.navlink} onClick={() => setIsOpen(false)}>{allPageData[1].title}</a>
                </Link>
            </li>
            <li className={styles.navitem} key={allPageData[2].id}>
                <Link href={`/${allPageData[2].id}`}>
                    <a className={styles.navlink} onClick={() => setIsOpen(false)}>{allPageData[2].title}</a>
                </Link>
            </li>
            <li className={styles.navitem}>
                <Link href="/submissions">
                    <a className={styles.navlink} onClick={() => setIsOpen(false)}>Submissions</a>
                </Link>
            </li>
            <li className={styles.navitem}>
                <Link href="/contact">
                    <a className={styles.navlink} onClick={() => setIsOpen(false)}>Contact</a>
                </Link>
            </li>
            {/* {headers} */}
          </ul>
          <button className={isOpen === false ? 
                            styles.hamburger : styles.hamburger+' '+styles.active}
                            onClick={openMenu}
                            >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </motion.nav>
      </header>
      {isOpen && <Backdrop 
          className={styles.backdrop} 
          onClose={closeNavHandler} />} 
    </Fragment>
        
     );
}
 
export { MainNavigation as default };