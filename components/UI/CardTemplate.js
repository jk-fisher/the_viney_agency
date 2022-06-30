import styles from '../../styles/CardTemplate.module.css'
import Card from './Card.js'

const CardTemplate = (props) => {
    return ( <div className={styles.container}>
        <h2 className={styles.header}>{props.header}</h2>
        <Card title={props.title} subTitle={props.subTitle} content={props.content} image={props.image}/>
    </div> );
}
 
export default CardTemplate;