import { Fragment } from 'react';
import { useRef } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import styles from '../../styles/Text.module.css'

const Text = (props) => {
    const moreBtn = useRef(null);
    const lessBtn = useRef(null);

    const displayedText = props.content.split(' ').slice(0, 150).join(' ').concat('...')

    return ( 
        <Fragment>
            <p className={styles.text}>
            {!props.state ? displayedText : props.content}
                
            </p>
            <CSSTransition
                    nodeRef={moreBtn}
                    in={!props.state}
                    timeout={{
                        enter: 1000,
                        exit: 200
                    }}
                    mountOnEnter
                    unmountOnExit
                    classNames={{
                        enterActive: styles["fadeBtn-enter-active"],
                        exitActive: styles["fadeBtn-exit-active"]
                    }}
                >
                <div ref={moreBtn}>
                    <button className={styles.textButton} onClick={props.moreText}>
                    Read More
                    <FaAngleDown className={styles.icon} />
                    </button>
                </div>

            </CSSTransition>

            <CSSTransition
                    nodeRef={lessBtn}
                    in={props.state}
                    timeout={{
                        enter: 1000,
                        exit: 1
                    }}
                    mountOnEnter
                    unmountOnExit
                    classNames={{
                        enterActive: styles["fade-enter-active"],
                        exitActive: styles["fade-exit-active"]
                    }}>
                <div ref={lessBtn}>
                        <button className={styles.textButton} onClick={props.lessText}>
                        Read Less 
                        <FaAngleUp className={styles.icon}/>
                    </button>
                </div>

            </CSSTransition>
        </Fragment>
     );
}
 
export default Text;