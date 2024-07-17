import styles from './Footer.module.css'
import Atropos from 'atropos/react'
import { useEffect, useState } from 'react'

const Footer = () => {
  const [width, setWidth] = useState(0);
  useEffect (() => {
    setWidth(window.innerWidth)
  }, [width])
  return (
      <div className={styles.container}>
        <Atropos highlight={false} rotateTouch={(width < 1440) ? 'scroll-y' : true}>
          <div className={styles.bg1}>
            <p className={styles.miniheader}>SPOT & MARGIN</p>
            <p>Trade <span>200+</span> pairs with up to 10x leverage</p>
            <a>Learn more</a>
          </div>
        </Atropos>
        <div className={styles.slide}>
          <div style={{display: 'flex'}} className={styles.pare}>
            <Atropos highlight={false} rotateTouch={(width < 1440) ? 'scroll-y' : true}>
              <div className={styles.bg2}>
                <p className={styles.miniheader}>DERIVATIVES</p>
                <p><span>40+</span> quarterly<br></br>futures and<br></br>contracts</p>
                <a>Learn more</a>
              </div>
            </Atropos>
            <Atropos highlight={false} rotateTouch={(width < 1440) ? 'scroll-y' : true}>
              <div className={styles.bg3}>
                <p className={styles.miniheader}>TRADING ARENA</p>
                <p>Prize pools<br></br>worth up to<br></br><span>USD 1,000,000</span></p>
                <a>Learn more</a>
              </div>
            </Atropos>
          </div>
          <Atropos highlight={false} rotateTouch={(width < 1440) ? 'scroll-y' : true}>
            <div className={styles.bg4}>
              <p className={styles.miniheader}>MOBILE APP</p>
              <p>Trade anytime,<br></br><span>anywhere</span></p>
              <a>Learn more</a>
            </div>
          </Atropos>
        </div>
      </div>
  )
}

export default Footer