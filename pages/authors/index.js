import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { motion } from "framer-motion"

import styles from '../../styles/Authors.module.css'

import { getAllAuthorData } from '../../lib/authors'
import { getAllPageData } from '../../lib/pages'
import { getLayout } from '../../components/Layout/Layout'
import DynamicHeader from '../../components/UI/DynamicHeader'

const variants = {
    hidden: { opacity: 0, x: 0, y: +100 },
    enter: { opacity: 1, x: 0, y: 0 },
}

const Authors = ({ allAuthorData }) => {
    const authors = allAuthorData.map((author) => {
        return (
            <motion.div key={author.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href={`/authors/${author.id}`} key={author.id}>
                    <a>
                        <Image 
                            className={styles.img}
                            src={author.image}
                            alt={`${author.first_name} ${author.last_name}`}
                            width={400}
                            height={500}
                        
                        />
                        <h2 className={styles.authorTitle}>{author.first_name} {author.last_name}</h2>
                    </a>
                </Link>

            </motion.div>

        )
    })
    
    return (
        <Fragment>

            <Head>
                <title>Authors archive - The Viney Agency</title>
                <meta name="description" content="The Viney Agency represents a diverse range of award-winning and bestselling authors." />
                <link rel="icon" href="/assets/tva_logo.png" />
            </Head>
            <DynamicHeader title="Meet our Authors"/>
                <motion.div 
                    className={styles.gridWrapper}
                    variants={variants} // Pass the variant object into Framer Motion 
                    initial="hidden" // Set the initial state to variants.hidden
                    animate="enter" // Animated state to variants.enter
                    transition={{ type: 'linear', duration: 0.7 }} // Set the transition to linear>

                    >  
                    {authors}
                </motion.div>
        </Fragment>
  )
}

const getStaticProps = async () => {
    const allAuthorData = getAllAuthorData();
    const allPageData = getAllPageData();
    return {
        props: {
            allPageData,
            allAuthorData
        } 
    }
}

Authors.getLayout = getLayout; 
export { Authors as default, getStaticProps }