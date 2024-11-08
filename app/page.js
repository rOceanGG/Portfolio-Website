"use client"
import { useState } from "react";
import Image from "next/image";

export default function Home() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMenuOpen(!menuOpen);
    }   

  return (
    <>
      <header>
        <a href ="#" className="logo-holder">
            <div className = "logo">RGG</div>
            <div className = "logo-text">Portfolio Website</div>
        </a>
        <nav>
            <ul id="menu" className ={menuOpen ? "active" : ""}>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="mailto: roshangg@gmail.com" className = "Button">Contact Me</a>
                </li>
            </ul>
            <a href="#" className="mobile-toggle"
            onClick={toggleMobileMenu}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
                </svg>

            </a>
        </nav>
    </header>
    <main>
        <section className="hero container">
            <div className="hero-blue">
                <h1><small>Hi, I'm</small>
                    Roshan Gani Ganithi
                </h1>
                <p>
                    Aspiring Intern with substantial internship experience in Quality Assurance and insight across various fields from
                    computer aided manufacturing to financial solutions. Studying Computer Science at UCL and adept with multiple
                    programming languages including Java, Python, and SQL. Proven track record in teaching programming, showcasing strong
                    communication, team collaboration, and problem-solving abilities. Looking to leverage academic knowledge and practical
                    experience to contribute effectively to software development projects.
                </p>
                <div className = "call-to-action">
                    <a href="./imgs/Resume.pdf" className = "button">
                        View Resume
                    </a>
                    <a href="mailto:roshangg@gmail.com" className="button">
                        Contact Me
                    </a>
                </div>
                <div className = "social-links">
                    <a href="https://www.linkedin.com/in/roshangg">
                        <img src="./imgs/icons8-linkedin-48.png" alt="LinkedIn"/>
                    </a>
                    <a href="https://github.com/rOceanGG">
                        <img src="./imgs/github-mark.png" alt="GitHub" width = "48px" />
                    </a>
                </div>
            </div>
            <div className="hero-yellow">
                <img src="./imgs/portrait.png" alt="RGG" width= "200%" />
            </div>
        </section>
        <section className="logos container">
            <div className = "marquee">
                <div className = "track">
                    <img src = "./imgs/python-logo.png" alt = "Python" width="100"/>
                    <img src = "./imgs/java-logo-1.png" alt = "Java" width="100"/>
                    <img src = "./imgs/javascript-logo.png" alt = "JavaScript" width="100"/>
                    <img src="./imgs/kotlin-logo.png" alt="Kotlin" width="100" />
                    <img src = "./imgs/mysql-logo-1.png" alt = "SQL" width="100"/>
                    <img src = "./imgs/git-logo.png" alt = "Git" width = "100"/>
                    <img src = "./imgs/c-logo.svg" alt = "C" width="100"/>
                    <img src = "./imgs/cpp-logo.png" alt = "C++" width="100"/>
                    <img src = "./imgs/css3-logo.png" alt = "CSS3" width="100"/>
                    <img src="./imgs/html-logo.png" alt="HTML" width="100" />

                    <img src="./imgs/python-logo.png" alt="Python" width="100" />
                    <img src="./imgs/java-logo-1.png" alt="Java" width="100" />
                    <img src="./imgs/javascript-logo.png" alt="JavaScript" width="100" />
                    <img src="./imgs/kotlin-logo.png" alt="Kotlin" width="100" />
                    <img src="./imgs/mysql-logo-1.png" alt="SQL" width="100" />
                    <img src="./imgs/git-logo.png" alt="Git" width="100" />
                    <img src="./imgs/c-logo.svg" alt="C" width="100" />
                    <img src="./imgs/cpp-logo.png" alt="C++" width="100" />
                    <img src="./imgs/css3-logo.png" alt="CSS3" width="100" />
                    <img src="./imgs/html-logo.png" alt="HTML" width="100" />
                </div>
            </div>
        </section>
        <section id = "skills" className="skills container">
            <h2>
                <small>About me</small>
                Skills
            </h2>
            <div className = "holder-blue">
                <div className = "left-column">
                    <h3>Programming Languages</h3>
                    <ul>
                        <li>Python</li>
                        <li>Java</li>
                        <li>SQL</li>
                        <li>Kotlin</li>
                        <li>C</li>
                        <li>C++</li>
                        <li>JavaScript</li>
                    </ul>
                    <h3>Spoken Languages</h3>
                    <ul>
                        <li>English - Native</li>
                        <li>Tamil - Native</li>
                        <li>Spanish - Intermediate</li>
                        <li>Russian - Basic</li>
                    </ul>
                </div>
                <div className="right-column">
                    <h3> A bit about me</h3>
                    <p>Hi, I'm Roshan and I am a second year computer science student at University College London. In my free time I enjoy problem solving on platforms like Leetcode and Hackerrank to improve my technical knowledge,
                         while also taking part in leisure activities to keep myself healthy. This includes long distance running; I regularly run 10ks and so far my best achivement has been 3 10ks in 3 days,
                         all with runtimes below an hour. Aside from that, I take part in UCL Dodgeball where I am a regular member of the society. I also am an avid follower of Formula One and e-sports such as CS2. 
                         I also play VALORANT in university leagues, representing UCL Gaming.
                    </p>
                    <p>
                        My current project is a machine learning classification model that, once completed, will be able to recognise Forumala One drivers. The technologies that I am using are: python, git, and opencv.
                    </p>
                </div>
            </div>
        </section>
        <section id = "experience" className = "work-experience container">
            <h2>
                Work Experience
            </h2>
            <div className = "jobs">
                <article>
                    <div className = "left-column">
                        <img src="./imgs/cloudnc-logo.png" alt="CloudNC" width="25%"/>
                    </div>
                    <div className = "right-column">
                        <h3>Quality Assurance Intern</h3>
                        <div>April 2024</div>
                        <ul>
                            <li>Learned methodologies and processes for testing CAM software, ensuring reliability and performance, which
                                improved
                                understanding of quality assurance practices</li>
                            <li>Gained insight into software development team dynamics and collaboration, enhancing my teamwork and
                                communication skills</li>
                            <li>Developed an understanding of designing and manufacturing products using Fusion360, which improved my technical
                                skills
                                in CAD software</li>
                        </ul>
                    </div>
                </article>
                <br></br>
                <article>
                    <div className="left-column">
                        <img src="./imgs/ubs-logo.png" alt="UBS" width="30%"/>
                    </div>
                    <div className="right-column">
                        <h3>Finance Intern</h3>
                        <div>June 2022 - July 2022</div>
                        <ul>
                            <li>Shadowed employees across various fields, gaining valuable industry knowledge and experience</li>
                            <li>Developed an understanding of Quantitative Investment Solutions, Foreign Exchange, Global Markets, and Wealth
                                Management, enhancing my financial acumen</li>
                            <li>Learned to work both independently and collaboratively, improving my teamwork and self-management skills</li>
                        </ul>
                    </div>
                </article>
                <br></br>
                <article>
                    <div className="left-column">
                        <img src="./imgs/sutton-logo.png" alt="Sutton" width="25%"/>
                    </div>
                    <div className="right-column">
                        <h3>Programming Teacher</h3>
                        <div>February 2022 - April 2022</div>
                        <ul>
                            <li>Taught a Python programming course at the local library over a 10-week period, empowering community members with
                                coding
                                skills and enhancing digital literacy</li>
                            <li>Designed and delivered a course for beginners of all ages to learn Python</li>
                            <li>Developed skills in presenting ideas, acting on criticism, and thinking proactively, leading to improved
                                teaching
                                effectiveness</li>
                        </ul>
                    </div>
                </article>
                <br></br>
                <article>
                    <div className="left-column">
                        <img src="./imgs/tutoring-logo.png" alt="Tutoring" width="25%"/>
                    </div>
                    <div className="right-column">
                        <h3>Private Tutor</h3>
                        <div>January 2021 - Present</div>
                        <ul>
                            <li>Developed strong communication and interpersonal skills through one-on-one interaction with students.</li>
                            <li>Enhanced problem-solving abilities by adapting teaching methods to suit individual learning styles and needs.</li>
                            <li>Cultivated patience and empathy while guiding students through challenging concepts.</li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
        <section id = "projects" className="projects container">
            <h2>
                <small>
                    Previously
                </small>
                Completed Projects
            </h2>
            <div className = "built">
                <article>
                    <div className="left-column">
                        <img src="./imgs/tetris-logo.jpg" alt="Tetris" width="25%"/>
                    </div>
                    <div className="right-column">
                        <h3>Tetris Autoplayer - Python, Pygame</h3>
                        <ul>
                            <li>Mastered Python programming language, employing advanced concepts and libraries to develop a Tetris autoplayer with
                                heuristic-based decision-making.</li>
                            <li>Cultivated collaboration and teamwork skills by soliciting feedback and incorporating suggestions from peers to
                                enhance
                                the autoplayer's performance.</li>
                        </ul>
                    </div>
                </article>
                <br></br>
                <article>
                    <div className="left-column">
                        <img src="./imgs/gym-logo.png" alt="Gym" width="25%"/>
                    </div>
                    <div className="right-column">
                        <h3>Gym Planner - Java, SQL, JDBC</h3>
                        <ul>
                            <li>Demonstrated expertise in algorithm design and optimisation through implementation of the Gale-Shapley algorithm for
                            matching preferences efficiently.</li>
                            <li>Developed an understanding of graph theory and its applications in real-world scenarios, such as resource allocation and
                            scheduling.</li>
                            <li>
                                Acquired experience in software design principles and modular development, ensuring the scalability and maintainability
                                of the gym timetable builder.

                            </li>
                            <li>Developed skills in database management, encompassing tasks such as querying, updating and optimising database
                            performance.</li>
                        </ul>
                    </div>
                </article>
                <br></br>
                <article>
                    <div className="left-column">
                        <img src="./imgs/convex-hull.png" alt="Convex Hull" width="25%"/>
                    </div>
                    <div className="right-column">
                        <h3>Algorithm Analysis - Python, MatPlotLib</h3>
                        <ul>
                            <li>Implemented multiple convex hull algorithms (Jarvis March, Graham Scan, Chan) for the purpose of comparing their
                            computational efficiency on various datasets.</li>
                            <li>Made use of data visualisation tools to graphically represent the convex hulls and benchmark results, enhancing the
                            clarity of performance comparisons</li>
                        </ul>
                    </div>
                </article>
            </div>
        <h2><small> Depending on how you feel towards HTML and CSS, this website may or may not count as a project</small></h2>
        </section>
    </main>
    </>
  );
}
