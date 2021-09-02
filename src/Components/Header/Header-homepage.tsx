import React from "react";
import { useTypedTitle } from './UsedTypedTitle';



// variable for the title and services for the animated title
const mainTitle = "Faite nous confiance pour donner vie à votre ";
const titles = ['site vitrine', 'application web'];

// variable for the text after header
const catchyText = "Les experts de notre agence de développement mettent leurs compétences au service de vos idées. Repoussez les limites de votre projet.";


const Header: React.FC = () => {
    const {typedTitle, selectedTitle} = useTypedTitle(titles);

    return (
        <div className="main-container">
            <div className="header-container">
                <div className="header-title">
                    <h1>{mainTitle} <span className="TypedTitle blinking-cursor" aria-label={selectedTitle}>&nbsp;{typedTitle}</span></h1>
                </div>
            </div>
            <div className="text-h3-header"><h4>{catchyText}</h4></div>
        </div>
    )
}
export default Header;