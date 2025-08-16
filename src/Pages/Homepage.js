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
const HomePage = () =>{
    const infoRef = useRef(null);
    const [size, setSize] = useState({ height: 0 });
        
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

                <div className="top-background" style={{ background: `url(${top_background}) no-repeat top center`, backgroundSize: 'cover' }}>
                    {/* <img src={top_background} alt=''/> */}
                </div>
                <div className="info" ref={infoRef}>
                    <Neon />
                    <Description />
                </div>
                <Scroller />
            </div>
            <MainProjects />
            <div className="projects-wrapper">
                <div className="bot-background" style={{ background: `url(${bottom_background}) no-repeat top center`, backgroundSize: 'cover' }}>
                </div>
                <Projects />
            </div>
            <Contact />
            
        </div>
    )
}

export default HomePage;