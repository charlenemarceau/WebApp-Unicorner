import React from "react";


const LineScrollMobile: React.FC = () => {

    return(
        <div className="line-container">
          

            <svg className="drawing-line-small-screen" id="" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600">
                <path vector-effect="non-scaling-stroke" d="m -10,70  v -40 h -950  v 140 h 950 v -40"></path> 
                
              {/*  <path vector-effect="non-scaling-stroke" d="m -130, 1300 h 1150"></path> */}
            </svg>

            
        </div>
        
    )
            // <svg className="" id="drawing-line-large-screen" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600">
            //     <path vector-effect="non-scaling-stroke" d="m 750,200 L 750,280 H 10 V 550 h 690 L 1200,550"></path> 
            //     <path vector-effect="non-scaling-stroke" d="m 300,740 h 1000 "></path>
            //     <path vector-effect="non-scaling-stroke" d="m 300,740 v 256"></path>
            //     <path vector-effect="non-scaling-stroke" d="m 300,996 h 500 v 150 h -1000"></path> 
            //     <path vector-effect="non-scaling-stroke" d="m 348.5,720 v -37 h -203.5 v 208 h 203.5 v -37" className="wider-stroke"></path>
            //     <path vector-effect="non-scaling-stroke" d="m 578.5,861 v -37 h -203.5 v 208 h 203.5 v -37" className="wider-stroke"></path>
            //     <path vector-effect="non-scaling-stroke" d="m 828.5,1010 v -37 h -203.5 v 208 h 203.5 v -37" className="wider-stroke"></path>
            //   {/*  <path vector-effect="non-scaling-stroke" d="m -130, 1300 h 1150"></path> */}
            // </svg>
    

}
export default LineScrollMobile;