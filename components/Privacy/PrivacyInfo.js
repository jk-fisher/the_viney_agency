import styles from '../../styles/Privacy.module.css'


const PrivacyInfo = () => {
    return ( <div className={styles.container}>
        <ol start="1">
            <li >
                <strong>Introduction</strong>
            </li>
        </ol>
        <p>
            1.&nbsp;&nbsp;&nbsp;This privacy notice sets out the ways in which we, The Viney Agency collect and use your personal
            data (your personal information) in connection with our business. It also explains what rights you
            have to access or change your personal data.<br />
            Our website is not intended for children. We do not knowingly collect or maintain the personal
            information of children under the age of 18. If you are under the age of 13, please do not access our
            website at any time or in any manner. <br />
            We will take appropriate steps to delete the personal information of persons under the age of 18
            which we may inadvertently collect. 
        </p>
        <ol start="2">
            <li>
                <strong>ABOUT US</strong>
            </li>
        </ol>
        <p>
            2.1&nbsp;&nbsp;&nbsp;We are a company registered in England under company number 934 1708 28. Our registered address
            is 64 Cavendish St, London, W1G 8TB and our office address is set out below. 
        </p>
        <p>
            2.2&nbsp;&nbsp;&nbsp;You can contact us as follows:<br />
            FAO: Charlie Viney, Director<br />
            Address: 23 Erlanger Road, London, SE145TF<br />
            Email: charlie@thevineyagency.com
        </p>
        <ol start="3">
            <li>
                <strong>INFORMATION WE MAY COLLECT ABOUT YOU</strong>
            </li>
        </ol>

    </div> 
    );
}
 
export default PrivacyInfo;