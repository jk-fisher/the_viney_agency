import styles from '../../styles/AboutHeader.module.css'
import Logo from '../../public/assets/faded_icon.png'
import Image from 'next/image'
import { Fragment } from 'react'

const AboutHeader = ({ title, description }) => {
    console.log(description)
    return ( <Fragment>
        <div className={`${styles.container} ${description ? styles.lgContainer : ''}`}>
            <div className={styles.wrapper}>
                <div className={styles.fadedLogo}>
                    <Image 
                        className={styles.img}
                        src={Logo}
                        alt='The Viney Agency Logo'
                        layout='intrinsic'
                    />
                <h1 className={styles.title}>{title}</h1>
                </div>
                <div className={styles.textBox}>
                    {description && <p className={styles.text}>{description}</p>}
                </div>

            </div>
        </div>
        </Fragment>
     );
}
 
export default AboutHeader;