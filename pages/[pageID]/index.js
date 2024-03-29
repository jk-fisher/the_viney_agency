import Image from 'next/image';
import { Fragment } from 'react';
import Head from 'next/head';

import { getAllPageData, getAllPageIDs, getPageData } from '../../lib/pages';
import { getLayout } from '../../components/Layout/Layout';
import markdownToHtml from '../../lib/handleMarkdown';
import styles from '../../styles/Page.module.css'
import DynamicHeader from '../../components/UI/DynamicHeader';
import ArrowIcon from '../../components/UI/ArrowIcon';
import CardTemplate from '../../components/UI/CardTemplate';

import headshot_1 from '../../public/images/staff_images/charlie.jpg';
import headshot_2 from '../../public/images/staff_images/amberley.jpg';

const Page = ({dynamicPageData}) => {

    const cardsContent = [{
        pg: "about",
        title:"Charlie Viney",
        positionTitle:"Director",
        content: "I have been a literary agent since 2002 and founded The Viney Agency in 2008. The agency represents a diverse range of clients writing across a wide range of subjects. \n I first started in the book trade as a bookseller and then enjoyed a twenty-five-year career in general trade publishing, mostly working in international sales and marketing, later becoming a board director at a major British publishing house.\n Being a literary agent combines my love of books and an enjoyment of business while enabling me to work very closely with our wonderful authors and manage their careers across all media.",
        image: {icon: headshot_1}
      },
      {
        pg: "about",
        title: "Amberley Lowis",
        positionTitle: "Literary Agent",
        content: "I’m actively building my list and looking for debut commercial, reading group and literary fiction. I love beautifully crafted, evocative and original storytelling. I am also very interested in a broad range of lively and original non-fiction, particularly in the areas of narrative non-fiction, biography, memoir and cookery. I am also developing a children’s and young adult fiction list. \n I joined The Viney Agency in 2021, having spent the previous five years at the Abner Stein literary agency. Before that I worked in editorial at Kyle Books publishing house.",
        image: {icon: headshot_2}
      }]
    

    return ( 
        <Fragment>
            <Head>
                <title>{`${dynamicPageData.title} - The Viney Agency`}</title>
                <meta name="description" content={dynamicPageData.summary} />
                <link rel="icon" href="/assets/tva_logo.png" />
            </Head>
            {dynamicPageData.pageID === "about" && 
                <div>
                    <DynamicHeader title="About the Agency" description={dynamicPageData.summary} />
                    <ArrowIcon />
                </div>
                }
            <div className={`${styles.flex} ${dynamicPageData.pageID !== "about" && styles.mLg}`}>
                <div className={styles.flexItem}>
                    <Image className={styles.img}
                        src={dynamicPageData.image}  
                        alt="Picture of the author"
                        width={920}
                        height={920} />
                </div>
                <div className={styles.flexItem}>
                    <h1 className={styles.pgHeader}>
                        { dynamicPageData.title }
                    </h1>
                    <h2 className={styles.header}>
                        The Viney Agency
                    </h2> 
                    <div 
                        className={dynamicPageData.pageID === "about" ? styles.text : styles.styledText} 
                        dangerouslySetInnerHTML={{ __html: dynamicPageData.markdownBody }}/>
                            
                </div>
            </div>
            {dynamicPageData.pageID === "about" && 
                <CardTemplate header="Meet our Agents" cardsContent={cardsContent}/>
            }
        </Fragment>
        
    );
}

const getStaticPaths = async () => {
    const paths = getAllPageIDs();
    return {
        paths,
        fallback: false,
    };
}
const getStaticProps = async ({params}) => {
    const dynamicPageData = getPageData(params.pageID);
    const allPageData = getAllPageData();
    const body = await markdownToHtml(dynamicPageData.markdownBody);
    dynamicPageData.markdownBody = body;
  return {
      props: {
        allPageData,
        dynamicPageData,
    } ,
  }
}


Page.getLayout = getLayout; 
export { Page as default, getStaticPaths, getStaticProps };