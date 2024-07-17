import styles from './Info.module.css'
import flowchart from '../../assets/info_flowchart.png'
import mobileFlowchart from '../../assets/mobile_info_flowchart.png'

const Info = () => {
  return (
    <div className={styles.container}>
      <img src={flowchart} className={styles.desktopFlowchart}/>
      <div className={styles.textContainer}>
        <p className={styles.header}>The future <span className={styles.gray}>of</span><br></br>Cryptocurrency<br></br>trading <span className={styles.gradient}>platform</span></p>
        <p className={styles.more}>Take advantage of time and sales, futures spread orders and depth trader — plus, trade directly from charts.</p>
        <a>Learn more</a>
      </div>
      <img src={mobileFlowchart} className={styles.mobileFlowchart} />
    </div>
  )
}

export default Info