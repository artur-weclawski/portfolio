import './Neon.css';
import { useEffect, useRef } from "react";

const Neon = () =>{
    const boxRef = useRef(null);

    useEffect(() => {
    const rotateElement = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      const middleX = window.innerWidth / 2;
      const middleY = window.innerHeight / 2;

      const offsetX = ((x - middleX) / middleX) * 45;
      const offsetY = ((y - middleY) / middleY) * 45;

      if (window.innerWidth > 1080) {
        document.documentElement.style.setProperty("--rotateX", `${offsetY}deg`);
        document.documentElement.style.setProperty("--rotateY", `${-offsetX}deg`);
      } else {
        document.documentElement.style.setProperty("--rotateX", "0deg");
        document.documentElement.style.setProperty("--rotateY", "0deg");
      }
    };

    window.addEventListener("mousemove", rotateElement);
    return () => window.removeEventListener("mousemove", rotateElement);
  }, []);

    return(
        <div className='neon-box' ref={boxRef}>
          <h1 className='neonText'>
            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="8 0 12 24" height="76px" width="32px" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" fill="currentColor"></path>
            </svg>
            HELLO
          </h1>
        </div>
    );
}

export default Neon;