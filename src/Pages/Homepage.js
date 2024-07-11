import Neon from "../Components/Neon/Neon";
import "./Pages.css"
import { FaLinkedin } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";
import { BsGithub, BsFileEarmarkPerson} from "react-icons/bs"
import pdf from "../Artur_Weclawski_CV.pdf"
const HomePage = () =>{
    return(
        <div className="HomePage">
            <Neon />
            <div className="description">
            Work in progress.
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