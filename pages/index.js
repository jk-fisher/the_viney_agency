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
import TeamContainer from '../components/Team/TeamContainer'
import { getSortedImages, getCarouselParams  } from '../lib/carousel'

const Home = ({ carouselImages, carouselData }) => {  

  return (<Fragment>
        <Head>
          <title>Home - The Viney Agency</title>
          <meta name="description" content="The Viney Agency is an established literary agency based in London, representing award-winning and bestselling authors." />
          <link rel="icon" href="/assets/tva_logo.png" />
        </Head>
        <Header />
        <div className={styles.flex}>
          <ImageCarousel images={carouselImages} data={carouselData}/>
          <Summary />
        </div>
        <div className={styles.slideDownContainer}>
          <ArrowIcon /> 
        </div>
        <TeamContainer />
    </Fragment>

)
}


const getStaticProps = async () => {
  const allPageData = getAllPageData();
  const carouselImages = getSortedImages();
  const carouselData = getCarouselParams();
  return {
      props: {
        allPageData,
        carouselImages, 
        carouselData
      } 
  }
}

Home.getLayout = getLayout; 
export { Home as default, getStaticProps }