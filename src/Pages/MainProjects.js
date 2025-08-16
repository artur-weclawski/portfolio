import Slider from "../Components/Slider/Slider";
import unconqueredFortressMenu from "../Components/Slider/unconquered_fortress_menu.png"
import betterMetaChat from "../Components/Slider/better-meta-chat.png"
const MainProjects = () =>{
    const slides = [{image: unconqueredFortressMenu, title: "Unconquered Fortress"},
                    {image: betterMetaChat, title: "Better Meta Chat"}
    ]
    return(
        <div className="main-projects" id='projects'>
            <div className="divider"/>
            <Slider slides={slides} />
        </div>
    )
}

export default MainProjects;