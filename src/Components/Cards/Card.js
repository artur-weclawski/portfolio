import { BsGithub } from "react-icons/bs"


const Card = ({card_title, card_description, card_link}) =>{
    return(
        <div className="card">
            <div className="card-title">
                <h2>{card_title}</h2>
            </div>
            <div className="card-description">
                <p> 
                    {card_description}
                </p>
            </div>
            <div className="card-link">
                    <a href={card_link} target="_blank" rel="noreferrer" title="Github repository."><BsGithub className='BsGithub'/></a>
            </div>
        </div>
    )
}

export default Card;