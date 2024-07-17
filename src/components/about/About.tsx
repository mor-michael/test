import styles from './About.module.css'
import { motion, useScroll} from "framer-motion";
import blueArrow from '../../assets/blue_arrow.svg'
import redArrow from '../../assets/red_arrow.svg'
import { useRef } from 'react';

const About = () => {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end end"]
  });

  return (
    <div className={styles.about}>
      <p className={styles.miniheader}>ABOUT US</p>
      <div className={styles.header}>Global technologies</div>
      <div className={styles.container}>
        <div className={styles.chart} ref={scrollRef} >
          <motion.div style={{scaleX: scrollYProgress}}> </motion.div>
          <motion.div style={{scaleX: scrollYProgress}}> </motion.div>
          <motion.div style={{scaleX: scrollYProgress}}> </motion.div>
          <motion.div style={{scaleX: scrollYProgress}}> </motion.div>
          <motion.div style={{scaleX: scrollYProgress}}> </motion.div>
          <motion.div style={{scaleX: scrollYProgress}}> </motion.div>
        </div>
        <div className={styles.info}>
          <p>Level 1</p>
          <div>
            <img src={blueArrow} />
            <p>Deploy a multi-legged futures strategy by simultaneously placing orders to buy and sell from the same order ticket.</p>
          </div>
          <div>
            <img src={redArrow} />
            <p>Place and manage orders based on the Level 2 order book, which provides a live display of all bids and offers waiting to be executed.</p>
          </div>
          <button>Start Now</button>
        </div>
      </div>
    </div>
  )
}

export default About