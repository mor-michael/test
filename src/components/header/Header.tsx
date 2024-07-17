import styles from './Header.module.css'
import { TypeAnimation } from 'react-type-animation'
import flowchart from '../../assets/flowchart.png'
import learnMore from '../../assets/learnMore.svg'
import miceIcon from '../../assets/miceIcon.svg'
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.miniheader}>CRYPTO TRADING</p>
          <p className={styles.header}>Engineers Meet
            <TypeAnimation
              sequence={[' Traders ']}
              wrapper="span"
              cursor={false}
              className={styles.typeWrapper}
              speed={1}
            />
          </p>
          <p className={styles.info}>Advanced crypto algorithmic trading and efficient cross-chain execution, at scale.</p>
        </div>
        <img src={flowchart} />
      </div>
      <button className={styles.learnMoreButton}><span>Learn More</span><img src={learnMore}/></button>
      <img src={flowchart} className={styles.mobile_flowchart}></img>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{margin:"-400px 0px 0px 0px"}}>
        <img src={miceIcon} className={styles.miceIcon} />
      </motion.div>
    </div>
  )
}

export default Header