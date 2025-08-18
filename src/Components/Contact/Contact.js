import "./Contact.css";
import { SiMaildotru } from "react-icons/si";
import { BsGithub, BsFileEarmarkPerson} from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa";
import pdf from "../resume_eng_pl.pdf";
const Contact = () => {
    return (
        <div className='contact'id='contact'>
                <h2>CONTACT</h2>
                <div className="contact-info">
                    <h2>Artur Węcławski</h2>
                    <div className="link">                    
                        <SiMaildotru/><a href = "mailto: weclawski.artur@gmail.com">weclawski.artur@gmail.com</a>
                    </div>
                    <div className="link">
                        <FaLinkedin/><a href = "https://www.linkedin.com/in/artur-w%C4%99c%C5%82awski-79a6b9297/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                    <div className="link">
                        <BsGithub/><a href = "https://github.com/artur-weclawski" target="_blank" rel="noreferrer">Github</a>
                    </div>
                    <div className="link">
                        <BsFileEarmarkPerson/><a href = {pdf} target="_blank" rel="noreferrer">Resume</a>
                    </div>
                </div>
            </div>
    )
}

export default Contact