import "./Pages.css"

import Neon from "../Components/Neon/Neon";
import Description from "../Components/Description/Description";
import Scroller from "../Components/Scroller/Scroller";
import Projects from "./Projects";
import MainProjects from "./MainProjects";

import top_background from '../top_background.png'
import bottom_background from '../bottom_background.png'
import Contact from "../Components/Contact/Contact";
import { useRef, useState, useEffect } from "react";

import { motion, useScroll, useTransform } from "framer-motion"; 
const HomePage = () =>{
    const infoRef = useRef(null);
    const [size, setSize] = useState({ height: 0 });

    const { scrollYProgress } = useScroll();

    const topOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const topScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);

    const botOpacity = useTransform(scrollYProgress, [0.5, 0.9], [0, 1]);
    const botScale = useTransform(scrollYProgress, [0.5, 0.9], [1.2, 1]);
        
    useEffect(() => {
        const updateSize = () => {
          if (infoRef.current) {
            setSize({
              height: infoRef.current.offsetHeight
            });
          }
        };
    
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    document.documentElement.style.setProperty('--info-height', size.height + 'px');

    return(
        <div className="home-page" id='home'>
            <div className="info-wrapper">

                <motion.div
          className="top-background"
          style={{
            background: `url(${top_background}) no-repeat top center`,
            backgroundSize: "cover",
            opacity: topOpacity,
            scaleY: topScale,
            transformOrigin: "top center",
          }}
        />
                <div className="info" ref={infoRef}>
                    <Neon />
                    <Description />
                </div>
                <Scroller />
            </div>
            <MainProjects />
            <div className="projects-wrapper">
                <motion.div
          className="bot-background"
          style={{
            background: `url(${bottom_background}) no-repeat top center`,
            backgroundSize: "cover",
            opacity: botOpacity,
            scaleY: botScale,
            transformOrigin: "top center",
          }}
        />
                <Projects />
            </div>
            <Contact />
            
        </div>
    )
}

export default HomePage;