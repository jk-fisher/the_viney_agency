import styles from '../../styles/Guidelines.module.css';
import SubmissionButton from '../UI/SubmissionButton';

const Guidelines = () => {
    return ( <div className={styles.container}>
        <h2 className={styles.header}>General Guidelines</h2>
        <p className={styles.text}>
            The Viney Agency represents the needs of its writers across all media, and when we take on new clients we always ensure that there is a good fit between their requirements and our ambitions. We do not accept play or film scripts.
            <br/><br/>
            When you email the agency, please keep the content relevant to your writing. Please ensure that you inform us of any previously published work and, specifically for non-fiction, what qualifies you to write about the subject. Please attach a synopsis or summary of your fiction or non-fiction work which should be no longer than one page, together with the first twenty pages of consecutively written sample material. The manuscript/proposal and synopsis should be in Word format and 1.5 or double spaced.
            <br/><br/>
            We are always looking for high quality non-fiction, adult and children’s fiction. Non-fiction proposals can be sent to us on outline together with sample material, but for all adult and children’s fiction we require that manuscripts have been completed before submission.
            <br/><br/>
            Please let us know if your proposal or manuscript is on submission to other agencies.
            <br/><br/>
            The Viney Agency is a member of the Association of Author’s Agents (AAA) and abides by its code of conduct.
        </p>
        <SubmissionButton label="Email your submission" />
    </div>
     );
}
 
export default Guidelines;