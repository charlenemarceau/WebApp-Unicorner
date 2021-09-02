import React from 'react';
import Agency from '../Components/Agency/Homepage-agency';
import Header from '../Components/Header/Header-homepage';
import LineScroll from '../Components/LineScroll/LineScroll-homepage';
import Services from '../Components/Services/Services';
import Work from '../Components/Work/Work';

function homepage() {
    return (
        <div>
            < LineScroll />
            < Header />
            < Agency />
            < Services />
            < Work />
        
        </div>
    )
}

export default homepage
