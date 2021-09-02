import React from "react";
import Avatar from "../../img/Rectangle 306@2x.png"
// import { OrangeButton } from './assets/orange-button';


const titleAgency = "L'agence Unicorner";
const textAgency = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.";
const buttonAgency = "Découvrir l'agence"


const Agency: React.FC = () => {
    
    return (
        <div className="main-container">
            <div className="title-agency">
                <h2>{titleAgency}</h2>
            </div>
            <div className="text-agency">
                <p>{textAgency}</p>
            </div>
            <button className="btn btn-orange-color btn-medium btn-agency">{buttonAgency}</button>
            
            <figure>
            {/* <div className="masque-hover">Blablabla</div> */}
            <img src={Avatar} className="img-1" alt="" />   
            </figure>
            <img src={Avatar} className="img-2" alt="" />   
            <img src={Avatar} className="img-3" alt="" />   
        </div>
    )
} 
export default Agency;