import Head from 'next/head'
import Image from 'next/image'
import { getAllPageData } from '../lib/pages'
import { getLayout } from '../components/Layout/Layout'
import Header from '../components/UI/Header'
import { Fragment } from 'react'

import styles from '../styles/Index.module.css'

import Summary from '../components/UI/Summary'
import ArrowIcon from '../components/UI/ArrowIcon'
import ImageCarousel from '../components/UI/ImageCarousel'
import { getSortedImages  } from '../lib/carousel'

const Home = ({ carouselImages }) => {
  
  console.log('carouselimgs', carouselImages)
  
  return (<Fragment>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/assets/tva_logo.png" />
        </Head>
        <Header />
        <div className={styles.flex}>
          <ImageCarousel images={carouselImages} />
          <Summary />
        </div>
        <div className={styles.slideDownContainer}>
          <ArrowIcon /> 
        </div>
    </Fragment>

)
}

const getStaticProps = async () => {
  const allPageData = getAllPageData();
  const carouselImages = getSortedImages();
  return {
      props: {
        allPageData,
        carouselImages
      } 
  }
}

Home.getLayout = getLayout; 
export { Home as default, getStaticProps }