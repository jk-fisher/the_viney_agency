import { getAllPageData, getAllPageIDs, getPageData } from '../../lib/pages'
import { getLayout } from '../../components/Layout/Layout'
import { Fragment } from 'react';
import Image from 'next/image';

const Page = ({dynamicPageData}) => {

    console.log('p', dynamicPageData)
    return ( <Fragment>
        <div>
            <Image src={dynamicPageData.image}  
                alt="Picture of the author"
                width={500}
                height={500} />
        </div>
        <div>
            <h1>
                { dynamicPageData.title }
            </h1>
            <p>{ dynamicPageData.markdownBody }</p>
        </div>
        </Fragment> );
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