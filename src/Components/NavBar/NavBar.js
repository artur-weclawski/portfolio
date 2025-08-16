import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import "./NavBar.css"
const NavBar = () =>{
    return(
        <div className="NavBar">
            <Navigation />
            <MobileNavigation />
        </div>
    );
}

export default NavBar