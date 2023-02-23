import "./footer.css";
// import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
// import { BsGithub, BsTwitter } from "react-icons/bs";
// import leetcodelogo from "https://icons8.com/icon/wDGo581Ea5Nf/level-up-your-coding-skills-and-quickly-land-a-job";
import { SocialIcon } from "react-social-icons";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

export default function Footer() {
    AOS.init();
  return (
    <>
    <div className="main-container">

    <div data-aos="fade-up" className="heading">
          <h1>Coding Profile</h1>
        </div>
        <div data-aos="fade-up" className="competitive-links">
            <a href="https://leetcode.com/dudhaniayush/" target="_blank" rel="noreferrer">
          <img
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/36/null/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png"
            alt="leetcode"
          />
          </a>
          <a href="https://www.codechef.com/users/dudhaniayush" target="_blank" rel="noreferrer">
          <img
            src="https://img.icons8.com/color/36/null/codechef.png"
            alt="codechef"
          />
          </a>
          <a href="https://www.hackerrank.com/dudhaniayush" target="_blank" rel="noreferrer">
          <img
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/36/null/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png"
            alt="hackerrank"
          />
          </a>
        </div>


      <div data-aos="fade-up" className="heading">
        <h1>Let's Connect</h1>
      </div>
      <div data-aos="fade-up" className="footer-container" id="foot-container">
        <div className="social-links">
          <SocialIcon url="https://twitter.com/ayush_dudhani" target="_blank" />
          <SocialIcon
            url="https://www.instagram.com/ayush_dudhani/"
            target="_blank"
          />
          <SocialIcon
            url="https://github.com/ayush-dudhani"
            bgColor="white"
            target="_blank"
          />
          <SocialIcon
            url="https://in.linkedin.com/in/ayush-dudhani-00b521200"
            bgColor="#0a66c2"
            target="_blank"
          />
          <SocialIcon url="mailto:dudhaniayush05@gmail.com" target="_blank" />
        </div>
        </div>
        
        <div className="footer">
            <p> &#169; Ayush Dudhani</p>
        </div>
      </div>
      
    </>
  );
}
