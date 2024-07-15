import Neon from "../Components/Neon/Neon";
import "./Pages.css"
import { FaLinkedin } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";
import { BsGithub, BsFileEarmarkPerson} from "react-icons/bs"
import pdf from "../Artur_Weclawski_CV.pdf"
import { ReactTyped } from "react-typed";
const HomePage = () =>{
    return(
        <div className="HomePage">
            <Neon />
            <div className="description">
                <h1>
                Hi, I'm {" "}
                <ReactTyped 
                    strings={["Artur.", "programmer.", "developer.","amateur artist."]}
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
            </div>
            <div className="links">
            <a href = "https://github.com/artur-weclawski" target="_blank"><BsGithub className='BsGithub'/></a>
            <a href = "https://www.linkedin.com/in/artur-w%C4%99c%C5%82awski-79a6b9297/" target="_blank"><FaLinkedin className='FaLinkedin'/></a>
            <a href = "mailto: weclawski.artur@gmail.com"><SiMaildotru className='SiMaildotru'/></a>
            <a href = {pdf} target="_blank"><BsFileEarmarkPerson className='BsFileEarmarkPerson'/></a>
            </div>
        </div>
    )
}

export default HomePage;