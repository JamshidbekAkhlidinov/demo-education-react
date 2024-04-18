import {NavLink} from "react-router-dom";

const EducationFooter = () => {
    return (
        <>
            <footer id="footer" className="footer-reveal bg-color-secondary border-0 mt-0">
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">

                            <a href="demo-education.html" className="d-inline-block mb-3">
                                <img alt="Porto" width="115" height="30" src="img/demos/education/logo-footer.png"/>
                            </a>

                            <ul className="social-icons social-icons-clean social-icons-icon-light">
                                <li>
                                    <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/"><i className="fab fa-x-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                </li>
                            </ul>

                            <p className="text-3 mt-4 mb-0 line-height-8 text-color-tertiary opacity-6">Porto
                                Education. © 2024.<br/> All Rights Reserved</p>

                        </div>
                        <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <h4 className="font-weight-bold text-5">About Us</h4>
                            <ul className="list list-unstyled text-color-tertiary opacity-6">
                                <li className="mb-1">
                                    Porto Education
                                </li>
                                <li className="mb-1">
                                    123 Porto Blvd, Suite 100
                                </li>
                                <li className="mb-1">
                                    New York, NY
                                </li>
                                <li className="mb-1">
                                    Phone: <a href="tel:1234567890"
                                              className="text-decoration-none text-color-tertiary text-color-hover-primary">123-456-7890</a>
                                </li>
                                <li>
                                    Email: <a href="mailto:email@domain.com"
                                              className="text-decoration-none text-color-tertiary text-color-hover-primary">porto@domain.com</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-2 mb-4 mb-lg-0">
                            <h4 className="font-weight-bold text-5">Navigation</h4>
                            <ul className="list list-unstyled opacity-6">
                                <li className="mb-1">
                                    <NavLink
                                        to="/"
                                        className="text-decoration-none text-color-tertiary text-color-hover-primary link-hover-style-1"
                                    >
                                        - Home
                                    </NavLink>
                                </li>
                                <li className="mb-1">
                                    <NavLink
                                        to="/about"
                                        className="text-decoration-none text-color-tertiary text-color-hover-primary link-hover-style-1"
                                    >
                                        - About
                                    </NavLink>
                                </li>
                                <li className="mb-1">
                                    <NavLink
                                        to="/courses"
                                        className="text-decoration-none text-color-tertiary text-color-hover-primary link-hover-style-1"
                                    >
                                        - Courses
                                    </NavLink>
                                </li>
                                <li className="mb-1">
                                    <NavLink
                                        to="/html"
                                        className="text-decoration-none text-color-tertiary text-color-hover-primary link-hover-style-1"
                                    >
                                        - Instructors
                                    </NavLink>
                                </li>
                                <li className="mb-1">
                                    <NavLink
                                        to="/blog"
                                        className="text-decoration-none text-color-tertiary text-color-hover-primary link-hover-style-1"
                                    >
                                        - Blog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact-us"
                                        className="text-decoration-none text-color-tertiary text-color-hover-primary link-hover-style-1"
                                    >
                                        - Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-2 mb-4 mb-lg-0">
                            <h4 className="font-weight-bold text-5">Support</h4>
                            <ul className="list list-unstyled opacity-6">
                                <li className="mb-1">
                                    <a href="demo-education.html"
                                       className="text-decoration-none text-color-tertiary text-color-hover-primary link-hover-style-1">-
                                        Documentation</a>
                                </li>
                                <li className="mb-1">
                                    <a href="demo-education.html"
                                       className="text-decoration-none text-color-tertiary text-color-hover-primary link-hover-style-1">-
                                        Forums</a>
                                </li>
                                <li className="mb-1">
                                    <a href="demo-education.html"
                                       className="text-decoration-none text-color-tertiary text-color-hover-primary link-hover-style-1">-
                                        Open a Ticket</a>
                                </li>
                                <li>
                                    <a href="demo-education.html"
                                       className="text-decoration-none text-color-tertiary text-color-hover-primary link-hover-style-1">-
                                        FAQ's</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-2 mb-4 mb-lg-0">
                            <h4 className="font-weight-bold text-5">More</h4>
                            <ul className="list list-unstyled opacity-6">
                                <li className="mb-1">
                                    <a href="demo-education.html"
                                       className="text-decoration-none text-color-tertiary text-color-hover-primary link-hover-style-1">-
                                        Terms of Use</a>
                                </li>
                                <li>
                                    <a href="demo-education.html"
                                       className="text-decoration-none text-color-tertiary text-color-hover-primary link-hover-style-1">-
                                        Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default EducationFooter