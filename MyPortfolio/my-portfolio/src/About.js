import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutMe() {
    return (
        <div>
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-2 col text-center">
                        <div className="footer-logo mb-2">
                            <a href="#" className="text-decoration-none text-primary fw-bold fs-1">Prince <FontAwesomeIcon icon={faHeart}/></a>
                        </div>

                        <div className="social">
                            <h6 className="fw-bold">Stay in touch</h6>
                            <ul className="d-flex list-unstyled justify-content-center">
                                <li><a href="#" className="link-primary link-offset-2 fs-4 me-3 ">
                                    <FontAwesomeIcon icon={faInstagram}/></a></li>
                                <li><a href="#" className="link-secondary link-offset-2  fs-4 me-3">
                                    <FontAwesomeIcon icon={faLinkedin}/></a></li>
                                <li><a href="#" className="link-success link-offset-2 fs-4 me-3">
                                    <FontAwesomeIcon icon={faGithub}/></a></li>
                                <li><a href="#" className="link-danger link-offset-2 fs-4 me-3">
                                    <FontAwesomeIcon icon={faFacebook}/></a></li>
                            </ul>
                        </div>
                        <div className="copyright pt-3">
                            <p>
                                <small>© Prince <FontAwesomeIcon icon={faHeart}/>. All Rights Reserved.</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutMe;