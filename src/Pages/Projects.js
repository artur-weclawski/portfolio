import Slider from "../Components/Slider/Slider";
import "../Components/Cards/Cards.css"
import unconqueredFortress from "../Components/Cards/gameIcon.png"
import { BsGithub } from "react-icons/bs"
import unconqueredFortressMenu from "../Components/Slider/unconquered_fortress_menu.png"
import yeetHomePage from "../Components/Slider/yeet_home_page.png"
const Projects = () =>{
    const slides = [{image: unconqueredFortressMenu, title: "Unconquered Fortress", description: "A Tower Defense game created for engineering thesis. Procedurally generated levels, cloud saving, many unique enemies and defense towers. And of course, a passive tree straight from roguelike game. Game was created in Java with LibGDX framework from scratch with own graphics, physics engine and much more. Credits to @zomsik for making official repository on github."},
        {image: yeetHomePage, title: "Yeet - web page", description: "Web page with memes created as college project. Frontend written in React.js and backend in Java Spring. For frontend was used MUI: React component library. As user you can create, edit and delete your account as well as posts and score them."}
    ]
    return(
        <div className="Projects">
            <div className='slider'>
                <Slider slides={slides} />
            </div>
            <div className="cards">
                <div className="card">
                    <div className="card-image">
                        <h2 style={{fontFamily:'Common Pixel', fontWeight:'100'}}>Unconquered Fortress</h2>
                        <img src={unconqueredFortress} alt="gameIcon"/>
                    </div>
                    <div className="card-description">
                        <h2 style={{fontFamily:'Common Pixel', fontWeight:'100'}}>Unconquered Fortress</h2>
                        <p> A Tower Defense game created for engineering thesis.
                            Procedurally generated levels, cloud saving, many unique enemies and defense towers.
                            And of course, a passive tree straight from roguelike game.
                            Game was created in Java with LibGDX framework from scratch with own graphics, physics engine and much more.
                            Credits to @zomsik for making official repository on github. 
                        </p>
                        <div className="card-links">
                            <a href="https://github.com/artur-weclawski/Projekt_Game" target="_blank" rel="noreferrer" title="Original repository."><BsGithub className='BsGithub'/></a>
                            <a href="https://github.com/zomsik/Unconquered-Fortress" target="_blank" rel="noreferrer" title="Repository fixed by @zomsik."><BsGithub className='BsGithub'/></a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <h2 style={{fontFamily:'Bungee Hairline', fontWeight:'bold', fontVariant: 'small-caps'}}>Yeet - web page</h2>
                        <p style={{fontFamily:'Bungee Hairline', fontWeight:'bold', fontSize: '6rem'}}>YEET</p>
                    </div>
                    <div className="card-description">
                        <h2 style={{fontFamily:'Bungee Hairline', fontWeight:'bold', fontVariant: 'small-caps'}}>YEET</h2>
                        <p> Web page with memes created as college project.
                            Frontend written in React.js and backend in Java Spring.
                            For frontend was used MUI: React component library.
                            As user you can create, edit and delete your account as well as posts and score them.

                            (I think that I lost database files, there was SQL database in Xampp.)
                            
                        </p>
                        <div className="card-links">
                            <a href="https://github.com/artur-weclawski/yeet-frontend" target="_blank" rel="noreferrer" title="Frontend"><BsGithub className='BsGithub'/></a>
                            <a href="https://github.com/artur-weclawski/yeet_backend" target="_blank" rel="noreferrer" title="Backend"><BsGithub className='BsGithub'/></a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <h2 style={{fontFamily:'Bungee Hairline', fontWeight:'bold', fontVariant: 'small-caps'}}>Memory game - Swift</h2>
                        <p style={{fontFamily:'Bungee Hairline', fontWeight:'bold', fontSize: '5rem'}}>Memory Game</p>
                    </div>
                    <div className="card-description">
                        <h2 style={{fontFamily:'Bungee Hairline', fontWeight:'bold', fontVariant: 'small-caps'}}>Memory Game</h2>
                        <p>
                            Another college project. Game created during classes. 
                            Your goal is to find all pairs of hidden cards.
                        </p>
                        <div className="card-links-one">
                            <a href="https://github.com/artur-weclawski/MemoryGame" target="_blank" rel="noreferrer" title="Original repository."><BsGithub className='BsGithub'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;