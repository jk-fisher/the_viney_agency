import styles from '../../styles/SubmissionButton.module.css'
import RightArrowIcon from '../../components/UI/RightArrowIcon';
import { motion } from 'framer-motion'

const SubmissionButton = ({ label }) => {
    return ( 
        <motion.button className={styles.button} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        {label}
        <RightArrowIcon className={styles.icon}  data-aos="fade-left"/>
    </motion.button>
     );
}
 
export default SubmissionButton;