// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../assets/MainProject.css';

// import project2 from '../assets/images/project2.png';
// import gtimeplanner from '../assets/images/gtimeplanner.png';
// import placeholder from '../assets/images/placeholder.png';

// function MainProject() {
//     return (
//         <section className="gallery-section">
//             <section className="skill-section">
//                 <section className="top-banner">
//                     <h1 className="banner-title">Projects</h1>
//                 </section>
//                 <section className="gallery-section">
//                     <div id="carouselExampleControls" className="carousel slide carousel-custom" data-ride="carousel">
//                         <div className="carousel-inner">
//                             <div className="carousel-item active">
//                                 <img className="d-block w-100" src={project2} alt="CTA-Train-Tracker" />
//                                 <div className="carousel-caption d-none d-md-block carousel-caption-custom">
//                                     <h5>CTA Train Tracker</h5>
//                                     <p>Description for CTA Train Tracker</p>
//                                 </div>
//                             </div>
//                             <div className="carousel-item">
//                                 <img className="d-block w-100" src={gtimeplanner} alt="GameTime Planner" />
//                                 <div className="carousel-caption d-none d-md-block carousel-caption-custom">
//                                     <h5>GameTime Planner</h5>
//                                     <p>Description for GameTime Planner</p>
//                                 </div>
//                             </div>
//                             <div className="carousel-item">
//                                 <img className="d-block w-100" src={placeholder} alt="Third slide" />
//                                 <div className="carousel-caption d-none d-md-block carousel-caption-custom">
//                                     <h5>Title for Third Slide</h5>
//                                     <p>Description for Third Slide</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//                             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                             <span className="sr-only">Previous</span>
//                         </a>
//                         <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//                             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                             <span className="sr-only">Next</span>
//                         </a>
//                     </div>
//                 </section>
//             </section>
//         </section>
//     );
// }

// export default MainProject;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/MainProject.css';

import project2 from '../assets/images/project2.png';
import gtimeplanner from '../assets/images/gtimeplanner.png';
import placeholder from '../assets/images/placeholder.png';

function MainProject() {
    return (
        <section className="gallery-section">
            <section className="skill-section">
                <section className="top-banner">
                    <h1 className="banner-title">Projects</h1>
                </section>
                <section className="gallery-section">
                    <div id="carouselExampleControls" className="carousel slide carousel-custom">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={project2} alt="CTA-Train-Tracker" />
                                <div className="carousel-caption d-none d-md-block carousel-caption-custom">
                                    <h5>CTA Train Tracker</h5>
                                    <p>Description for CTA Train Tracker</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={gtimeplanner} alt="GameTime Planner" />
                                <div className="carousel-caption d-none d-md-block carousel-caption-custom">
                                    <h5>GameTime Planner</h5>
                                    <p>Description for GameTime Planner</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={placeholder} alt="Third slide" />
                                <div className="carousel-caption d-none d-md-block carousel-caption-custom">
                                    <h5>Title for Third Slide</h5>
                                    <p>Description for Third Slide</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </section>
            </section>
        </section>
    );
}

export default MainProject;


