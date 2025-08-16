import "../Components/Cards/Cards.css"
import Card from "../Components/Cards/Card";
import { useRef, useState, useEffect } from "react";

    const Projects = () =>{
        const projects = [{card_title: 'Unconquered Fortress', card_description: 'A Tower Defense game written in Java. It features procedurally generated levels, cloud saving, many unique enemies, and defense towers.  Additionally, it includes a passive tree and mechanics inspired by roguelike games.  The game was developed in Java using the LibGDX framework from scratch, with original graphics, an own physics engine, and much more.', card_link: 'https://github.com/artur-weclawski/UnconqueredFortress'},
                          {card_title: 'Better Meta Chat', card_description: 'Extension written in JavaScript to chrome based browsers adding emotes to Meta communicators. This project is inspired by BetterTTV and 7tv (extensions to Twitch). Extension replaces text with emotes from 7tv. Thanks to identical chat structure it works on Facebook, Messenger and Instagram.', card_link: 'https://github.com/artur-weclawski/BetterMetaChat'},
                          {card_title: 'Yeet', card_description: 'A web page for sharing memes. The frontend is written in React.js and the backend in Java Spring. The frontend uses MUI, a React component library. As a user, you can create, edit, and delete your account, as well as add, edit, delete, and rate posts. (Note: The SQL database files used in XAMPP might be lost.)', card_link: 'https://github.com/artur-weclawski/yeet'},
                          {card_title: 'Memory game', card_description: 'Card game written in Swift. Your goal is to find pairs of cards. Game has 4 themes of cards and score system.', card_link: 'https://github.com/artur-weclawski/MemoryGame'},
                          {card_title: 'Wordle', card_description: 'Game written in Swift. Well known wordle game now on iOS mobile devices. Your goal is to guess the generated word from prepared pool.', card_link: 'https://github.com/UnluckyLuki/Wordle_Project'},
                          {card_title: 'MasterAnd', card_description: 'Game written in Kotlin. Your goal is to guess the generated color sequence. You can create local accouts to check your score across different rounds.', card_link: 'https://github.com/artur-weclawski/MasterAnd'}
                        ]

        const containerRef = useRef(null);
        const [size, setSize] = useState({ height: 0 });
        
        useEffect(() => {
        const updateSize = () => {
          if (containerRef.current) {
            setSize({
              height: containerRef.current.offsetHeight
            });
          }
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    document.documentElement.style.setProperty('--projects-height', size.height + 'px');

    return(
        <div className="projects" ref={containerRef}>

            <div className="cards">
                {projects.map((project) =>{
                    return( <Card card_title={project.card_title} card_description={project.card_description} card_link={project.card_link} /> )
                })
                }
            </div>
        </div>
    )
}

export default Projects;