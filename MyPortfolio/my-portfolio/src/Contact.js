import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OurDetails() {
    return (
        <div>
            <div className="container-xxl">
                <div className="container">
                    <div className="row">
                        <div className="row g-5 mb-5">
                            <div className="col-lg-6">
                                <h1 className="display-5 mb-0">Let's Work Together</h1>
                            </div>
                            <div className="col-lg-6 text-lg-end">
                                <a className="btn btn-primary p-3" href="">Say Hello</a>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-5 col-md-6">
                            <p className="mb-2 fw-bold">My office:</p>
                            <h3 className="fs-4 fw-bold">123 Street, New York, USA</h3>
                            <hr className=""></hr>
                            <p className="mb-2 fw-bold">Call me:</p>
                            <h3 className="fs-4 fw-bold">+91 6399733457</h3>
                            <hr className=""></hr>
                            <p className="mb-2 fw-bold">Mail me:</p>
                            <h3 className="fs-4 fw-bold">princegoutam65101@gmail.com</h3>
                            <hr className=""></hr>
                            <p className="mb-2 fw-bold">Follow me:</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-primary me-2" href=""><FontAwesomeIcon icon={faFacebook}/></a>
                                <a className="btn btn-square btn-primary me-2" href=""><FontAwesomeIcon icon={faInstagram}/></a>
                                <a className="btn btn-square btn-primary me-2" href=""><FontAwesomeIcon icon={faTwitter}/></a>
                                <a className="btn btn-square btn-primary me-2" href=""><FontAwesomeIcon icon={faLinkedin}/></a>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur culpa ex neque
                                debitis corrupti, porro eum iste natus placeat? Numquam? <a href=""
                                    className="text-decoration-none">Download Now</a>.</p>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name"></input>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email"></input>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject"></input>
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message"></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default OurDetails;