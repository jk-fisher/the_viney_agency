import Image from 'next/image'
import styles from "../../styles/Card.module.css"
import SubmissionButton from './SubmissionButton';
const Card = ({ pg, title, positionTitle, content, image }) => {

    return ( <div className={styles.card}>
        <div >
            <Image 
                src={image.icon}
                alt={title}
                layout="responsive"
                className={styles.thumbnail}
            />
        </div>
        <div>
            <h3 className={styles.title}>{title}</h3>
            <hr className={styles.breakLine} />
            <h4 className={styles.positionTitle}>{positionTitle}</h4>
            <p className={styles.text}>
                {content}
            </p>
        {pg === "about" && 
        positionTitle === "Literary Agent" && 
        <SubmissionButton href="/submissions" label="Submissions"/>
        }
        </div>
    </div> );
}
 
export default Card;