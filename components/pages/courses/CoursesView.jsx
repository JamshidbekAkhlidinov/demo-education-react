import {Helmet} from "react-helmet";

const CoursesView = ({title}) => {
    return (
        <>
             <Helmet>
                <title>{title}</title>
            </Helmet>
            <section className="section custom-bg-color-grey-1 border-0 m-0">
                <div className="container">

                    <div className="row py-3 gy-5 gy-lg-0">
                        <div className="col-lg-9 mt-0">

                            <div className="custom-course-detail">

                                <div className="d-md-flex mb-4">
                                    <div className="ps-md-0 mb-3 mb-md-0 pe-4 border-right">
                                        <div className="d-flex align-items-center">
                                            <div className="img-thumbnail img-thumbnail-no-borders">
                                                <img src="img/avatars/avatar.jpg"
                                                     className="custom-course-detail-avatar" alt=""/>
                                            </div>
                                            <div className="ps-3">
                                                <p className="mb-0 text-1 text-uppercase p-relative top-3">Instructor</p>
                                                <h4 className="mb-0 text-color-secondary text-4"><a
                                                    href="demo-education-courses-details.html"
                                                    className="text-color-secondary" title="">John Doe</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-md-4 mb-3 mb-md-0 flex-grow-1">
                                        <div className="d-flex flex-row align-items-center h-100">
                                            <div className="p-0">
                                                <p className="mb-0 text-1 text-uppercase p-relative top-3">Category</p>
                                                <h4 className="mb-0 text-color-secondary text-4"><a
                                                    href="demo-education-courses-details.html"
                                                    className="text-color-secondary" title="">Web Development</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pe-md-4 mb-3 mb-md-0 border-right">
                                        <div className="d-flex flex-row align-items-center h-100">
                                            <div className="p-0">
                                                <strong className="text-primary text-5">$29</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-md-4">
                                        <div className="d-flex flex-row align-items-center h-100">
                                            <div className="p-0">
                                                <a href="#"
                                                   className="btn btn-secondary font-weight-bold btn-px-5 btn-py-3">TAKE
                                                    THIS COURSE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pb-5">
                                    <div className="ratio ratio-16x9">
                                        <iframe src="//player.vimeo.com/video/67957799" frameBorder="0"
                                                webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
                                    </div>
                                </div>

                                <h2 className="text-color-secondary font-weight-semi-bold text-6 line-height-1 mb-3">Description</h2>

                                <p className="text-3-5 line-height-9 mb-5">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Praesent dapibus elementum ante quis commodo. Fusce tincidunt
                                    pretium pellentesque. Nulla vitae ante tincidunt, suscipit dui sit amet, posuere
                                    tortor. Sed elementum ex fringilla, molestie nibh eu, pulvinar diam. Fusce
                                    vestibulum nisl a lectus consequat, vel semper arcu tempor. Sed ac consequat
                                    nunc.</p>

                                <div className="row align-items-md-end">
                                    <div className="col-md-6">
                                        <h2 className="text-color-secondary font-weight-semi-bold text-6 line-height-1 mb-4">Course
                                            Content</h2>
                                    </div>
                                    <div className="col-md-6 text-md-end">
                                        <p className="text-color-secondary font-weight-semi-bold text-3 line-height-1 mb-4 opacity-5">4
                                            sections • 16 lectures • 17h 2m total length</p>
                                    </div>
                                </div>

                                <div className="accordion custom-accordion-style-1" id="accordion1">
                                    <div className="card card-default">
                                        <div className="card-header" id="collapse1HeadingOne">
                                            <h4 className="card-title m-0">
                                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed"
                                                   data-bs-toggle="collapse" data-bs-target="#collapse1One"
                                                   aria-expanded="false" aria-controls="collapse1One">
                                                    Course Orientation <span
                                                    className="text-color-default font-weight-regular opacity-6 text-1 d-inline-block ps-1 text-uppercase">-  4 Lectures - 12min</span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapse1One" className="collapse"
                                             aria-labelledby="collapse1HeadingOne" data-bs-parent="#accordion1">
                                            <div className="card-body">

                                                <div className="row align-items-md-center py-1">
                                                    <div className="col-md-9">
                                                        <a href="#"
                                                           className="text-color-secondary font-weight-semi-bold text-2 line-height-1 mb-4"><i
                                                            className="far fa-play-circle d-inline-block me-2 text-4 p-relative top-1"></i>Lorem
                                                            ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                                    </div>
                                                    <div className="col-md-3 text-md-end">
                                                        <p className="text-color-default font-weight-semi-bold text-2 line-height-1 mb-0 opacity-5">4:26</p>
                                                    </div>
                                                </div>
                                                <div className="row align-items-md-center py-1">
                                                    <div className="col-md-9">
                                                        <a href="#"
                                                           className="text-color-secondary font-weight-semi-bold text-2 line-height-1 mb-4"><i
                                                            className="far fa-play-circle d-inline-block me-2 text-4 p-relative top-1"></i>Lorem
                                                            ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                                    </div>
                                                    <div className="col-md-3 text-md-end">
                                                        <p className="text-color-default font-weight-semi-bold text-2 line-height-1 mb-0 opacity-5">4:26</p>
                                                    </div>
                                                </div>
                                                <div className="row align-items-md-center py-1">
                                                    <div className="col-md-9">
                                                        <a href="#"
                                                           className="text-color-secondary font-weight-semi-bold text-2 line-height-1 mb-4"><i
                                                            className="far fa-play-circle d-inline-block me-2 text-4 p-relative top-1"></i>Lorem
                                                            ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                                    </div>
                                                    <div className="col-md-3 text-md-end">
                                                        <p className="text-color-default font-weight-semi-bold text-2 line-height-1 mb-0 opacity-5">4:26</p>
                                                    </div>
                                                </div>
                                                <div className="row align-items-md-center py-1">
                                                    <div className="col-md-9">
                                                        <a href="#"
                                                           className="text-color-secondary font-weight-semi-bold text-2 line-height-1 mb-4"><i
                                                            className="far fa-play-circle d-inline-block me-2 text-4 p-relative top-1"></i>Lorem
                                                            ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                                    </div>
                                                    <div className="col-md-3 text-md-end">
                                                        <p className="text-color-default font-weight-semi-bold text-2 line-height-1 mb-0 opacity-5">4:26</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-default">
                                        <div className="card-header" id="collapse2HeadingOne">
                                            <h4 className="card-title m-0">
                                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed"
                                                   data-bs-toggle="collapse" data-bs-target="#collapse2One"
                                                   aria-expanded="false" aria-controls="collapse2One">
                                                    Lesson 2 <span
                                                    className="text-color-default font-weight-regular opacity-6 text-1 d-inline-block ps-1 text-uppercase">-  4 Lectures - 12min</span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapse2One" className="collapse"
                                             aria-labelledby="collapse2HeadingOne" data-bs-parent="#accordion1">
                                            <div className="card-body">

                                                <div className="row align-items-md-center py-1">
                                                    <div className="col-md-9">
                                                        <a href="#"
                                                           className="text-color-secondary font-weight-semi-bold text-2 line-height-1 mb-4"><i
                                                            className="far fa-play-circle d-inline-block me-2 text-4 p-relative top-1"></i>Lorem
                                                            ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                                    </div>
                                                    <div className="col-md-3 text-md-end">
                                                        <p className="text-color-default font-weight-semi-bold text-2 line-height-1 mb-0 opacity-5">4:26</p>
                                                    </div>
                                                </div>
                                                <div className="row align-items-md-center py-1">
                                                    <div className="col-md-9">
                                                        <a href="#"
                                                           className="text-color-secondary font-weight-semi-bold text-2 line-height-1 mb-4"><i
                                                            className="far fa-play-circle d-inline-block me-2 text-4 p-relative top-1"></i>Lorem
                                                            ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                                    </div>
                                                    <div className="col-md-3 text-md-end">
                                                        <p className="text-color-default font-weight-semi-bold text-2 line-height-1 mb-0 opacity-5">4:26</p>
                                                    </div>
                                                </div>
                                                <div className="row align-items-md-center py-1">
                                                    <div className="col-md-9">
                                                        <a href="#"
                                                           className="text-color-secondary font-weight-semi-bold text-2 line-height-1 mb-4"><i
                                                            className="far fa-play-circle d-inline-block me-2 text-4 p-relative top-1"></i>Lorem
                                                            ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                                    </div>
                                                    <div className="col-md-3 text-md-end">
                                                        <p className="text-color-default font-weight-semi-bold text-2 line-height-1 mb-0 opacity-5">4:26</p>
                                                    </div>
                                                </div>
                                                <div className="row align-items-md-center py-1">
                                                    <div className="col-md-9">
                                                        <a href="#"
                                                           className="text-color-secondary font-weight-semi-bold text-2 line-height-1 mb-4"><i
                                                            className="far fa-play-circle d-inline-block me-2 text-4 p-relative top-1"></i>Lorem
                                                            ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                                    </div>
                                                    <div className="col-md-3 text-md-end">
                                                        <p className="text-color-default font-weight-semi-bold text-2 line-height-1 mb-0 opacity-5">4:26</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-default">
                                        <div className="card-header" id="collapse3HeadingOne">
                                            <h4 className="card-title m-0">
                                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed"
                                                   data-bs-toggle="collapse" data-bs-target="#collapse3One"
                                                   aria-expanded="false" aria-controls="collapse3One">
                                                    Lesson 3 <span
                                                    className="text-color-default font-weight-regular opacity-6 text-1 d-inline-block ps-1 text-uppercase">-  4 Lectures - 12min</span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapse3One" className="collapse"
                                             aria-labelledby="collapse1HeadingOne" data-bs-parent="#accordion1">
                                            <div className="card-body">

                                                <div className="row align-items-md-center py-1">
                                                    <div className="col-md-9">
                                                        <a href="#"
                                                           className="text-color-secondary font-weight-semi-bold text-2 line-height-1 mb-4"><i
                                                            className="far fa-play-circle d-inline-block me-2 text-4 p-relative top-1"></i>Lorem
                                                            ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                                    </div>
                                                    <div className="col-md-3 text-md-end">
                                                        <p className="text-color-default font-weight-semi-bold text-2 line-height-1 mb-0 opacity-5">4:26</p>
                                                    </div>
                                                </div>
                                                <div className="row align-items-md-center py-1">
                                                    <div className="col-md-9">
                                                        <a href="#"
                                                           className="text-color-secondary font-weight-semi-bold text-2 line-height-1 mb-4"><i
                                                            className="far fa-play-circle d-inline-block me-2 text-4 p-relative top-1"></i>Lorem
                                                            ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                                    </div>
                                                    <div className="col-md-3 text-md-end">
                                                        <p className="text-color-default font-weight-semi-bold text-2 line-height-1 mb-0 opacity-5">4:26</p>
                                                    </div>
                                                </div>
                                                <div className="row align-items-md-center py-1">
                                                    <div className="col-md-9">
                                                        <a href="#"
                                                           className="text-color-secondary font-weight-semi-bold text-2 line-height-1 mb-4"><i
                                                            className="far fa-play-circle d-inline-block me-2 text-4 p-relative top-1"></i>Lorem
                                                            ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                                    </div>
                                                    <div className="col-md-3 text-md-end">
                                                        <p className="text-color-default font-weight-semi-bold text-2 line-height-1 mb-0 opacity-5">4:26</p>
                                                    </div>
                                                </div>
                                                <div className="row align-items-md-center py-1">
                                                    <div className="col-md-9">
                                                        <a href="#"
                                                           className="text-color-secondary font-weight-semi-bold text-2 line-height-1 mb-4"><i
                                                            className="far fa-play-circle d-inline-block me-2 text-4 p-relative top-1"></i>Lorem
                                                            ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                                    </div>
                                                    <div className="col-md-3 text-md-end">
                                                        <p className="text-color-default font-weight-semi-bold text-2 line-height-1 mb-0 opacity-5">4:26</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-default">
                                        <div className="card-header" id="collapse4HeadingOne">
                                            <h4 className="card-title m-0">
                                                <a className="accordion-toggle text-color-dark font-weight-bold collapsed"
                                                   data-bs-toggle="collapse" data-bs-target="#collapse4One"
                                                   aria-expanded="false" aria-controls="collapse4One">
                                                    Conclusion <span
                                                    className="text-color-default font-weight-regular opacity-6 text-1 d-inline-block ps-1 text-uppercase">-  4 Lectures - 12min</span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapse4One" className="collapse"
                                             aria-labelledby="collapse1HeadingOne" data-bs-parent="#accordion1">
                                            <div className="card-body">

                                                <div className="row align-items-md-center py-1">
                                                    <div className="col-md-9">
                                                        <a href="#"
                                                           className="text-color-secondary font-weight-semi-bold text-2 line-height-1 mb-4"><i
                                                            className="far fa-play-circle d-inline-block me-2 text-4 p-relative top-1"></i>Lorem
                                                            ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                                    </div>
                                                    <div className="col-md-3 text-md-end">
                                                        <p className="text-color-default font-weight-semi-bold text-2 line-height-1 mb-0 opacity-5">4:26</p>
                                                    </div>
                                                </div>
                                                <div className="row align-items-md-center py-1">
                                                    <div className="col-md-9">
                                                        <a href="#"
                                                           className="text-color-secondary font-weight-semi-bold text-2 line-height-1 mb-4"><i
                                                            className="far fa-play-circle d-inline-block me-2 text-4 p-relative top-1"></i>Lorem
                                                            ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                                    </div>
                                                    <div className="col-md-3 text-md-end">
                                                        <p className="text-color-default font-weight-semi-bold text-2 line-height-1 mb-0 opacity-5">4:26</p>
                                                    </div>
                                                </div>
                                                <div className="row align-items-md-center py-1">
                                                    <div className="col-md-9">
                                                        <a href="#"
                                                           className="text-color-secondary font-weight-semi-bold text-2 line-height-1 mb-4"><i
                                                            className="far fa-play-circle d-inline-block me-2 text-4 p-relative top-1"></i>Lorem
                                                            ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                                    </div>
                                                    <div className="col-md-3 text-md-end">
                                                        <p className="text-color-default font-weight-semi-bold text-2 line-height-1 mb-0 opacity-5">4:26</p>
                                                    </div>
                                                </div>
                                                <div className="row align-items-md-center py-1">
                                                    <div className="col-md-9">
                                                        <a href="#"
                                                           className="text-color-secondary font-weight-semi-bold text-2 line-height-1 mb-4"><i
                                                            className="far fa-play-circle d-inline-block me-2 text-4 p-relative top-1"></i>Lorem
                                                            ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                                    </div>
                                                    <div className="col-md-3 text-md-end">
                                                        <p className="text-color-default font-weight-semi-bold text-2 line-height-1 mb-0 opacity-5">4:26</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h2 className="text-color-secondary font-weight-semi-bold text-6 line-height-1 mb-3 mt-5">Reviews</h2>

                                <ul className="comments">
                                    <li>
                                        <div className="comment pb-4">
                                            <div className="img-thumbnail border-0 p-0 d-none d-md-block">
                                                <img className="avatar rounded-circle" alt=""
                                                     src="img/avatars/avatar-2.jpg"/>
                                            </div>
                                            <div className="comment-block bg-transparent p-0">
													<span className="comment-by">
														<strong className="text-color-dark">Jack Doe</strong>
													</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
                                                    euismod odio, gravida pellentesque urna varius vitae, gravida
                                                    pellentesque urna varius vitae.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="comment pb-4">
                                            <div className="img-thumbnail border-0 p-0 d-none d-md-block">
                                                <img className="avatar rounded-circle" alt=""
                                                     src="img/avatars/avatar.jpg"/>
                                            </div>
                                            <div className="comment-block bg-transparent p-0">
													<span className="comment-by">
														<strong className="text-color-dark">John Doe</strong>
													</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
                                                    odio, gravida urna varius vitae, gravida pellentesque urna varius
                                                    vitae.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <h2 className="text-color-secondary font-weight-semi-bold text-6 line-height-1 mb-4 mt-4">Related
                                    Courses</h2>

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
                                                    className="text-color-secondary" title="">Course Name Example</a>
                                                </h4>

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
                                                    className="text-color-secondary" title="">Course Name Example</a>
                                                </h4>

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
                                                    className="text-color-secondary" title="">Course Name Example</a>
                                                </h4>

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
                                </div>

                            </div>

                        </div>

                        <!-- Sidebar -->
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
export default CoursesView
