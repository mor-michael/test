import styles from './Navbar.module.css'
import linkImg from '../../assets/link.svg'
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const path01Variants = {
    closed: {d: 'M0 0.5L32 0.5'},
    open: {d: 'M1.12127 0.514929L33.1213 8.51493'}
  }
  const path02Variants = {
    closed: {d: 'M0 8.5L32 8.5'},
    open: {d: 'M0.878732 8.51493L32.8787 0.514929'}
  }

  const [isOpen, setOpen] = useState(false)
  const path01Controls = useAnimation();
  const path02Controls = useAnimation();

  const onClick = async () => {
  // change the internal state
  setOpen(!isOpen);

  // start animation
  if (!isOpen) {
    path01Controls.start(path01Variants.open);
    path02Controls.start(path02Variants.open);
  } else {
    path01Controls.start(path01Variants.closed);
    path02Controls.start(path02Variants.closed);
  }
};

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <a className={styles.logo}>C</a>
        {isOpen &&
          <motion.div className={styles.mobile_navlinks} initial={{scaleX: 0}} animate ={{scaleX: 1}}>
            <a>Activities</a>
            <a>Technology</a>
            <a>R&D</a>
            <a>Community</a>
            <a className={styles.mobile_careerButton}>Career <img src={linkImg} draggable="false"/></a>
          </motion.div>
        }
        <div className={styles.navlinks}>
          <a>Activities</a>
          <a>Technology</a>
          <a>R&D</a>
          <a>Community</a>
        </div>
        <button onClick={onClick} className={styles.menu}>
          <svg width='32' height='18' viewBox='0 0 32 8'>
            <motion.path
              {...path01Variants.closed}
              animate={path01Controls}
              transition={{ duration: 0.2 }}
              stroke='#FFFFFF'
            />
            <motion.path
              {...path02Variants.closed}
              animate={path02Controls}
              transition={{ duration: 0.2 }}
              stroke='#FFFFFF'
            />
          </svg>
        </button>
      </div>
      <a className={styles.careerButton}>Career <img src={linkImg} draggable="false"/></a>
    </div>
  )
}

export default Navbar