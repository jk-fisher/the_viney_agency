import Head from 'next/head'
import DynamicHeader from '../../components/UI/DynamicHeader'
import { getAllPageData } from '../../lib/pages'
import { getLayout } from '../../components/Layout/Layout';
import { Fragment } from 'react';
import Guidelines from '../../components/submissions/Guidelines';
import CardTemplate from '../../components/UI/CardTemplate';
import headshot from '../../public/images/staff_images/amberley.jpg'


const Submissions = ({  }) => {
  const header = "What we're looking for..."

  const cardsContent = [{
    pg: "submission",
    title: "Amberley Lowis",
    positionTitle: "Literary Agent",
    content: "I’m actively building my list and looking for debut commercial, reading group and literary fiction. I love beautifully crafted, evocative and original storytelling. I am also very interested in a broad range of lively and original non-fiction, particularly in the areas of narrative non-fiction, biography, memoir and cookery. I am also developing a children’s and young adult fiction list.",
    image: {icon: headshot}
  }
  ]
    return ( <Fragment>
        <Head>
          <title>Submissions - The Viney Agency</title>
          <meta name="description" content="Submission guidelines, literary agents looking for new authors, uk literary agents accepting submissions" />
          <link rel="icon" href="/assets/tva_logo.png" />
        </Head>
        <DynamicHeader title="Submissions" description={null}/>
        <Guidelines />
        <CardTemplate header={header} cardsContent={cardsContent} />
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

Submissions.getLayout = getLayout;

export { Submissions as default, getStaticProps }