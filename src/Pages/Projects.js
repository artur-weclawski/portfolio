import Slider from "../Components/Slider/Slider";

const Projects = () =>{
    const slides = [{url: "", title: "image-1"},
        {url: "", title: "image-2"},
        {url: "", title: "image-3"}
    ]
    return(
        <div className="Projects">
            <div className='slider'>
                <Slider slides={slides} />
            </div>
        </div>
    )
}

export default Projects;