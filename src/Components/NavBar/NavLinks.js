import Switch from "./Switch";
import './Switch.css';
import './NavBar.css';
import { Link } from "react-router-dom";

const NavLinks = ({theme, setTheme}) => {
    return(
        <nav className="NavLinks">
        <ul>
            <li>
                <Link to="/portfolio"><p>&gt;</p>Home</Link>
            </li>
            <li>
                <Link to='/portfolio/projects'><p>&gt;</p>Projects</Link>
            </li>
            <li className="li-Switch">
                <div className="Switch"><Switch theme={theme} setTheme={setTheme}/></div>
            </li>
        </ul>
        </nav>
    );
}
export default NavLinks;