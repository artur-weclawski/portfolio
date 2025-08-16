import "./Description.css";
import { ReactTyped } from "react-typed";
import Links from "./Links";


const Description = () =>{
    return(
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
                <Links />
            </div>
    )
}
export default Description;