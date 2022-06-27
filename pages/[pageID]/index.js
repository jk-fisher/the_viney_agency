import { getAllPageData, getAllPageIDs, getPageData } from '../../lib/pages'
import { getLayout } from '../../components/Layout/Layout'
import { Fragment } from 'react';
import Image from 'next/image';
import styles from '../../styles/Page.module.css'

const Page = ({dynamicPageData}) => {

    console.log('p', dynamicPageData)
    return ( 
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