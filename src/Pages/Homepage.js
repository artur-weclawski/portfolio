import Neon from "../Components/Neon/Neon";
import "./Pages.css"
import { FaLinkedin, FaDatabase } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";
import { BsGithub, BsFileEarmarkPerson} from "react-icons/bs"
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3,IoLogoHtml5  } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import pdf from "../Artur_Weclawski_CV.pdf"
import { ReactTyped } from "react-typed";
import { useEffect } from "react";
const HomePage = () =>{
    useEffect(()=>{
        const scrollers = document.querySelectorAll(".scroller");
        if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
            addAnimation();
        }
        function addAnimation(){
            scrollers.forEach(scroller =>{
                const scrollerInner = scroller.querySelector('.scroller-inner');
                if(scrollerInner.children.length > 7) return;
                const scrollerContent = Array.from(scrollerInner.children);
                scrollerContent.forEach(item =>{
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute('aria-hidden', true);
                    scrollerInner.appendChild(duplicatedItem);
                })
            });
        }
    },[])

    return(
        <div className="HomePage">
            <Neon />
            <div className="description">
                <h1>
                Hi, I'm {" "}
                <ReactTyped 
                    strings={["Artur.", "programmer.", "developer."]}
                    typeSpeed={80}
                    loop
                    backSpeed={100}
                    cursorChar="|"
                    showCursor={true}
                />
                </h1>
                <p>
                Description under maintenance
                <ReactTyped
                    strings={["..."]}
                    typeSpeed={120}
                    loop
                    showCursor={false}
                />
                </p>
                <div className="links">
                    <a href = "https://github.com/artur-weclawski" target="_blank" rel="noreferrer"><BsGithub className='BsGithub'/></a>
                    <a href = "https://www.linkedin.com/in/artur-w%C4%99c%C5%82awski-79a6b9297/" target="_blank" rel="noreferrer"><FaLinkedin className='FaLinkedin'/></a>
                    <a href = "mailto: weclawski.artur@gmail.com"><SiMaildotru className='SiMaildotru'/></a>
                    <a href = {pdf} target="_blank" rel="noreferrer"><BsFileEarmarkPerson className='BsFileEarmarkPerson'/></a>
                </div>
            </div>
            <div className="scroller">
                    <ul className="tag-list scroller-inner">
                        <li><IoLogoJavascript className="scroller-icon"/>JavaScript</li>
                        <li><RiReactjsLine className="scroller-icon"/>React</li>
                        <li><RiJavaLine className="scroller-icon"/>Java</li>
                        <li><SiSpringboot className="scroller-icon" style={{marginRight: "5px"}}/>SpringBoot</li>
                        <li><IoLogoHtml5 className="scroller-icon"/>HTML</li>
                        <li><IoLogoCss3 className="scroller-icon"/>CSS</li>
                        <li><FaDatabase className="scroller-icon"/>SQL</li>
                    </ul>
            </div>
        </div>
    )
}

export default HomePage;