import styles from '../../styles/TeamList.module.css'
import Team_01 from '../../public/images/staff_images/charlie.jpg' 
import Team_02 from '../../public/images/staff_images/amberley.jpg' 

import Image from 'next/image';

const TeamList = () => {
    const teamInfo = [
        {
            name: 'Charley Viney', 
            title: 'Director',
            img: {icon: Team_01}
        },
        {
            name: 'Amberley Lowis', 
            title: 'Literary Agent',
            img: {icon: Team_02}
        },
        {
            name: 'Jack Viney', 
            title: 'Buisness Manager',
            img: {icon: Team_01}
        },
        {
            name: 'Kamila Cantor', 
            title: 'Bookkeeper',
            img: {icon: Team_02}
        }
    ]
    const listOfTeam = teamInfo.map(teamMember => {
        return(

            <li className={styles.item} key={teamMember.name}>
                <Image 
                    src={teamMember.img.icon}
                    alt={teamMember.name}
                    layout='responsive'
                />
                <h3 className={styles.name}>
                    {teamMember.name}
                </h3>
                <h4 className={styles.title}>
                    {teamMember.title}
                </h4>
            </li>
        )
    })
    return ( 
        <div className={styles.container}>
            <ul className={styles.gridWrapper}>
                {listOfTeam}
            </ul>
        </div>
     );
}
 
export default TeamList;