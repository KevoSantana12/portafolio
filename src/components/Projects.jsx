import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/todoList.png";
import projImg2 from "../assets/img/tictactoe.webp";
import projImg3 from "../assets/img/poke.webp";
import projImg4 from "../assets/img/projImg4.webp";
import projImg5 from "../assets/img/project-img5.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Planilla Plus",
      description: "Final scholar project created with python, mySQL and boobstrap to manage your payroll , in this application you can create an account, CRUD employees, create PDF'S and send emails and deployed with Render, Clever Cloud and Docker Hub",
      imgUrl: projImg5,
      url: "https://proyecto-progra-lastest.onrender.com"
    },
    {
      title: "PokeIndex",
      description: "Project created with react js which use the public pokemon api and deployed with Azure",
      imgUrl: projImg3,
      url: "https://white-mud-03cafba0f.5.azurestaticapps.net/"
    },
    {
      title: "Tic Tac Toe",
      description: "Project created with react js and deployed with Azure",
      imgUrl: projImg2,
      url: "https://happy-sand-0bd46df0f.5.azurestaticapps.net"
    }, 
    {
      title: "ToDo List",
      description: "Project created with react js and deployed with Azure",
      imgUrl: projImg1,
      url: "https://wonderful-rock-08186300f.5.azurestaticapps.net"
    }
    ,
    {
      title: "Tipo de cambio (Dollar exchange)",
      description: "Scholar project created with python using an external BCR API (Bank of Costa Rica) to see the actual currency exchange (Colons - Dollar) and deployed with Render and docker hub",
      imgUrl: projImg4,
      url: "https://tarea-2-latest.onrender.com/"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              // {isVisible ? "animate__animated animate__fadeIn": ""}
              <div className="">
                <h2>Projects</h2>
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
                  {/* "animate__animated animate__slideInUp" : "" */}
                  <Tab.Content id="slideInUp" className="">
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
                    <Tab.Pane eventKey="second">
                        <p>More projects will come soon!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <p>More projects will come soon!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
