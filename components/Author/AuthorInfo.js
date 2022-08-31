import Image from 'next/image';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import ShowMoreText from '../UI/ShowMoreText';
import authorStyles from '../../styles/AuthorID.module.css'

const AuthorInfo = ({ image, authorsName, biography, twitter, instagram, web }) => {
    return ( <section className={authorStyles.authorWrapper}>
        <div className={authorStyles.col_1}>
          <div className={authorStyles.imageContainer}>
            <Image
              className={authorStyles.image}
              src={image} 
              alt={authorsName}
              layout="fill"
              />

          </div>
        </div>
        <div  className={authorStyles.col_2}>
          <h1 className={`${authorStyles.headerLg} ${authorStyles.headerBlue}`}>
            {authorsName}
          </h1>
          <h3 className={`${authorStyles.headerSm} ${authorStyles.headerGrey}`}>Author</h3>
          <ShowMoreText content={biography}/>
        </div>
        {biography &&
        twitter &&
        web &&
        <div className={authorStyles.col_3}>
          <h3 className={`${authorStyles.headerSm} ${authorStyles.headerBlue}`}>Social Links</h3>
          <ul className={authorStyles.socialLinks}>
            {twitter && 
              <li className={authorStyles.listItem}>
                <SocialIcon url={`https://twitter.com/${twitter}`}
                  bgColor="#39778B" 
                  network="twitter" 
                  style={{ height: 40, width: 40 }}
                  />
                  <span className={authorStyles.socialData}>
                    {twitter}
                  </span>
                </li>}
            {instagram && 
                <li className={authorStyles.listItem}>
                  <SocialIcon url={`https://instagram.com/${instagram}`}
                    bgColor="#39778B" 
                    network="instagram" 
                    style={{ height: 40, width: 40 }}/>
                    <span className={authorStyles.socialData}>
                      {instagram}
                    </span>
                </li>}
            {web && 
              <li className={authorStyles.listItem}>
                <SocialIcon url={web}
                  bgColor="#39778B" 
                  network="dribbble"
                  style={{ height: 40, width: 40 }}/>
                  <span className={authorStyles.socialData}>
                    <Link href={web}>
                      <a>{`Author's Website`}</a>
                    </Link>
                  </span>
              </li>}
          </ul>
        </div>
      }
    </section>  );
}
 
export default AuthorInfo;