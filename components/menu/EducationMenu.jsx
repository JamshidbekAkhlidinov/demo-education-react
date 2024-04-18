import {NavLink} from "react-router-dom";

const EducationMenu = () => {
    return (
        <>
            <header id="header" className="header-transparent header-effect-shrink"
                    data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 70, 'stickyHeaderContainerHeight': 70}">
                <div className="header-body header-body-bottom-border border-top-0">
                    <div className="header-top bg-light border-0">
                        <div className="container">
                            <div className="header-row">
                                <div className="header-column justify-content-start">
                                    <div className="header-row">
                                        <ul className="list list-unstyled list-inline mb-0">
                                            <li className="list-inline-item text-color-dark me-md-4 mb-0 d-none d-md-inline-block">
                                                <span className="text-color-default text-2">Any Questions?</span>
                                            </li>
                                            <li className="list-inline-item me-4 mb-0">
                                                <i className="icons icon-phone text-color-primary text-4 position-relative top-4 me-1"></i>
                                                <a href="tel:+1234567890"
                                                   className="text-color-secondary text-color-hover-primary font-weight-semibold text-decoration-none text-2">
                                                    (800) 123-4567
                                                </a>
                                            </li>
                                            <li className="list-inline-item me-4 mb-0 d-none d-md-inline-block">
                                                <i className="icons icon-envelope text-color-primary text-4 position-relative top-4 me-1"></i>
                                                <a href="mailto:porto@portotheme.com"
                                                   className="text-color-secondary text-color-hover-primary font-weight-semibold text-decoration-none text-2">
                                                    porto@portotheme.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="header-column justify-content-end">
                                    <div className="header-row">
                                        <ul className="list list-unstyled list-inline mb-0">
                                            <li className="list-inline-item mb-0">
                                                <i className="icons icon-user text-color-primary text-4 position-relative top-4 me-1"></i>
                                                <a href="page-login.html"
                                                   className="text-color-secondary text-color-hover-primary font-weight-semibold text-decoration-none text-2">
                                                    Login / Register
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-container container">
                        <div className="header-row">
                            <div className="header-column">
                                <div className="header-row">
                                    <div className="header-logo">
                                        <NavLink to="/" exact="true">
                                            <img src="img/demos/education/logo.png" className="img-fluid" width="123"
                                                 height="49" alt=""/>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="header-column justify-content-end">
                                <div className="header-row">
                                    <div className="header-nav header-nav-links">
                                        <div
                                            className="header-nav-main header-nav-main-text-capitalize header-nav-main-effect-2 header-nav-main-sub-effect-1">
                                            <nav className="collapse">
                                                <ul className="nav nav-pills" id="mainNav">
                                                    <li>
                                                        <NavLink to="/" className="nav-link active" exact="true">
                                                            Home
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/about" className="nav-link" exact="true">
                                                            About us
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/courses" className="nav-link" exact="true">
                                                            Courses
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/instructors" className="nav-link" exact="true">
                                                            Instructors
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/blog" className="nav-link" exact="true">
                                                            Blog
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/contact-us" className="nav-link" exact="true">
                                                            Contact Us
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="header-nav-features header-nav-features-no-border">
                                        <div className="header-nav-feature header-nav-features-search d-inline-flex">
                                            <a href="#" className="header-nav-features-toggle text-decoration-none"
                                               data-focus="headerSearch" aria-label="Search">
                                                <i className="icons icon-magnifier header-nav-top-icon font-weight-bold text-4 top-2 text-color-primary"></i>
                                            </a>
                                            <div
                                                className="header-nav-features-dropdown header-nav-features-dropdown-mobile-fixed"
                                                id="headerTopSearchDropdown">
                                                <form role="search" action="page-search-results.html" method="get">
                                                    <div className="simple-search input-group">
                                                        <input className="form-control text-1" id="headerSearch"
                                                               name="q" type="search" value="" defaultValue="123"
                                                               placeholder="Search..."/>
                                                        <button className="btn" type="submit" aria-label="Search">
                                                            <i className="icons icon-magnifier header-nav-top-icon font-weight-bold text-color-dark text-4 text-color-hover-primary top-2"></i>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn header-btn-collapse-nav" data-bs-toggle="collapse"
                                            data-bs-target=".header-nav-main nav">
                                        <i className="fas fa-bars"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default EducationMenu