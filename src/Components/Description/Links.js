import { SiMaildotru } from "react-icons/si";
import { BsGithub, BsFileEarmarkPerson} from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa";
import pdf from "../Artur_Weclawski_CV.pdf"
const Links = () =>{
    return(
        <div className="links">
                    <a href = "mailto: weclawski.artur@gmail.com"><SiMaildotru className='SiMaildotru'/></a>
                    <a href = "https://www.linkedin.com/in/artur-w%C4%99c%C5%82awski-79a6b9297/" target="_blank" rel="noreferrer"><FaLinkedin className='FaLinkedin'/></a>
                    <a href = "https://github.com/artur-weclawski" target="_blank" rel="noreferrer"><BsGithub className='BsGithub'/></a>
                    <a href = {pdf} target="_blank" rel="noreferrer"><BsFileEarmarkPerson className='BsFileEarmarkPerson'/></a>
                </div>
    )
}

export default Links;