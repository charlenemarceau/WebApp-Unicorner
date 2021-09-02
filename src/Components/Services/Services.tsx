import React from "react";


const Services: React.FC = () => {
    const textService = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
    const typeService = ['Développement Web', 'Intégration Web', 'Cloud/IoT', 'UX/UI']
    const buttonAgency = "Nos services"

    return (
        <div className="service-container">
            <div className="title-services">
                <h2>Notre expertise</h2>
            </div>
            <div className="text-services">
                {textService}
            </div>
            <div className="container-box-services">
                <div className="box"><span>{typeService[0]}</span></div>
                <div className="box"><span className="span-medium">{typeService[1]}</span></div>
                <div className="box"><span className="span-small">{typeService[2]}</span></div>
                <div className="box"><span className="span-small">{typeService[3]}</span></div>
            </div>
            <button className="btn btn-orange-color btn-medium btn-services">{buttonAgency}</button>

        </div>
    )
} 
export default Services;