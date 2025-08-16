const Link = ({name}) =>{
    return(
        <a href={`#${name.toLowerCase()}`}>
                    <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="8 0 12 24" height="2rem" width="1rem" xmlns="http://www.w3.org/2000/svg" style={{paddingRight:'4px'}}>
                        <path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" fill="currentColor"></path>
                    </svg>
                    {name}
                </a>
    )
}

export default Link;