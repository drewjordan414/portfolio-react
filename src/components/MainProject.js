// import React from 'react';
// import Projects from './Projects';

// function MainProject() {
//     return (
//         <section className="gallery-section">
//             <section className="skill-section">
//                 <section className="top-banner">
//                     <img src="./assets/images/placeholder.png" className="banner-img" alt="Banner"/>
//                     <h1 className="banner-title">Main Project</h1>
//                 </section>
//                 <section className="gallery-section">
//                     <Projects
//                         url="https://github.com/drewjordan414/Plantalytics"
//                         imageUrl="./assets/images/placeholder.png"
//                         title="Plantalytics"
//                         alt="Project 1"
//                     />
//                     {/* More Project components as needed */}
//                 </section>
//             </section>
//         </section>
//     );
// }

// export default MainProject;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // add Bootstrap CSS

// Import your images
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
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={project2} alt="CTA-Train-Tracker" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={gtimeplanner} alt="GameTime Planner" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={placeholder} alt="Third slide" />
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

