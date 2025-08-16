import NavLinks from "./NavLinks";
import { BiTerminal } from "react-icons/bi";

const Navigation = () =>{
    return(
      <div className='Navigation'>
        <div  className='Navigation-icon'>
          <a href='/portfolio' ><BiTerminal /></a>
        </div>
        <NavLinks />
      </div>
    );
}

export default Navigation