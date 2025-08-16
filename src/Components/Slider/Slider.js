import { useState, useEffect } from "react"
import "./Slider.css"
const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => 
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 20000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return(
        <div className="slider">
            <div className="sliderContainer">
                <div className="slide">
                    <div className="content">
                        {slides.map((slide, index) => (
                                <img
                                  key={index}
                                  src={slide.image}
                                  alt=""
                                  className={index === currentIndex ? "active" : ""}
                                />
                        ))}
                        <div className="description">
                            <h1>
                                {slides[currentIndex].title}
                            </h1>
                            <div className="index-container">
                                {slides.map((slide, slideIndex)=>(
                                    <div 
                                      key = {slideIndex} 
                                      className={`index ${slideIndex === currentIndex ? 'active' : ''}`} 
                                      onClick={()=>goToSlide(slideIndex)}>
                                      0{slideIndex+1}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Slider