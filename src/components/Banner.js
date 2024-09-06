import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Software Engineer", "IITIAN"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>
                                        {`Hi! I'm Inaam Ansari`}{" "}
                                        <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Software Engineer", "IITIAN" ]'>
                                            <span className="wrap">{text}</span>
                                        </span>
                                    </h1>
                                    <p>
                                        I’m Ansari Inaamurrahaman from IITI ME26, an active member of the Robotics and Gaming Clubs.
                                        I’m a coder skilled in Data Structures & Algorithms, C++, HTML, CSS, and JavaScript. Passionate about technology and continuous learning,
                                        I’m dedicated to both academic and personal growth.
                                    </p>
                                    <div className="button-group">
                                        <button onClick={() => console.log('connect')} className="connect-button">
                                            Let's Connect <ArrowRightCircle size={25} />
                                        </button>
                                        <a href="https://drive.google.com/drive/folders/1fo4_ktT7F8ixfaaMh1UYWqa4NZJPwwyq?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-button">
                                            See Resume
                                        </a>

                                    </div>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
