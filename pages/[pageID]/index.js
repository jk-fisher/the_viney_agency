import { getAllPageIDs, getPageData } from '../../lib/pages'
import { getLayout } from '../../components/Layout/Layout'


const Page = ({dynamicPageData}) => {

    return ( <h1>
        Page: { dynamicPageData.title }
    </h1> );
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
    console.log('dd', dynamicPageData)
  return {
      props: {
        dynamicPageData,
    } ,
  }
}


// Page.getLayout = getLayout; 
export { Page as default, getStaticPaths, getStaticProps };