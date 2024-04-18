import {Helmet} from "react-helmet";

const CoursesIndex = ({title}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <section className="section custom-bg-color-grey-1 border-0 m-0">
                <div className="container">

                    <div className="row py-3 gy-5 gy-lg-0">
                        <div className="col-lg-9 mt-0">

                            <div className="row">
                                <div className="col-md-4 mb-4 pb-1">
                                    <div className="card custom-card-courses border-radius-0 hover-effect-1">
                                        <div className="p-relative">
                                            <a href="demo-education-courses-details.html"
                                               className="text-color-secondary" title="">
                                                <img className="card-img-top border-radius-0"
                                                     src="img/demos/education/courses/course-1.jpg" alt=""/>
                                            </a>
                                            <div className="custom-card-courses-author">
                                                <div className="img-thumbnail img-thumbnail-no-borders">
                                                    <img src="img/avatars/avatar.jpg" className="rounded-circle"
                                                         alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-0 text-1 p-relative top-5 text-uppercase">John Doe</p>
                                            <h4 className="mb-3 text-color-secondary"><a
                                                href="demo-education-courses-details.html"
                                                className="text-color-secondary" title="">Course Name Example</a></h4>

                                            <div className="float-end">
                                                <strong className="text-primary text-5">$79</strong>
                                            </div>

                                            <div className="text-2">
                                                <span className="d-inline-block pe-2"><i
                                                    className="far text-primary fa-user"></i> 123 </span>
                                                <span className="d-inline-block pe-2"><i
                                                    className="far text-primary fa-comments"></i> 123</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4 pb-1">
                                    <div className="card custom-card-courses border-radius-0 hover-effect-1">
                                        <div className="p-relative">
                                            <a href="demo-education-courses-details.html"
                                               className="text-color-secondary" title="">
                                                <img className="card-img-top border-radius-0"
                                                     src="img/demos/education/courses/course-2.jpg" alt=""/>
                                            </a>
                                            <div className="custom-card-courses-author">
                                                <div className="img-thumbnail img-thumbnail-no-borders">
                                                    <img src="img/avatars/avatar-2.jpg" className="rounded-circle"
                                                         alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-0 text-1 p-relative top-5 text-uppercase">John Doe</p>
                                            <h4 className="mb-3 text-color-secondary"><a
                                                href="demo-education-courses-details.html"
                                                className="text-color-secondary" title="">Course Name Example</a></h4>

                                            <div className="float-end">
                                                <strong className="text-primary text-5">$59</strong>
                                            </div>

                                            <div className="text-2">
                                                <span className="d-inline-block pe-2"><i
                                                    className="far text-primary fa-user"></i> 123 </span>
                                                <span className="d-inline-block pe-2"><i
                                                    className="far text-primary fa-comments"></i> 123</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4 pb-1">
                                    <div className="card custom-card-courses border-radius-0 hover-effect-1">
                                        <div className="p-relative">
                                            <a href="demo-education-courses-details.html"
                                               className="text-color-secondary" title="">
                                                <img className="card-img-top border-radius-0"
                                                     src="img/demos/education/courses/course-3.jpg" alt=""/>
                                            </a>
                                            <div className="custom-card-courses-author">
                                                <div className="img-thumbnail img-thumbnail-no-borders">
                                                    <img src="img/avatars/avatar-3.jpg" className="rounded-circle"
                                                         alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-0 text-1 p-relative top-5 text-uppercase">John Doe</p>
                                            <h4 className="mb-3 text-color-secondary"><a
                                                href="demo-education-courses-details.html"
                                                className="text-color-secondary" title="">Course Name Example</a></h4>

                                            <div className="float-end">
                                                <strong className="text-primary text-5">$29</strong>
                                            </div>

                                            <div className="text-2">
                                                <span className="d-inline-block pe-2"><i
                                                    className="far text-primary fa-user"></i> 123 </span>
                                                <span className="d-inline-block pe-2"><i
                                                    className="far text-primary fa-comments"></i> 123</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4 pb-1">
                                    <div className="card custom-card-courses border-radius-0 hover-effect-1">
                                        <div className="p-relative">
                                            <a href="demo-education-courses-details.html"
                                               className="text-color-secondary" title="">
                                                <img className="card-img-top border-radius-0"
                                                     src="img/demos/education/courses/course-4.jpg" alt=""/>
                                            </a>
                                            <div className="custom-card-courses-author">
                                                <div className="img-thumbnail img-thumbnail-no-borders">
                                                    <img src="img/avatars/avatar-2.jpg" className="rounded-circle"
                                                         alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-0 text-1 p-relative top-5 text-uppercase">John Doe</p>
                                            <h4 className="mb-3 text-color-secondary"><a
                                                href="demo-education-courses-details.html"
                                                className="text-color-secondary" title="">Course Name Example</a></h4>

                                            <div className="float-end">
                                                <strong className="text-primary text-5">$19</strong>
                                            </div>

                                            <div className="text-2">
                                                <span className="d-inline-block pe-2"><i
                                                    className="far text-primary fa-user"></i> 123 </span>
                                                <span className="d-inline-block pe-2"><i
                                                    className="far text-primary fa-comments"></i> 123</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4 pb-1">
                                    <div className="card custom-card-courses border-radius-0 hover-effect-1">
                                        <div className="p-relative">
                                            <a href="demo-education-courses-details.html"
                                               className="text-color-secondary" title="">
                                                <img className="card-img-top border-radius-0"
                                                     src="img/demos/education/courses/course-1.jpg" alt=""/>
                                            </a>
                                            <div className="custom-card-courses-author">
                                                <div className="img-thumbnail img-thumbnail-no-borders">
                                                    <img src="img/avatars/avatar.jpg" className="rounded-circle"
                                                         alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-0 text-1 p-relative top-5 text-uppercase">John Doe</p>
                                            <h4 className="mb-3 text-color-secondary"><a
                                                href="demo-education-courses-details.html"
                                                className="text-color-secondary" title="">Course Name Example</a></h4>

                                            <div className="float-end">
                                                <strong className="text-primary text-5">$79</strong>
                                            </div>

                                            <div className="text-2">
                                                <span className="d-inline-block pe-2"><i
                                                    className="far text-primary fa-user"></i> 123 </span>
                                                <span className="d-inline-block pe-2"><i
                                                    className="far text-primary fa-comments"></i> 123</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4 pb-1">
                                    <div className="card custom-card-courses border-radius-0 hover-effect-1">
                                        <div className="p-relative">
                                            <a href="demo-education-courses-details.html"
                                               className="text-color-secondary" title="">
                                                <img className="card-img-top border-radius-0"
                                                     src="img/demos/education/courses/course-2.jpg" alt=""/>
                                            </a>
                                            <div className="custom-card-courses-author">
                                                <div className="img-thumbnail img-thumbnail-no-borders">
                                                    <img src="img/avatars/avatar-2.jpg" className="rounded-circle"
                                                         alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-0 text-1 p-relative top-5 text-uppercase">John Doe</p>
                                            <h4 className="mb-3 text-color-secondary"><a
                                                href="demo-education-courses-details.html"
                                                className="text-color-secondary" title="">Course Name Example</a></h4>

                                            <div className="float-end">
                                                <strong className="text-primary text-5">$59</strong>
                                            </div>

                                            <div className="text-2">
                                                <span className="d-inline-block pe-2"><i
                                                    className="far text-primary fa-user"></i> 123 </span>
                                                <span className="d-inline-block pe-2"><i
                                                    className="far text-primary fa-comments"></i> 123</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4 pb-1">
                                    <div className="card custom-card-courses border-radius-0 hover-effect-1">
                                        <div className="p-relative">
                                            <a href="demo-education-courses-details.html"
                                               className="text-color-secondary" title="">
                                                <img className="card-img-top border-radius-0"
                                                     src="img/demos/education/courses/course-3.jpg" alt=""/>
                                            </a>
                                            <div className="custom-card-courses-author">
                                                <div className="img-thumbnail img-thumbnail-no-borders">
                                                    <img src="img/avatars/avatar-3.jpg" className="rounded-circle"
                                                         alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-0 text-1 p-relative top-5 text-uppercase">John Doe</p>
                                            <h4 className="mb-3 text-color-secondary"><a
                                                href="demo-education-courses-details.html"
                                                className="text-color-secondary" title="">Course Name Example</a></h4>

                                            <div className="float-end">
                                                <strong className="text-primary text-5">$29</strong>
                                            </div>

                                            <div className="text-2">
                                                <span className="d-inline-block pe-2"><i
                                                    className="far text-primary fa-user"></i> 123 </span>
                                                <span className="d-inline-block pe-2"><i
                                                    className="far text-primary fa-comments"></i> 123</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4 pb-1">
                                    <div className="card custom-card-courses border-radius-0 hover-effect-1">
                                        <div className="p-relative">
                                            <a href="demo-education-courses-details.html"
                                               className="text-color-secondary" title="">
                                                <img className="card-img-top border-radius-0"
                                                     src="img/demos/education/courses/course-4.jpg" alt=""/>
                                            </a>
                                            <div className="custom-card-courses-author">
                                                <div className="img-thumbnail img-thumbnail-no-borders">
                                                    <img src="img/avatars/avatar-2.jpg" className="rounded-circle"
                                                         alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-0 text-1 p-relative top-5 text-uppercase">John Doe</p>
                                            <h4 className="mb-3 text-color-secondary"><a
                                                href="demo-education-courses-details.html"
                                                className="text-color-secondary" title="">Course Name Example</a></h4>

                                            <div className="float-end">
                                                <strong className="text-primary text-5">$19</strong>
                                            </div>

                                            <div className="text-2">
                                                <span className="d-inline-block pe-2"><i
                                                    className="far text-primary fa-user"></i> 123 </span>
                                                <span className="d-inline-block pe-2"><i
                                                    className="far text-primary fa-comments"></i> 123</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4 pb-1">
                                    <div className="card custom-card-courses border-radius-0 hover-effect-1">
                                        <div className="p-relative">
                                            <a href="demo-education-courses-details.html"
                                               className="text-color-secondary" title="">
                                                <img className="card-img-top border-radius-0"
                                                     src="img/demos/education/courses/course-1.jpg" alt=""/>
                                            </a>
                                            <div className="custom-card-courses-author">
                                                <div className="img-thumbnail img-thumbnail-no-borders">
                                                    <img src="img/avatars/avatar.jpg" className="rounded-circle"
                                                         alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-0 text-1 p-relative top-5 text-uppercase">John Doe</p>
                                            <h4 className="mb-3 text-color-secondary"><a
                                                href="demo-education-courses-details.html"
                                                className="text-color-secondary" title="">Course Name Example</a></h4>

                                            <div className="float-end">
                                                <strong className="text-primary text-5">$79</strong>
                                            </div>

                                            <div className="text-2">
                                                <span className="d-inline-block pe-2"><i
                                                    className="far text-primary fa-user"></i> 123 </span>
                                                <span className="d-inline-block pe-2"><i
                                                    className="far text-primary fa-comments"></i> 123</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <ul className="pagination float-end p-relative bottom-2">
                                        <li className="page-item"><a className="page-link" href="#"><i
                                            className="fas fa-angle-left"></i></a></li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#"><i
                                            className="fas fa-angle-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-3 position-relative">

                            <div className="mt-2 mb-4 pb-2">
                                <h2 className="text-color-secondary font-weight-semi-bold text-5 line-height-1 mb-3">Categories</h2>

                                <ul className="nav nav-list flex-column p-relative right-9">
                                    <li className="nav-item"><a className="nav-link bg-transparent border-0" href="#">Design
                                        (2)</a></li>
                                    <li className="nav-item">
                                        <a className="nav-link bg-transparent border-0 active" href="#">Web Development
                                            (4)</a>
                                        <ul>
                                            <li className="nav-item"><a className="nav-link bg-transparent border-0"
                                                                        href="#">Data Science</a></li>
                                            <li className="nav-item"><a
                                                className="nav-link bg-transparent border-0 active text-color-primary"
                                                href="#">Mobile Development</a></li>
                                            <li className="nav-item"><a className="nav-link bg-transparent border-0"
                                                                        href="#">Software Testing</a></li>
                                            <li className="nav-item"><a className="nav-link bg-transparent border-0"
                                                                        href="#">Development Tools</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a className="nav-link bg-transparent border-0" href="#">Personal
                                        Development (3)</a></li>
                                    <li className="nav-item"><a className="nav-link bg-transparent border-0" href="#">Business
                                        (2)</a></li>
                                    <li className="nav-item"><a className="nav-link bg-transparent border-0" href="#">Photography
                                        (1)</a></li>
                                </ul>
                            </div>

                            <div className="mt-2 mb-4 pb-2">

                                <h2 className="text-color-secondary font-weight-semi-bold text-5 line-height-1 mb-3">Latest
                                    Courses</h2>

                                <ul className="simple-post-list">
                                    <li className="border-0">
                                        <div className="post-image">
                                            <div className="img-thumbnail img-thumbnail-no-borders d-block">
                                                <a href="blog-post.html">
                                                    <img src="img/demos/education/courses/course-1.jpg" width="80"
                                                         alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="post-info">
                                            <a href="blog-post.html"
                                               className="text-color-secondary text-3 font-weight-semi-bold line-height-4 d-block pb-1">Course
                                                Name Example</a>
                                            <div className="post-meta">
                                                <strong className="text-primary text-4">$79</strong>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="border-0">
                                        <div className="post-image">
                                            <div className="img-thumbnail img-thumbnail-no-borders d-block">
                                                <a href="blog-post.html">
                                                    <img src="img/demos/education/courses/course-2.jpg" width="80"
                                                         alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="post-info">
                                            <a href="blog-post.html"
                                               className="text-color-secondary text-3 font-weight-semi-bold line-height-4 d-block pb-1">Course
                                                Name Example</a>
                                            <div className="post-meta">
                                                <strong className="text-primary text-4">$79</strong>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="border-0">
                                        <div className="post-image">
                                            <div className="img-thumbnail img-thumbnail-no-borders d-block">
                                                <a href="blog-post.html">
                                                    <img src="img/demos/education/courses/course-3.jpg" width="80"
                                                         alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="post-info">
                                            <a href="blog-post.html"
                                               className="text-color-secondary text-3 font-weight-semi-bold line-height-4 d-block pb-1">Course
                                                Name Example</a>
                                            <div className="post-meta">
                                                <strong className="text-primary text-4">$79</strong>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </div>

                            <div className="mt-2 mb-4 pb-2">
                                <section className="section section-height-3 bg-color-primary border-0 m-0">
                                    <div className="container p-relative py-3">

                                        <div className="custom-element custom-element-pos-4 appear-animation"
                                             data-appear-animation="expandIn" data-appear-animation-delay="200">
                                            <div className="opacity-2" data-plugin-float-element
                                                 data-plugin-options="{'startPos': 'bottom', 'speed': 0.8, 'transition': true, 'transitionDuration': 3000}">
                                                <img className="icon-animated" width="157" height="157"
                                                     src="img/demos/education/elements/element-1.svg" alt="" data-icon
                                                     data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light'}"/>
                                            </div>
                                        </div>

                                        <div className="row align-items-center justify-content-center text-center">
                                            <div className="col col pt-2">
                                                <h2 className="text-color-light font-weight-semi-bold text-7 mb-0 appear-animation"
                                                    data-appear-animation="fadeInRightShorterPlus"
                                                    data-appear-animation-delay="150">Ready to kick-start your
                                                    career?</h2>

                                                <a href="demo-education-courses.html"
                                                   className="btn btn-secondary font-weight-bold btn-px-5 btn-py-3 mt-4 mb-2 appear-animation"
                                                   data-appear-animation="fadeInLeftShorterPlus"
                                                   data-appear-animation-delay="350">GET STARTED NOW</a>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
export default CoursesIndex
