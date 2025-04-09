import Slider from "../Components/Slider/Slider";
import "../Components/Cards/Cards.css"
import unconqueredFortress from "../Components/Cards/gameIcon.png"
import { BsGithub } from "react-icons/bs"
import unconqueredFortressMenu from "../Components/Slider/unconquered_fortress_menu.png"
import yeetHomePage from "../Components/Slider/yeet_home_page.png"
const Projects = () =>{
    const slides = [{image: unconqueredFortressMenu, title: "Unconquered Fortress", description: "A Tower Defense game created for an engineering thesis by a two-person group. It features procedurally generated levels, cloud saving, many unique enemies, and defense towers. Additionally, it includes a passive tree inspired by roguelike games. The game was developed in Java using the LibGDX framework from scratch, with original graphics, a custom physics engine, and much more."},
        {image: yeetHomePage, title: "Yeet - web page", description: "A web page for sharing memes. You can create and edit your profile, add, view, and rate posts. You can also delete posts and your account. The React.JS framework was used as frontend along with the libraries attached to it. The graphic design and user interface were created using MUI (Material UI). Backend was made on the basis of the Spring programming framework. The JWT Token was used to authorize user actions. The CORS mechanism was used to inform the browser whether the requested data should be made available to the client. Most of the data is validated by the server. For this purpose, validation methods as well as own exceptions have been prepared to return appropriate messages from the server. In order to reduce the volume of the code, annotation from the Lombok library was used. The DTO (Data Transfer Object) pattern was also used to effectively transfer data between application layers. Additionally, for optimal data access management, I used the DAO (Data Access Object) pattern. As the database was used MySQL."}
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
                        <p> 
                            A Tower Defense game created for an engineering thesis. 
                            It features procedurally generated levels, cloud saving, many unique enemies, and defense towers. 
                            Additionally, it includes a passive tree inspired by roguelike games. 
                            The game was developed in Java using the LibGDX framework from scratch, with original graphics, a custom physics engine, and much more. 
                            Credits to @zomsik for creating the official repository on GitHub.
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
                        <p> 
                            A web page for sharing memes created as a college project. 
                            The frontend is written in React.js and the backend in Java Spring. 
                            The frontend uses MUI, a React component library. As a user, you can create, edit, and delete your account, as well as add, edit, delete, and rate posts.

                            (Note: The SQL database files used in XAMPP might be lost.)
                        </p>
                        <div className="card-links-one">
                            <a href="https://github.com/artur-weclawski/yeet" target="_blank" rel="noreferrer" title="Yeet - Web App"><BsGithub className='BsGithub'/></a>
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
                            Another college project: a game created during classes. 
                            Your goal is to find all pairs of hidden cards.
                        </p>
                        <div className="card-links-one">
                            <a href="https://github.com/artur-weclawski/MemoryGame" target="_blank" rel="noreferrer" title="Original repository."><BsGithub className='BsGithub'/></a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <h2 style={{fontFamily:'Bungee Hairline', fontWeight:'bold', fontVariant: 'small-caps'}}>Wordle - Swift</h2>
                        <p style={{fontFamily:'Bungee Hairline', fontWeight:'bold', fontSize: '5rem'}}>Wordle</p>
                    </div>
                    <div className="card-description">
                        <h2 style={{fontFamily:'Bungee Hairline', fontWeight:'bold', fontVariant: 'small-caps'}}>Wordle</h2>
                        <p>
                            Another college project created by two-person group: a game created as a final project in Swift. 
                            Your goal is to guess the generated word.
                        </p>
                        <div className="card-links-one">
                            <a href="https://github.com/UnluckyLuki/Wordle_Project" target="_blank" rel="noreferrer" title="Original repository."><BsGithub className='BsGithub'/></a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <h2 style={{fontFamily:'Bungee Hairline', fontWeight:'bold', fontVariant: 'small-caps'}}>MasterAnd - Kotlin</h2>
                        <p style={{fontFamily:'Bungee Hairline', fontWeight:'bold', fontSize: '3.5rem'}}>MasterAnd</p>
                    </div>
                    <div className="card-description">
                        <h2 style={{fontFamily:'Bungee Hairline', fontWeight:'bold', fontVariant: 'small-caps'}}>MasterAnd</h2>
                        <p>
                            Another college project: a game created as a final project in Kotlin. 
                            Your goal is to guess the generated color sequence.
                            You can create local accout to check your score across different rounds.
                        </p>
                        <div className="card-links-one">
                            <a href="https://github.com/artur-weclawski/MasterAnd" target="_blank" rel="noreferrer" title="Original repository."><BsGithub className='BsGithub'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;