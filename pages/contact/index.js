import Head from 'next/head'
import DynamicHeader from '../../components/UI/DynamicHeader'
import { getAllPageData } from '../../lib/pages'
import { getLayout } from '../../components/Layout/Layout';
import { Fragment } from 'react';
import styles from '../../styles/Contact.module.css';
import { SocialIcon } from 'react-social-icons';


const Contact = ({  }) => {
    const contacts =
        [
            {
                name: "Charlie Viney",
                address: "21, Dartmouth Park Avenue, London, NW5 1JL",
                email: "charlie@thevineyagency.com"
            },
            {
                name: "Amberley Lowis",
                address: "15, Lyne Crescent, London, E17 5HY",
                email: "amberley@thevineyagency.com"
            }
        ]

    const contactInfo = contacts.map((contact, index) => {
        return (
            <li className={styles.gridItem} key={index}>
                <span className={styles.bold}>{contact.name}</span>
                <span className={styles.text}>
                    The Viney Agency, <br/>
                    {contact.address}
                </span>
                <span className={styles.text}>
                    Email: {contact.email}
                </span>
            </li>
        )
    })
    return ( <Fragment>
        <Head>
          <title>Contact information - The Viney Agency</title>
          <meta name="description" content="Contact information for The Viney Agency literary agents, follow The Viney Agency on twitter" />
          <link rel="icon" href="/assets/tva_logo.png" />
        </Head>
        <DynamicHeader title="Contact Us" />
        <ul className={styles.wrapper}>
            {contactInfo}
            <div className={styles.gridItem}>
                <span className={styles.bold}>
                        Find us on Twitter
                </span> 
                <SocialIcon className={styles.inline} url="https://twitter.com" bgColor="#39778B" network="twitter"/>
                <span className={`${styles.socialLink} ${styles.text}`}>@TheVineyAgency</span>

            </div>
        </ul>
    </Fragment> );
}

const getStaticProps = async () => {
    const allPageData = getAllPageData();
    return {
        props: {
          allPageData
        } 
    }
}

Contact.getLayout = getLayout;

export { Contact as default, getStaticProps }