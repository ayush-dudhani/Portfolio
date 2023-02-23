import "./achievement.css";
import hashcode from "../../Assets/Achievements/hashcode.png";
import gcloud from "../../Assets/Achievements/gcloud.png";
import enduro1 from "../../Assets/Achievements/enduro lvl 1.png";
import enduro2 from "../../Assets/Achievements/enduro lvl 2.png";
import newtonion from "../../Assets/Achievements/newtonian mechanics.png";
import reactjs from "../../Assets/Achievements/reactjs.png";
import sql from "../../Assets/Achievements/sql challenge.png";
import melting from "../../Assets/Achievements/melting minds.png";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Achievement() {
  AOS.init();
  return (
    <>
      <div data-aos="fade-up" id="achievement">
        <div className="heading">
          <h1>Achievements</h1>
        </div>
        <div data-aos="fade-up" className="card-container">
          <div data-aos="fade-up" className="card">
            <img src={hashcode} alt="" height={180} width={250} />
            <p>Participated in Hash Code 2022 </p>
            <a href="https://codingcompetitions.withgoogle.com/hashcode/certificate/summary/00000000008cb4d4">
              View More
            </a>
          </div>

          <div data-aos="fade-up" className="card">
            <img src={gcloud} alt="" height={180} width={250} />
            <p>Completed 30 Days of Cloud Program </p>
            <a href="https://www.linkedin.com/posts/ayush-dudhani-00b521200_30-days-of-google-cloud-activity-6907331676176039937-LeFL?utm_source=share&utm_medium=member_desktop">
              View More
            </a>
          </div>

          <div data-aos="fade-up" className="card">
            <img src={enduro1} alt="" height={180} width={250} />
            <p>Basics Of Python Programming By ENDURO</p>
            <a href="/">View More</a>
          </div>

          <div data-aos="fade-up" className="card">
            <img src={enduro2} alt="" height={180} width={250} />
            <p>Data Analytics Using Python</p>
            <a href="/">View More</a>
          </div>

          <div data-aos="fade-up" className="card">
            <img src={newtonion} alt="" height={180} width={250} />
            <p>1st Prize in Newtonion Mechanics in FY</p>
            <a href="/">View More</a>
          </div>

          <div data-aos="fade-up" className="card">
            <img src={sql} alt="" height={180} width={250} />
            <p>3rd Prize in SQL Challenge By MMCOE, Pune</p>
            <a href="https://www.linkedin.com/posts/mmcoe-connect_department-of-information-technology-marathwada-activity-6959845274894651392--Gra?utm_source=share&utm_medium=member_desktop">
              View More
            </a>
          </div>

          <div data-aos="fade-up" className="card">
            <img src={melting} alt="" height={180} width={250} />
            <p>2nd Prize in Melting Minds Competition in SY</p>
            <a href="/">View More</a>
          </div>

          <div data-aos="fade-up" className="card">
            <img src={reactjs} alt="" height={180} width={250} />
            <p>Completed a course on ReactJS</p>
            <a href="https://www.mygreatlearning.com/academy/courses/4651527/52045#?utm_source=share_with_friends&gl_source=share_with_friends">
              View More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
