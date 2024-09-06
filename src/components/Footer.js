import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/white_line_logo-removebg.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/code-forces.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end to_bottom">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/inaam-ansari-aba512283" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="LinkedIn Profile" />
                </a>
                <a href="https://leetcode.com/u/2NAS3kgcle" target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="Leetcode Profile" /></a>
                <a href="https://codeforces.com/profile/inaamansari" target="_blank" rel="noopener noreferrer"><img src={navIcon5} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}