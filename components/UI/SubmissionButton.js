import styles from '../../styles/SubmissionButton.module.css'
import RightArrowIcon from '../../components/UI/RightArrowIcon';

const SubmissionButton = ({ label }) => {
    return ( 
        <button className={styles.button}>
        {label}
        <RightArrowIcon className={styles.icon}  data-aos="fade-left"/>
    </button>
     );
}
 
export default SubmissionButton;