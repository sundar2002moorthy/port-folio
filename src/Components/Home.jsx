import React from "react";
import profile from "../assets/profile.png";
import linkedin from "../assets/linkedin.png";
import experience from "../assets/experience.png";
import github from "../assets/github.png";
import resume from "../assets/kishore.pdf";
import me from "../assets/about.jpg";
import degree from "../assets/education.png";
import arrow from "../assets/arrow.png";
import check from "../assets/checkmark.png";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import mail from "../assets/email.png";

const Home = () => {
  const handleGithubClick = () => {
    window.open("https://github.com/Kishore174");
  };

  const handleResumeClick = () => {
    window.open(resume);
  };
  const handleLinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BvO1%2BWvbxTLKVEI%2FtlL4%2Btg%3D%3D"
    );
  };
  return (
    <div>
      <nav id="desktop-nav">
        <div class="logo">Portfolio</div>
        <div>
          <ul class="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div class="logo">kishore</div>
        <div class="hamburger-menu">
          <div class="hamburger-icon" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="menu-links">
            <li>
              <a href="#about" onclick="toggleMenu()">
                About
              </a>
            </li>
            <li>
              <a href="#experience" onclick="toggleMenu()">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onclick="toggleMenu()">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onclick="toggleMenu()">
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div class="section__pic-container">
          <img src={profile} alt="Kishore's profile picture" />
        </div>
        <div class="section__text">
          <p class="section__text__p1">Hello, I'm</p>
          <h1 class="title">Kishore</h1>
          <p class="section__text__p2">Frontend Developer</p>
          <div class="btn-container">
            <button class="btn btn-color-2" onClick={handleResumeClick}>
              Download CV
            </button>
            <a href="#contact">
              <button class="btn btn-color-1" Contact>
                Contact Info
              </button>
            </a>
          </div>
          <div id="socials-container">
            <img
              src={linkedin}
              alt="My LinkedIn profile"
              class="icon"
              onClick={handleLinkedinClick}
            />
            <img
              src={github}
              alt="My Github profile"
              class="icon"
              onClick={handleGithubClick}
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p class="section__text__p1">Get To Know More</p>
        <h1 class="title">About Me</h1>
        <div class="section-container">
          <div class="section__pic-container">
            <img src={me} alt="Profile picture" class="about-pic" />
          </div>
          <div class="about-details-container">
            <div class="about-containers">
              <div class="details-container">
                <img src={experience} alt="Experience icon" class="icon" />
                <h3>Experience</h3>
                <p>
                  Completed Internship In <br />
                  Full Stack Developer
                </p>
              </div>
              <div class="details-container">
                <img src={degree} alt="Education icon" class="icon" />
                <h3>Education</h3>
                <p>B.E Computer Science Bachelors Degree</p>
              </div>
            </div>
            <div class="text-container">
              <p>
               
As a front-end developer specializing in React and Tailwind CSS, I bring a passion for creating engaging and responsive user interfaces. With a keen eye for design and a dedication to crafting seamless user experiences, I thrive on turning innovative ideas into reality. My expertise lies in leveraging modern web technologies to build dynamic and visually appealing websites and applications.
              </p>
            </div>
          </div>
        </div>
        <a href="#experience">
          <img src={arrow} alt="Arrow icon" class="icon arrow" />
        </a>
      </section>
      <section id="experience">
        <p class="section__text__p1">Explore My</p>
        <h1 class="title"> Skills & Experience</h1>
        <div class="experience-details-container">
          <div class="about-containers">
            <div class="details-container">
              <h2 class="experience-sub-title">Skills</h2>
              <div class="article-container">
                <article>
                  <img src={check} alt="Experience icon" class="icon" />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={check} alt="Experience icon" class="icon" />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={check} alt="Experience icon" class="icon" />
                  <div>
                    <h3>TailwindCss</h3>
                    <p>Experienced </p>
                  </div>
                </article>
                <article>
                  <img src={check} alt="Experience icon" class="icon" />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={check} alt="Experience icon" class="icon" />
                  <div>
                    <h3>React</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={check} alt="Experience icon" class="icon" />
                  <div>
                    <h3>Java</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
            <div class="details-container">
              <h2 class="experience-sub-title">Frontend Development</h2>
              <div class="article-container">
                <article>
                  <img src={check} alt="Experience icon" class="icon" />
                  <div>
                    <h3>Reactjs</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={check} alt="Experience icon" class="icon" />
                  <div>
                    <h3>TailwindCss</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={check} alt="Experience icon" class="icon" />
                  <div>
                    <h3>Express JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={check} alt="Experience icon" class="icon" />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <a href="#projects">
          <img src={arrow} alt="Arrow icon" class="icon arrow" />
        </a>
      </section>
      <section id="projects">
        <p class="section__text__p1">Browse My Recent</p>
        <h1 class="title">Projects</h1>
        <div class="experience-details-container">
          <div class="about-containers">
            <div class="details-container color-container">
              <div class="article-container">
                <img src={project1} alt="Project 1" class="project-img" />
              </div>
              <h2 class="experience-sub-title project-title">Project One</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button>
                {/* <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Live Demo
                </button> */}
              </div>
            </div>
            <div class="details-container color-container">
              <div class="article-container">
                <img src={project2} alt="Project 2" class="project-img" />
              </div>
              <h2 class="experience-sub-title project-title">Project Two</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button>
                {/* <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Live Demo
                </button> */}
              </div>
            </div>
            <div class="details-container color-container">
              <div class="article-container">
                <img src={project3} alt="Project 3" class="project-img" />
              </div>
              <h2 class="experience-sub-title project-title">Project Three</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button>
                {/* <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Live Demo
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <a href="#contact">
          <img src={arrow} alt="Arrow icon" class="icon arrow" />
        </a>
      </section>
      <section id="contact">
        <p class="section__text__p1">Get in Touch</p>
        <h1 class="title">Contact Me</h1>
        <div class="contact-info-upper-container">
          <div class="contact-info-container">
            <img
              src={mail}
              alt="Email icon"
              class="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:examplemail@gmail.com">skishore174@gmail.com</a>
            </p>
          </div>
          <div class="contact-info-container">
            <img src={linkedin} alt="LinkedIn icon" class="icon contact-icon" />
            <p>
              <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BvO1%2BWvbxTLKVEI%2FtlL4%2Btg%3D%3D">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div class="nav-links-container">
            <ul class="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2024 Kishore. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
