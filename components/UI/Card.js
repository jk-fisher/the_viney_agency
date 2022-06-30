import Image from 'next/image'
import styles from "../../styles/Card.module.css"

const Card = ({ title, subTitle, content, image }) => {
    return ( <div className={styles.card}>
        <Image 
            src={image}
            alt="Photograph of Amberley Lowis"
            layout="responsive"
            className={styles.thumbnail}
        />
        <div>
            <h3 className={styles.title}>{title}</h3>
            <hr className={styles.breakLine} />
            <h4 className={styles.subTitle}>{subTitle}</h4>
            <p className={styles.text}>
                {content}
            </p>

        </div>
    </div> );
}
 
export default Card;