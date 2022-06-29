import styles from '../../styles/HeaderPractice.module.css'
import Logo from '../../public/assets/faded_icon.png'
import Image from 'next/image'

const HeaderPractice = ({ title, description }) => {
    return ( <div className={styles.container}>
        <div className={styles.fadedLogo}>
            <Image 
                className={styles.img}
                src={Logo}
                alt='The Viney Agency Logo'
                layout='intrinsic'
            />
        <h1 className={styles.title}>{title}</h1>
        {description && <p>{description}</p>}
        </div>
    </div> );
}
 
export default HeaderPractice;