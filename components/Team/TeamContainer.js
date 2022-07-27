import styles from '../../styles/CardTemplate.module.css'
import TeamList from './TeamList'

const TeamContainer = () => {
    return ( <div className={styles.container}>
        <h2 className={styles.header}>Meet our Team</h2>
        <TeamList />
    </div> );
}
 
export default TeamContainer;