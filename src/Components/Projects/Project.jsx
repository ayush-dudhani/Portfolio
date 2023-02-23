import "./project.css";
import weather from "../../Assets/Projects/weather-app.png";
import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";
import project3 from "../../Assets/Projects/project3.png";
import AOS from "aos";
import 'aos/dist/aos.css';
export default function Project() {
    AOS.init();
    return (
        <>
        <div data-aos="fade-up" id="project">
        <div data-aos="fade-up" className="heading">
            <h1>Projects</h1>
        </div>
        <div data-aos="fade-up" className="project-card-container" >
            <div data-aos="fade-up" className="project-card">
                <img src={project1} alt="" height={180} width={300}/>
                <div className="project-card-subcontainer">
                <p>Hospital Management System in C</p>
                <a href="/">Checkout</a>
                </div>
            </div>

            <div data-aos="fade-up" className="project-card">
                <img src={project2} alt="" height={180} width={300}/>
                <div className="project-card-subcontainer">
                <p>Grocery Management System in C++</p>
                <a href="/">Checkout</a>
                </div>
            </div>

            <div data-aos="fade-up" className="project-card">
                <img src={project3} alt="" height={180} width={300}/>
                <div className="project-card-subcontainer">
                <p>Grocery Management System in Java</p>
                <a href="/">Checkout</a>
                </div>
            </div>

            <div data-aos="fade-up" className="project-card">
                <img src={weather} alt="" height={180} width={300}/>
                <div className="project-card-subcontainer">
                <p>Weather-WebApp using OpenWeatherAPI</p>
                <a href="/">Checkout</a>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}