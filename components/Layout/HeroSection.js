import styles from "../../styles/HeroSection.module.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const HeroSection = () => {


    return ( 
        <>
            <section className={styles.hero}>
                <h1 className={styles.h1}>Le Petit Cottage, Dordogne, France</h1> 
            </section>
            <div className={styles.summary}>
                <p>
                We welcome visitors to stay in your own private cottage at our little farm. The chickens and sheep will greet you in the mornings and you can have fresh laid eggs for breakfast with jam from our own fruit trees and, in season, produce from the garden. If you fancy relaxing by a tranquil lake we have a private millpond just two kilometres away. Plenty of fish if you bring your rod, (or borrow one of ours) or just somewhere shady to read a book on a sunny day.
                </p>
                <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <br />
                    <p><span className="total-review">4.5</span> (86 reviews)</p></div>
            </div>
        </>
     );
}
 
export default HeroSection;