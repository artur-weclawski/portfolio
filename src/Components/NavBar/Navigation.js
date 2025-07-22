import NavLinks from "./NavLinks";
const Navigation = ({theme, setTheme}) =>{
    return(
      <div className='Navigation'>
        <div  className='Navigation-icon'>
          <a href='/portfolio' ><i className="gg-terminal" ></i></a>
        </div>
        <NavLinks theme={theme} setTheme={setTheme} switchId="navigation-switch"/>
      </div>
    );
}

export default Navigation