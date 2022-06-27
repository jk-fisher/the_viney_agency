import styles from '../../styles/PageHeader.module.css'
import Logo from '../../public/assets/favicon.png'
import Image from 'next/image'

const PageHeader = ({ title }) => {
    return ( <div className={styles.container}>
        <div className={styles.fadedLogo}>
            <Image 
                src={Logo}
                alt='The Viney Agency Logo'
                layout='intrinsic'
            />
        </div>
        <h1 className={styles.title}>{title}</h1>
    </div> );
}
 
export default PageHeader;