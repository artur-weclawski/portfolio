import './NavBar.css';
import Link from "../Link/Link";
const NavLinks = () => {
    return(
        <nav className="NavLinks">
        <ul>
            <li>
                <Link name="Home"/>
            </li>
            <li>
                <Link name="Projects"/>
            </li>
            <li>
                <Link name="Contact"/>
            </li>
        </ul>
        </nav>
    );
}
export default NavLinks;