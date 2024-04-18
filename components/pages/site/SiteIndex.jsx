import {Helmet} from "react-helmet";

const SiteIndex = ({title}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <div className="custom-bg-color-grey-1">
                <div
                    className="owl-carousel owl-carousel-light owl-carousel-light-init-fadeIn owl-theme manual dots-inside dots-horizontal-center show-dots-hover show-dots-xs nav-style-1 nav-arrows-thin nav-inside nav-inside-plus nav-dark nav-lg nav-font-size-lg show-nav-hover mb-0"
                    data-plugin-options="{'autoplay': true, 'autoplayTimeout': 7000}"
                    data-dynamic-height="['calc(100vh - 135px)','calc(100vh - 135px)','calc(100vh - 161px)','calc(100vh - 161px)','calc(100vh - 161px)']"
                    style={{height: "calc(100vh - 135px)"}}>
                    <div className="owl-stage-outer">
                        <div className="owl-stage">
                            <div className="owl-item position-relative overflow-hidden">
                                <div
                                    className="background-image-wrapper custom-bg-color-grey-1 position-absolute top-0 left-0 right-0 bottom-0"
                                    data-appear-animation="kenBurnsToLeft" data-appear-animation-duration="30s"
                                    data-plugin-options="{'minWindowWidth': 0}" data-carousel-onchange-show
                                    style={{
                                        backgroundImage: 'url(img/demos/education/slides/slide-1-bg.jpg)',
                                        backgroundSize: 'cover',
                                        backgroundPosition: '100% 100%'
                                    }}>
                                </div>

                                <img src="img/demos/education/slides/slide-1-1.png"
                                     className="img-fluid position-absolute bottom-0 d-none d-lg-block custom-slider-el-1 appear-animation"
                                     data-appear-animation="fadeInUpShorter" data-appear-animation-delay="600" alt=""/>

                                <div className="container h-100 r-relative z-index-1">
                                    <div className="row h-100 align-items-center">
                                        <div className="col">
                                            <div className="text-end float-lg-start custom-slider-text-block">
                                                <h2 className="text-color-secondary font-weight-extra-bold mb-4 custom-slider-text-1 p-relative z-index-1 appear-animation"
                                                    data-appear-animation="fadeInUpShorter"
                                                    data-appear-animation-delay="800"><em>#</em>letslearn</h2>
                                                <h2 className="text-color-default font-weight-semi-bold mb-3 text-5 p-relative z-index-1 appear-animation"
                                                    data-appear-animation="fadeInUpShorter"
                                                    data-appear-animation-delay="1000">Complete Solution For Your
                                                    Education Needs!</h2>
                                                <a href="#courses" data-hash data-hash-offset="0"
                                                   data-hash-offset-lg="70"
                                                   className="btn btn-secondary font-weight-bold btn-px-5 btn-py-3 appear-animation"
                                                   data-appear-animation="fadeInUpShorter"
                                                   data-appear-animation-delay="1200">GET STARTED</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="owl-item position-relative overflow-hidden">
                                <div
                                    className="background-image-wrapper custom-bg-color-grey-1 position-absolute top-0 left-0 right-0 bottom-0"
                                    data-appear-animation="kenBurnsToLeft" data-appear-animation-duration="30s"
                                    data-plugin-options="{'minWindowWidth': 0}" data-carousel-onchange-show
                                    style={{
                                        backgroundImage: "url(img/demos/education/slides/slide-2-bg.jpg)",
                                        backgroundSize: "cover",
                                        backgroundPosition: "100% 100%;"
                                    }}>
                                </div>

                                <img src="img/demos/education/slides/slide-2-1.png"
                                     className="img-fluid position-absolute bottom-0 d-none d-lg-block custom-slider-el-2 appear-animation"
                                     data-appear-animation="fadeInUpShorter" data-appear-animation-delay="600" alt=""/>

                                <div className="container h-100 r-relative z-index-1">
                                    <div className="row h-100 align-items-center">
                                        <div className="col">
                                            <div className="float-lg-end custom-slider-text-block text-end">
                                                <h2 className="text-color-secondary font-weight-extra-bold mb-4 custom-slider-text-1 p-relative z-index-1 appear-animation"
                                                    data-appear-animation="fadeInUpShorter"
                                                    data-appear-animation-delay="800"><em>#</em>yourfuture</h2>
                                                <h2 className="text-color-default font-weight-semi-bold mb-3 text-5 p-relative z-index-1 appear-animation"
                                                    data-appear-animation="fadeInUpShorter"
                                                    data-appear-animation-delay="1000">Complete Solution For Your
                                                    Education Needs!</h2>
                                                <a href="#courses" data-hash data-hash-offset="0"
                                                   data-hash-offset-lg="70"
                                                   className="btn btn-secondary font-weight-bold btn-px-5 btn-py-3 appear-animation"
                                                   data-appear-animation="fadeInUpShorter"
                                                   data-appear-animation-delay="1200">GET STARTED</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="owl-nav">
                        <button type="button" role="presentation" className="owl-prev" aria-label="Previous"></button>
                        <button type="button" role="presentation" className="owl-next" aria-label="Next"></button>
                    </div>
                </div>
            </div>

            <div className="bg-light">
                <div className="container py-4">
                    <div className="row pb-2 mb-1">
                        <div className="col-md-4 mb-4 mb-md-0">

                            <div className="feature-box feature-box-steps">
                                <div className="feature-box-step-number appear-animation"
                                     data-appear-animation="fadeInLeftShorterPlus" data-appear-animation-delay="250">
                                    <em>1.</em>
                                </div>
                                <div
                                    className="feature-box-icon bg-color-quaternary feature-box-icon-extra-large appear-animation"
                                    data-appear-animation="fadeInLeftShorterPlus" data-appear-animation-delay="250">
                                    <img className="icon-animated" width="100" height="46"
                                         src="img/demos/education/icons/icon-web-search-engine.svg" alt="" data-icon
                                         data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"/>
                                </div>
                                <div className="feature-box-info appear-animation"
                                     data-appear-animation="fadeInLeftShorterPlus" data-appear-animation-delay="150">
                                    <p className="mt-2 pt-1 mb-0 text-1 p-relative top-5 text-uppercase">Step 1</p>
                                    <h4 className="mb-0 text-color-secondary">Find Your Course</h4>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">

                            <div className="feature-box feature-box-steps">
                                <div className="feature-box-step-number appear-animation"
                                     data-appear-animation="fadeInLeftShorterPlus" data-appear-animation-delay="500">
                                    <em>2.</em>
                                </div>
                                <div
                                    className="feature-box-icon bg-color-quaternary feature-box-icon-extra-large appear-animation"
                                    data-appear-animation="fadeInLeftShorterPlus" data-appear-animation-delay="500">
                                    <img className="icon-animated" width="42" height="42"
                                         src="img/demos/education/icons/icon-list.svg" alt="" data-icon
                                         data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary ms-2'}"/>
                                </div>
                                <div className="feature-box-info appear-animation"
                                     data-appear-animation="fadeInLeftShorterPlus" data-appear-animation-delay="300">
                                    <p className="mt-2 pt-1 mb-0 text-1 p-relative top-5 text-uppercase">Step 2</p>
                                    <h4 className="mb-0 text-color-secondary">Make a Register</h4>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">

                            <div className="feature-box feature-box-steps">
                                <div className="feature-box-step-number appear-animation"
                                     data-appear-animation="fadeInLeftShorterPlus" data-appear-animation-delay="750">
                                    <em>3.</em>
                                </div>
                                <div
                                    className="feature-box-icon bg-color-quaternary feature-box-icon-extra-large appear-animation"
                                    data-appear-animation="fadeInLeftShorterPlus" data-appear-animation-delay="750">
                                    <img className="icon-animated" width="45" height="45"
                                         src="img/demos/education/icons/icon-laptop.svg" alt="" data-icon
                                         data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"/>
                                </div>
                                <div className="feature-box-info appear-animation"
                                     data-appear-animation="fadeInLeftShorterPlus" data-appear-animation-delay="450">
                                    <p className="mt-2 pt-1 mb-0 text-1 p-relative top-5 text-uppercase">Step 3</p>
                                    <h4 className="mb-0 text-color-secondary">Enjoy and Learn</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <section className="section custom-bg-color-grey-1 border-0 m-0" id="courses">
                <div className="container position-relative my-4">

                    <div className="custom-element custom-element-pos-1 appear-animation"
                         data-appear-animation="expandIn" data-appear-animation-delay="200">
                        <div className="opacity-2" data-plugin-float-element
                             data-plugin-options="{'startPos': 'bottom', 'speed': 0.8, 'transition': true, 'transitionDuration': 3000}">
                            <img className="icon-animated" width="157" height="157"
                                 src="img/demos/education/elements/element-1.svg" alt="" data-icon
                                 data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"/>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col text-center">
                            <div className="overflow-hidden">
                                <h2 className="text-color-secondary font-weight-semi-bold text-6 line-height-1 mb-3-5 appear-animation"
                                    data-appear-animation="maskUp" data-appear-animation-delay="300">Popular
                                    Courses</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col appear-animation" data-appear-animation="fadeInLeftShorterPlus"
                             data-appear-animation-delay="500">
                            <div
                                className="owl-carousel owl-theme nav-style-1 nav-outside nav-font-size-lg custom-nav-secondary mb-0"
                                data-plugin-options="{'responsive': {'576': {'items': 1}, '768': {'items': 2}, '992': {'items': 2}, '1200': {'items': 3}}, 'loop': true, 'nav': true, 'dots': false, 'margin': 20}">
                                <div>
                                    <div className="card custom-card-courses border-radius-0">
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
                                <div>
                                    <div className="card custom-card-courses border-radius-0">
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
                                <div>
                                    <div className="card custom-card-courses border-radius-0">
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
                                <div>
                                    <div className="card custom-card-courses border-radius-0">
                                        <div className="p-relative">
                                            <a href="demo-education-courses-details.html"
                                               className="text-color-secondary" title="">
                                                <img className="card-img-top border-radius-0"
                                                     src="img/demos/education/courses/course-4.jpg" alt=""/>
                                            </a>
                                            <div className="custom-card-courses-author">
                                                <div className="img-thumbnail img-thumbnail-no-borders">
                                                    <img src="img/avatars/avatar-4.jpg" className="rounded-circle"
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
                            </div>
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col text-center">
                            <a href="demo-education-courses.html"
                               className="btn btn-secondary font-weight-bold btn-px-5 btn-py-3 mt-4 mb-2 appear-animation"
                               data-appear-animation="fadeInUpShorterPlus" data-appear-animation-delay="350">VIEW
                                ALL</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-background custom-section-background-1 bg-color-tertiary border-0 m-0"
                     style={{
                         backgroundImage: 'url(img/demos/education/backgrounds/background-1.jpg)',
                         backgroundPosition: '100% 100%',
                         backgroundRepeat: 'no-repeat',
                         backgroundSize: 'contain'
                     }}>
                <div className="container my-4">
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <div className="card border-radius-0 appear-animation"
                                 data-appear-animation="fadeInUpShorterPlus" data-appear-animation-delay="350">
                                <div className="card-body py-5 my-2">

                                    <div className="row">
                                        <div className="col px-4">
                                            <div className="text-center">
                                                <h2 className="text-color-secondary font-weight-semi-bold text-8 line-height-1 mb-2">Register
                                                    Now</h2>
                                                <p className="text-4">Get <strong>50% OFF</strong> For All Courses</p>
                                            </div>
                                            <div
                                                className="countdown text-color-primary font-weight-semibold custom-countdown-style-1 justify-content-center mb-4 py-2 px-2"
                                                data-plugin-countdown
                                                data-plugin-options="{'textDay': 'DAYS', 'textHour': 'HRS', 'textMin': 'MIN', 'textSec': 'SEC', 'date': '2025/01/01 12:00:00', 'wrapperClass': 'text-color-primary', 'numberClass': 'font-weight-semibold text-color-primary'}"></div>

                                            <form className="custom-form-style-1 contact-form" method="POST">

                                                <div className="contact-form-success alert alert-success d-none mt-4">
                                                    <strong>Success!</strong> Your register has been sent to us.
                                                </div>

                                                <div className="contact-form-error alert alert-danger d-none mt-4">
                                                    <strong>Error!</strong> There was an error sending your register.
                                                    <span className="mail-error-message text-1 d-block"></span>
                                                </div>

                                                <div className="row g-2">
                                                    <div className="form-group col-md-6 mb-2">
                                                        <input type="text" value=""
                                                               data-msg-required="Please enter your first name."
                                                               maxLength="100"
                                                               className="form-control p-3 bg-color-tertiary"
                                                               name="firstName" id="firstName" placeholder="FIRST NAME*"
                                                               required/>
                                                    </div>
                                                    <div className="form-group col-md-6 mb-2">
                                                        <input type="text" value=""
                                                               data-msg-required="Please enter your last name."
                                                               maxLength="100"
                                                               className="form-control p-3 bg-color-tertiary custom-border-start-1"
                                                               name="lastName" id="lastName" placeholder="LAST NAME*"
                                                               required/>
                                                    </div>
                                                </div>
                                                <div className="row g-2">
                                                    <div className="form-group col-md-6 mb-2">
                                                        <input type="text" value=""
                                                               data-msg-required="Please enter your phone number."
                                                               maxLength="100"
                                                               className="form-control p-3 bg-color-tertiary"
                                                               name="phone" id="phone" placeholder="PHONE*" required/>
                                                    </div>
                                                    <div className="form-group col-md-6 mb-2">
                                                        <input type="email" value=""
                                                               data-msg-required="Please enter your email address."
                                                               data-msg-email="Please enter a valid email address."
                                                               maxLength="100"
                                                               className="form-control p-3 bg-color-tertiary custom-border-start-1"
                                                               name="email" id="email" placeholder="EMAIL*" required/>
                                                    </div>
                                                </div>
                                                <div className="row g-2">
                                                    <div className="form-group col mb-0">
                                                        <input type="submit" value="GET IT NOW"
                                                               className="btn btn-secondary font-weight-bold d-block btn-px-5 btn-py-3 w-100"
                                                               data-loading-text="Loading..."/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section custom-bg-color-grey-1 border-0 m-0">
                <div className="container position-relative my-4">

                    <div className="custom-element custom-element-pos-2 appear-animation"
                         data-appear-animation="expandIn" data-appear-animation-delay="200">
                        <div className="opacity-2" data-plugin-float-element
                             data-plugin-options="{'startPos': 'bottom', 'speed': 0.8, 'transition': true, 'transitionDuration': 3000}">
                            <img className="icon-animated" width="157" height="157"
                                 src="img/demos/education/elements/element-1.svg" alt="" data-icon
                                 data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"/>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col text-center">
                            <div className="overflow-hidden">
                                <h2 className="text-color-secondary font-weight-semi-bold text-6 line-height-1 mb-3-5 appear-animation"
                                    data-appear-animation="maskUp" data-appear-animation-delay="300">What Students
                                    Say</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="appear-animation" data-appear-animation="fadeInUpShorterPlus"
                             data-appear-animation-delay="350">
                            <div
                                className="owl-carousel owl-theme nav-style-1 nav-outside nav-font-size-lg custom-nav-secondary mb-0"
                                data-plugin-options="{'responsive': {'576': {'items': 1}, '768': {'items': 1}, '992': {'items': 1}, '1200': {'items': 1}}, 'loop': true, 'nav': true, 'dots': false, 'margin': 20}">
                                <div className="px-lg-5 mx-lg-5">
                                    <div
                                        className="testimonial testimonial-style-2 testimonial-with-quotes testimonial-quotes-primary mb-0">
                                        <div className="testimonial-author">
                                            <img src="img/clients/client-1.jpg" className="img-fluid rounded-circle"
                                                 alt=""/>
                                        </div>
                                        <blockquote>
                                            <p className="mb-0 custom-font-1 fst-italic text-4 line-height-7">Lorem
                                                ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta,
                                                tincidunt turpis at, interdum tortor. Suspendisse potenti. Lorem ipsum
                                                dolor sit amet, consectetur adipiscing elit. Sociis natoque penatibus et
                                                magnis dis parturient montes, nascetur ridiculus mus. Fusce ante tellus,
                                                convallis non consectetur sed, pharetra nec ex.</p>
                                        </blockquote>
                                        <div className="testimonial-author">
                                            <p><strong className="font-weight-bold">John Smith</strong></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-lg-5 mx-lg-5">
                                    <div
                                        className="testimonial testimonial-style-2 testimonial-with-quotes testimonial-quotes-primary mb-0">
                                        <div className="testimonial-author">
                                            <img src="img/clients/client-2.jpg" className="img-fluid rounded-circle"
                                                 alt=""/>
                                        </div>
                                        <blockquote>
                                            <p className="mb-0 custom-font-1 fst-italic text-4 line-height-7">Lorem
                                                ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta,
                                                tincidunt turpis at, interdum tortor. Suspendisse potenti. Lorem ipsum
                                                dolor sit amet, consectetur adipiscing elit. Sociis natoque penatibus et
                                                magnis dis parturient montes, nascetur ridiculus mus. Fusce ante tellus,
                                                convallis non consectetur sed, pharetra nec ex.</p>
                                        </blockquote>
                                        <div className="testimonial-author">
                                            <p><strong className="font-weight-bold">John Smith</strong></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-lg-5 mx-lg-5">
                                    <div
                                        className="testimonial testimonial-style-2 testimonial-with-quotes testimonial-quotes-primary mb-0">
                                        <div className="testimonial-author">
                                            <img src="img/clients/client-3.jpg" className="img-fluid rounded-circle"
                                                 alt=""/>
                                        </div>
                                        <blockquote>
                                            <p className="mb-0 custom-font-1 fst-italic text-4 line-height-7">Lorem
                                                ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta,
                                                tincidunt turpis at, interdum tortor. Suspendisse potenti. Lorem ipsum
                                                dolor sit amet, consectetur adipiscing elit. Sociis natoque penatibus et
                                                magnis dis parturient montes, nascetur ridiculus mus. Fusce ante tellus,
                                                convallis non consectetur sed, pharetra nec ex.</p>
                                        </blockquote>
                                        <div className="testimonial-author">
                                            <p><strong className="font-weight-bold">John Smith</strong></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-lg-5 mx-lg-5">
                                    <div
                                        className="testimonial testimonial-style-2 testimonial-with-quotes testimonial-quotes-primary mb-0">
                                        <div className="testimonial-author">
                                            <img src="img/clients/client-4.jpg" className="img-fluid rounded-circle"
                                                 alt=""/>
                                        </div>
                                        <blockquote>
                                            <p className="mb-0 custom-font-1 fst-italic text-4 line-height-7">Lorem
                                                ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta,
                                                tincidunt turpis at, interdum tortor. Suspendisse potenti. Lorem ipsum
                                                dolor sit amet, consectetur adipiscing elit. Sociis natoque penatibus et
                                                magnis dis parturient montes, nascetur ridiculus mus. Fusce ante tellus,
                                                convallis non consectetur sed, pharetra nec ex.</p>
                                        </blockquote>
                                        <div className="testimonial-author">
                                            <p><strong className="font-weight-bold">John Smith</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-color-tertiary border-0 m-0">
                <div className="container my-4">
                    <div className="row mb-4">
                        <div className="col text-center">
                            <div className="overflow-hidden">
                                <h2 className="text-color-secondary font-weight-semi-bold text-6 line-height-1 mb-3-5 appear-animation"
                                    data-appear-animation="maskUp" data-appear-animation-delay="300">Latest News</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-3">
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <article className="appear-animation" data-appear-animation="fadeInUpShorter"
                                     data-appear-animation-delay="300">
                                <div className="card border-0 border-radius-0 box-shadow-1">
                                    <div className="card-body p-3 z-index-1">
                                        <a href="demo-education-blog-post.html">
                                            <img className="card-img-top border-radius-0 mb-2"
                                                 src="img/demos/education/blog/blog-1.jpg" alt="Card Image"/>
                                        </a>
                                        <p className="text-uppercase text-color-default text-1 my-2">
                                            <time pubdate="123" dateTime="2024-01-10">10 Jan 2024</time>
                                            <span className="opacity-3 d-inline-block px-2">|</span>
                                            3 Comments
                                            <span className="opacity-3 d-inline-block px-2">|</span>
                                            John Doe
                                        </p>
                                        <div className="card-body p-0">
                                            <h4 className="card-title text-5 font-weight-semi-bold pb-1 mb-2"><a
                                                className="text-color-secondary text-decoration-none"
                                                href="demo-education-blog-post.html">Lorem ipsum dolor sit amet</a></h4>
                                            <p className="card-text mb-2">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Nunc viverra lorem , consectetur adipiscing elit...</p>
                                            <a href="demo-education-blog-post.html"
                                               className="btn btn-link font-weight-semibold text-decoration-none text-2 ps-0">READ
                                                MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <article className="appear-animation" data-appear-animation="fadeInUpShorter"
                                     data-appear-animation-delay="300">
                                <div className="card border-0 border-radius-0 box-shadow-1">
                                    <div className="card-body p-3 z-index-1">
                                        <a href="demo-education-blog-post.html">
                                            <img className="card-img-top border-radius-0 mb-2"
                                                 src="img/demos/education/blog/blog-2.jpg" alt="Card Image"/>
                                        </a>
                                        <p className="text-uppercase text-color-default text-1 my-2">
                                            <time pubdate dateTime="2024-01-10">10 Jan 2024</time>
                                            <span className="opacity-3 d-inline-block px-2">|</span>
                                            3 Comments
                                            <span className="opacity-3 d-inline-block px-2">|</span>
                                            John Doe
                                        </p>
                                        <div className="card-body p-0">
                                            <h4 className="card-title text-5 font-weight-semi-bold pb-1 mb-2"><a
                                                className="text-color-secondary text-decoration-none"
                                                href="demo-education-blog-post.html">Lorem ipsum dolor sit amet</a></h4>
                                            <p className="card-text mb-2">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Nunc viverra lorem , consectetur adipiscing elit...</p>
                                            <a href="demo-education-blog-post.html"
                                               className="btn btn-link font-weight-semibold text-decoration-none text-2 ps-0">READ
                                                MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <article className="appear-animation" data-appear-animation="fadeInUpShorter"
                                     data-appear-animation-delay="300">
                                <div className="card border-0 border-radius-0 box-shadow-1">
                                    <div className="card-body p-3 z-index-1">
                                        <a href="demo-education-blog-post.html">
                                            <img className="card-img-top border-radius-0 mb-2"
                                                 src="img/demos/education/blog/blog-3.jpg" alt="Card Image"/>
                                        </a>
                                        <p className="text-uppercase text-color-default text-1 my-2">
                                            <time pubdate dateTime="2024-01-10">10 Jan 2024</time>
                                            <span className="opacity-3 d-inline-block px-2">|</span>
                                            3 Comments
                                            <span className="opacity-3 d-inline-block px-2">|</span>
                                            John Doe
                                        </p>
                                        <div className="card-body p-0">
                                            <h4 className="card-title text-5 font-weight-semi-bold pb-1 mb-2"><a
                                                className="text-color-secondary text-decoration-none"
                                                href="demo-education-blog-post.html">Lorem ipsum dolor sit amet</a></h4>
                                            <p className="card-text mb-2">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Nunc viverra lorem , consectetur adipiscing elit...</p>
                                            <a href="demo-education-blog-post.html"
                                               className="btn btn-link font-weight-semibold text-decoration-none text-2 ps-0">READ
                                                MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section section-background custom-section-background-2 bg-color-light border-0 m-0"
                     style={{
                         backgroundImage: 'url(img/demos/education/backgrounds/background-2.jpg)',
                         backgroundPosition: '0 100%',
                         backgroundRepeat: 'no-repeat',
                         backgroundSize: 'contain'
                     }}>
                <div className="container position-relative my-4">

                    <div className="custom-element custom-element-pos-3 appear-animation"
                         data-appear-animation="expandIn" data-appear-animation-delay="200">
                        <div className="opacity-2" data-plugin-float-element
                             data-plugin-options="{'startPos': 'bottom', 'speed': 0.8, 'transition': true, 'transitionDuration': 3000}">
                            <img className="icon-animated" width="157" height="157"
                                 src="img/demos/education/elements/element-1.svg" alt="" data-icon
                                 data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-dark'}"/>
                        </div>
                    </div>

                    <div className="row justify-content-end mb-4">
                        <div className="col-lg-6 py-4">

                            <div className="row">
                                <div className="col">
                                    <div className="feature-box feature-box-style-5">
                                        <div className="feature-box-icon appear-animation"
                                             data-appear-animation="fadeInLeftShorterPlus"
                                             data-appear-animation-delay="100">
                                            <img className="icon-animated" width="50"
                                                 src="img/demos/education/icons/icon-medal.svg" alt="" data-icon
                                                 data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"/>
                                        </div>
                                        <div className="feature-box-info">
                                            <div className="overflow-hidden">
                                                <h2 className="text-color-secondary font-weight-semi-bold text-6 line-height-1 mb-2 pb-1 appear-animation"
                                                    data-appear-animation="maskUp"
                                                    data-appear-animation-delay="100">National Awards</h2>
                                            </div>
                                            <p className="text-3-5 line-height-9 mb-5 appear-animation"
                                               data-appear-animation="fadeInUpShorterPlus"
                                               data-appear-animation-delay="100">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Suspendisse quis elit vitae enim vehicula fermentum
                                                consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="feature-box feature-box-style-5">
                                        <div className="feature-box-icon appear-animation"
                                             data-appear-animation="fadeInLeftShorterPlus"
                                             data-appear-animation-delay="200">
                                            <img className="icon-animated" width="50"
                                                 src="img/demos/education/icons/icon-list.svg" alt="" data-icon
                                                 data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"/>
                                        </div>
                                        <div className="feature-box-info">
                                            <div className="overflow-hidden">
                                                <h2 className="text-color-secondary font-weight-semi-bold text-6 line-height-1 mb-2 pb-1 appear-animation"
                                                    data-appear-animation="maskUp"
                                                    data-appear-animation-delay="200">Many Courses</h2>
                                            </div>
                                            <p className="text-3-5 line-height-9 mb-5 appear-animation"
                                               data-appear-animation="fadeInUpShorterPlus"
                                               data-appear-animation-delay="200">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Suspendisse quis elit vitae enim vehicula fermentum
                                                consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="feature-box feature-box-style-5">
                                        <div className="feature-box-icon appear-animation"
                                             data-appear-animation="fadeInLeftShorterPlus"
                                             data-appear-animation-delay="300">
                                            <img className="icon-animated" width="50"
                                                 src="img/demos/education/icons/icon-badge.svg" alt="" data-icon
                                                 data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"/>
                                        </div>
                                        <div className="feature-box-info">
                                            <div className="overflow-hidden">
                                                <h2 className="text-color-secondary font-weight-semi-bold text-6 line-height-1 mb-2 pb-1 appear-animation"
                                                    data-appear-animation="maskUp" data-appear-animation-delay="300">The
                                                    Best Instructors</h2>
                                            </div>
                                            <p className="text-3-5 line-height-9 mb-0 appear-animation"
                                               data-appear-animation="fadeInUpShorterPlus"
                                               data-appear-animation-delay="300">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Suspendisse quis elit vitae enim vehicula fermentum
                                                consectetur adipiscing elit. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default SiteIndex;