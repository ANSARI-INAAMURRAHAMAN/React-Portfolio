import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/Job_search.webp";
import projImg2 from "../assets/img/Music.webp";
import projImg3 from "../assets/img/PortFolio template.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {githubLink && (
            <div className="mt-3">
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </Col>
  )
}

export const Projects = () => {
  const projects = [
    {
      title: "JOB Search and Recruitments",
      description: "Website",
      imgUrl: projImg1,
      githubLink: "https://github.com/ANSARI-INAAMURRAHAMAN/JOB_Search_and_Recruitments_IITISOC2024"
    },
    {
      title: "Music",
      description: "Front-end-website",
      imgUrl: projImg2,
      githubLink: "https://github.com/ANSARI-INAAMURRAHAMAN/Mjor-Project-1-"
    },
    {
      title: "Portfolio",
      description: "Front-end",
      imgUrl: projImg3,
      githubLink: "https://github.com/ANSARI-INAAMURRAHAMAN/Project"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      githubLink: "https://github.com/yourusername/startup-project-4"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      githubLink: "https://github.com/yourusername/startup-project-5"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      githubLink: "https://github.com/yourusername/startup-project-6"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My projects showcase my passion for web development and problem-solving. Using technologies like React and Express.js, I’ve built user-friendly applications that address real-world needs. Each project reflects my commitment to creating functional and impactful digital solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="blank"></img>
    </section>
  )
}