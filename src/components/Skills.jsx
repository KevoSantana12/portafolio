import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src="https://www.vectorlogo.zone/logos/angular/angular-icon.svg" alt="Image" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="Image" />
                                <h5>Spring Boot</h5>
                            </div>
                            <div className="item">
                              <img src={meter3}/>
                              <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src="https://www.vectorlogo.zone/logos/docker/docker-tile.svg" alt="Image" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" alt="Image" />
                                <h5>Azure</h5>
                            </div>
                            <div className="item">
                              <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"/>
                              <h5>Postman</h5>
                            </div>
                            <div className="item">
                              <img src="https://www.vectorlogo.zone/logos/github/github-icon.svg"></img>
                              <h5>GitHub</h5>
                            </div>
                            <div className="item">
                              <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg"></img>
                              <h5>Python</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
