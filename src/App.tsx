import './App.css'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import About from './components/about/About'
import Info from './components/info/Info'
import Footer from './components/footer/Footer'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from "framer-motion"

function App() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 25, stiffness: 100 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const moveCursor = (e: any) => { 
      cursorX.set(e.pageX + 30);
      cursorY.set(e.pageY + 50);
    }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <>
      <motion.div
        className="cursor"
        style={{
          width: 10,
          height: 10,
          borderRadius: '25px',
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      > </motion.div>
      <Navbar />
      <Header />
      <About />
      <Info />
      <Footer />
    </>
  )
}

export default App
