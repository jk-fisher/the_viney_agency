import { getAllPageData, getAllPageIDs, getPageData } from '../../lib/pages'
import { getLayout } from '../../components/Layout/Layout'
import { Fragment } from 'react';
import Image from 'next/image';
import styles from '../../styles/Page.module.css'
import HeaderPractice from '../../components/UI/HeaderPractice';
import ArrowIcon from '../../components/UI/ArrowIcon';
// import { ReactComponent as Arrow } from '../../public/assets/arrow_vector.svg'
// import { IoNavigateSharp } from "react-icons/io5";

const Page = ({dynamicPageData}) => {

    
    
    console.log('p', dynamicPageData)
    dynamicPageData.pageID
    return ( 
        <Fragment>
            {dynamicPageData.pageID === "about" && 
                <div>
                    <HeaderPractice title="About the Agency" description={dynamicPageData.about_summary} />
                    <ArrowIcon />
                </div>
                }
            <div className={styles.flex}>
                <div className={styles.flexItem}>
                    <Image className={styles.img}
                        src={dynamicPageData.image}  
                        alt="Picture of the author"
                        width={920}
                        height={920} />
                </div>
                <div className={styles.flexItem}>
                    <h1>
                        { dynamicPageData.title }
                    </h1>
                    <p>{ dynamicPageData.markdownBody }</p>
                </div>
            </div>
        </Fragment>
        
    );
}

const getStaticPaths = async () => {
    const paths = getAllPageIDs();
    console.log(paths)
    return {
        paths,
        fallback: false,
    };
}
const getStaticProps = async ({params}) => {
    const dynamicPageData = getPageData(params.pageID);
    const allPageData = getAllPageData()
    console.log('dd', dynamicPageData)
  return {
      props: {
        allPageData,
        dynamicPageData,
    } ,
  }
}


Page.getLayout = getLayout; 
export { Page as default, getStaticPaths, getStaticProps };