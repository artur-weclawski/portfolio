import NavLinks from './NavLinks';
import { useState } from 'react';
const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    return(
        <div className="MobileNavigation">
            <div  className='MobileNavigation-icon' onClick={() => setOpen(!open)}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="60px" width="60px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
                </svg>
            </div>
        {open && <NavLinks />}
        </div>
    );
}

export default MobileNavigation;