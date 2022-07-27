import styles from '../../styles/ArrowIcon.module.css'
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const bounceTransition = {
    y: {
        duration: 0.6,
        yoyo: Infinity,
        ease: "easeOut"
    }
}
const ArrowIcon = () => {

    const { scrollY } = useScroll()
    const [ showArrow, setShowArrow ] = useState(true)

    useEffect(() => {
        
        // console.log('scroll useeffect ran')
    return scrollY.onChange((latest) => {
        if (latest > 1){
            // console.log('going down')
            setShowArrow(false)
        }else if(latest < 1){
            // console.log('goingup')
            setShowArrow(true)
        }
        // console.log("Page scroll: ", latest, scrollY)
    })
    }, [scrollY])

    return ( 
        <div className={`${styles.icon}`}>
            <AnimatePresence>
                {showArrow && (
                <motion.svg 
                    className={`${styles.object}`} 
                    transition={bounceTransition}
                    animate={{
                        y: ["40%", "-10%"],
                    }}
                    exit={{ opacity: 0.3 }}
                    width="44" 
                    height="30" 
                    viewBox="0 0 44 30" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector 3" d="M22 16L0 0L22 29.5L44 0L22 16Z" fill="#39778B"/>
                </motion.svg>
                )}

            </AnimatePresence>

        </div>

     );
}
 
export default ArrowIcon;