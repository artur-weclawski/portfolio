import NavLinks from './NavLinks';
import { useState } from 'react';
const MobileNavigation = ({theme, setTheme}) => {

    const [open, setOpen] = useState(false);

    return(
        <div className="MobileNavigation">
            <div  className='MobileNavigation-icon' onClick={() => setOpen(!open)}>
                <i className="gg-menu"></i>
            </div>
        {open && <NavLinks theme={theme} setTheme={setTheme}  switchId="mobile-navigation-switch"/>}
        </div>
    );
}

export default MobileNavigation;