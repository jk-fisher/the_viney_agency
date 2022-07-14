import styles from '../../styles/CardTemplate.module.css'
import Card from './Card.js'

const CardTemplate = ({ cardsContent, header }) => {
    console.log(cardsContent)
    const cards = cardsContent.map(({pg, title, subTitle, content, image}, index) => {
        return (
            <li className={styles.list} key={index}>
                <Card 
                    pg={pg}
                    title={title} 
                    subTitle={subTitle} 
                    content={content} 
                    image={image}
                />
            </li>
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