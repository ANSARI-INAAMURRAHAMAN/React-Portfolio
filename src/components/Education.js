import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCarSide } from '@fortawesome/free-solid-svg-icons';

export const Education = () => {
    return (
        <div id="Education">
            <h1 className="section_heading">
                <span>
                    <FontAwesomeIcon icon={faGraduationCap} />
                </span>
                <span>Education</span>
            </h1>
            <div className="timeline">
                <div className="timeline-box left">
                    <div className="timeline-container">
                        <div className="timeline-logo">
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </div>
                        <h3 className="experience-designation">Btech, Mechanical</h3>
                        <h4 className="experience-company-name">IIT Indore</h4>
                        <h5 className="experience-duration">2022-2026 (Present)</h5>
                        <p className="experience-description">
                            Successfully cracked JEE Main and JEE Advanced exams. Currently pursuing a Btech degree in Mechanical Engineering.
                        </p>
                    </div>
                </div>
                <div className="timeline-box right">
                    <div className="timeline-container">
                        <div className="timeline-logo">
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </div>
                        <h3 className="experience-designation">12th Grade</h3>
                        <h4 className="experience-company-name">
                            Maharashtra State Board of Secondary & Higher Secondary Education, Pune
                        </h4>
                        <h5 className="experience-duration">2021</h5>
                        <p className="experience-description">
                            Science enthusiast with a solid foundation in physics, chemistry, and Math. Strong understanding of fundamental scientific principles.
                        </p>
                    </div>
                </div>
                <div className="timeline-box left">
                    <div className="timeline-container">
                        <div className="timeline-logo">
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </div>
                        <h3 className="experience-designation">10th Grade</h3>
                        <h4 className="experience-company-name">
                            Maharashtra State Board of Secondary & Higher Secondary Education, Pune
                        </h4>
                        <h5 className="experience-duration">2019</h5>
                        <p className="experience-description">
                            Completed 10th grade from a government school with Urdu as the medium of instruction. Secured the first position in school.
                        </p>
                    </div>
                </div>
                <div id="timeline-divider">
                    <div className="timeline-traveller">
                        <FontAwesomeIcon icon={faCarSide} />
                    </div>
                </div>
            </div>
        </div>
    );
};