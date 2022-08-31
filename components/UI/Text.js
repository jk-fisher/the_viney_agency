import { Fragment } from 'react';
import { useRef } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import styles from '../../styles/Text.module.css'

const Text = ({ state, moreText, lessText, content }) => {
    const moreBtn = useRef(null);
    const lessBtn = useRef(null);

    return ( <Fragment>
        {content.split(' ').length < 100 ? 
        <div className={styles.text} dangerouslySetInnerHTML={{ __html: content }} />
        :
        <Fragment>
            <CSSTransition
                    nodeRef={moreBtn}
                    in={!state}
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
                    <div className={`${styles.text} ${styles.clamp}`} dangerouslySetInnerHTML={{ __html: content }}
                    />
                    <button className={styles.textButton} onClick={moreText}>
                    Read More
                    <FaAngleDown className={styles.icon} />
                    </button>
                </div>

            </CSSTransition>

            <CSSTransition
                    nodeRef={lessBtn}
                    in={state}
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
                <div className={styles.text} dangerouslySetInnerHTML={{ __html: content }} />
                        <button className={styles.textButton} onClick={lessText}>
                        Read Less 
                        <FaAngleUp className={styles.icon}/>
                    </button>
                </div>

            </CSSTransition>
        </Fragment>
        }
        </Fragment>
     );
}
 
export default Text;