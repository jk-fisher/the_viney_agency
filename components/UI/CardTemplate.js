import styles from '../../styles/CardTemplate.module.css'
import Card from './Card.js'

const CardTemplate = ({ cardsContent, header }) => {
    const cards = cardsContent.map(({pg, title, subTitle, content, image}, index) => {
        return (
            <div key={index} data-aos="fade-left">
                <li className={styles.list}>
                    <Card 
                        pg={pg}
                        title={title} 
                        subTitle={subTitle} 
                        content={content} 
                        image={image}
                    />
                </li>

            </div>
        )
    })
    return ( 
        <ul className={styles.container}>
            <h2 className={styles.header}>{header}</h2>
            {cards}
        </ul>
     );
}
 
export default CardTemplate;