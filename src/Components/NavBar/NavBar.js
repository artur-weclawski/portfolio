import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import "./NavBar.css"
const NavBar = ({theme, setTheme}) =>{
    return(
        <div className="NavBar">
            <Navigation theme={theme} setTheme={setTheme}/>
            <MobileNavigation theme={theme} setTheme={setTheme}/>
        </div>
    );
}

export default NavBar