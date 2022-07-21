import styles from '../../styles/CardTemplate.module.css'
import TeamList from './TeamList'

const TeamContainer = () => {
    return ( <section>
        <h2 className={styles.header}>Meet our Team</h2>
        <TeamList />
    </section> );
}
 
export default TeamContainer;