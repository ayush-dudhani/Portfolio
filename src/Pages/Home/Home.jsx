import "./home.css";
import resume from "../../Assets/resume.pdf";
import Typed from "react-typed";
import photo from "../../Assets/Images/myphoto.png";
import FileSaver from "file-saver";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
    const fileSave = () => {
        FileSaver.saveAs(resume, "Ayush.pdf");
    }
    AOS.init();
  return (
    <>
      <div data-aos="fade-up" className="mainSection" id="home">
        <div className="intro">
          <div className="text1">My Name is</div>
          <div className="text2">Ayush Dudhani</div>
          <div className="text3">
            and I'm a&nbsp;
            <Typed
              strings={["Learner", "Student", "Proud Indian", "Web Developer"]}
              typeSpeed={100}
              backSpeed={60}
              loop
            ></Typed>
          </div>
          
          <div className="my-description">
            <p>
              Hello, I am Ayush, Third Year Computer Engineering Student. I am
              always ready to learn something new! Open Source excites me the
              most. Happy to share and gain knowledge. Love to work in teams!
              Believe in team work!
            </p>
          </div>
        </div>

        <div className="aboutMe">
          <div className="image-icon">
            <img src={photo} alt="Ayush Dudhani" id="photo" />
          </div>
          <button id="downloadCV" type="button" value="DownloadCV" onClick={fileSave}>
            Download CV
          </button>
        </div>
        
      </div>
    </>
  );
}
