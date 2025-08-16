import "./Scroller.css";
import { FaDatabase } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3,IoLogoHtml5  } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { useRef, useState, useEffect } from "react";

const Scroller = () => {
    const scrollerRef = useRef(null);
        const [size, setSize] = useState({ height: 0 });
            
        useEffect(() => {
            const updateSize = () => {
              if (scrollerRef.current) {
                setSize({
                  height: scrollerRef.current.offsetHeight
                });
              }
            };
        
            updateSize();
            window.addEventListener("resize", updateSize);
            return () => window.removeEventListener("resize", updateSize);
        }, []);
        document.documentElement.style.setProperty('--scroller-height', size.height + 'px');
    return(
            <div className="scroller" ref={scrollerRef}>
                    <ul className="tag-list scroller-inner">
                        <li><IoLogoJavascript className="scroller-icon"/>JavaScript</li>
                        <li><RiReactjsLine className="scroller-icon"/>React</li>
                        <li><RiJavaLine className="scroller-icon"/>Java</li>
                        <li><SiSpringboot className="scroller-icon"/>SpringBoot</li>
                        <li><IoLogoHtml5 className="scroller-icon"/>HTML</li>
                        <li><IoLogoCss3 className="scroller-icon"/>CSS</li>
                        <li><FaDatabase className="scroller-icon"/>SQL</li>
                        <li aria-hidden='true'><IoLogoJavascript className="scroller-icon"/>JavaScript</li>
                        <li aria-hidden='true'><RiReactjsLine className="scroller-icon"/>React</li>
                        <li aria-hidden='true'><RiJavaLine className="scroller-icon"/>Java</li>
                        <li aria-hidden='true'><SiSpringboot className="scroller-icon"/>SpringBoot</li>
                        <li aria-hidden='true'><IoLogoHtml5 className="scroller-icon"/>HTML</li>
                        <li aria-hidden='true'><IoLogoCss3 className="scroller-icon"/>CSS</li>
                        <li aria-hidden='true'><FaDatabase className="scroller-icon"/>SQL</li>
                    </ul>
            </div>
    )
}

export default Scroller;