import {Helmet} from "react-helmet";

const InstructorsIndex = ({title}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <section className="section custom-bg-color-grey-1 border-0 m-0">
                <div className="container">

                    <div className="row py-3 gy-5 gy-lg-0">

                        <div className="col">

                            <div className="row mb-5">
                                <div className="col">
                                    <div
                                        className="d-flex flex-wrap bg-light custom-link-hover-effects custom-instructor-details">
                                        <div className="position-relative lazyload col-12 col-md-3"
                                             data-bg-src="img/demos/education/team/team-1.jpg"
                                             style={{
                                                 backgroundPosition: "center",
                                                 backgroundSize: "cover",
                                                 minHeight: "302px"
                                             }}>
                                        </div>
                                        <div className="col-md-9 p-5">

                                            <div className="d-md-flex mb-4">
                                                <div className="ps-md-0 mb-3 mb-md-0 pe-4 me-4 border-right">
                                                    <div className="d-flex flex-row align-items-center h-100">
                                                        <div className="p-0">
                                                            <p className="mb-0 text-1 text-uppercase p-relative top-3">Full
                                                                Name</p>
                                                            <h4 className="mb-0 text-color-secondary text-6">John
                                                                Doe</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-md-0 mb-3 mb-md-0 pe-4 me-4 border-right">
                                                    <div className="d-flex flex-row align-items-center h-100">
                                                        <div className="p-0">
                                                            <p className="mb-0 text-1 text-uppercase p-relative top-3">Available
                                                                Courses</p>
                                                            <h4 className="mb-0 text-color-secondary text-3">12</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-md-0 mb-3 mb-md-0 pe-4 me-4 flex-grow-1">
                                                    <div className="d-flex flex-row align-items-center h-100">
                                                        <div className="p-0">
                                                            <p className="mb-0 text-1 text-uppercase p-relative top-3">Average
                                                                Rating</p>
                                                            <h4 className="mb-0 text-color-secondary text-3">4.75</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-md-4">
                                                    <div className="d-flex flex-row align-items-center h-100">
                                                        <div className="p-0">
                                                            <a href="#"
                                                               className="btn btn-secondary font-weight-bold btn-px-5 btn-py-3">VIEW
                                                                COURSES</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="custom-read-more-style-1" data-plugin-readmore
                                                 data-plugin-options="{
														'buttonOpenLabel': 'View More <i class=\'fas fa-chevron-down text-2 ms-1\'></i>',
														'buttonCloseLabel': 'View Less <i class=\'fas fa-chevron-up text-2 ms-1\'></i>',
														'maxHeight': 120
													}">
                                                <p className="text-3-5">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Curabitur vulputate posuere tortor luctus
                                                    vulputate. Cras laoreet pretium blandit. </p>
                                                <p className="text-3-5">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Curabitur vulputate posuere tortor luctus
                                                    vulputate. Cras laoreet pretium blandit. Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit. Curabitur vulputate posuere tortor
                                                    luctus vulputate. Cras laoreet pretium blandit. </p>
                                                <p className="text-3-5">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Curabitur vulputate posuere tortor luctus
                                                    vulputate. Cras laoreet pretium blandit. </p>
                                                <div className="readmore-button-wrapper d-none">
                                                    <a href="#" className="text-decoration-none">
                                                        View More
                                                        <i className="fas fa-chevron-down"></i>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col">
                                    <div
                                        className="d-flex flex-wrap bg-light custom-link-hover-effects custom-instructor-details">
                                        <div className="position-relative lazyload col-12 col-md-3"
                                             data-bg-src="img/demos/education/team/team-2.jpg"
                                             style={{
                                                 backgroundPosition: "center",
                                                 backgroundSize: "cover",
                                                 minHeight: "302px"
                                             }}>
                                        </div>
                                        <div className="col-md-9 p-5">

                                            <div className="d-md-flex mb-4">
                                                <div className="ps-md-0 mb-3 mb-md-0 pe-4 me-4 border-right">
                                                    <div className="d-flex flex-row align-items-center h-100">
                                                        <div className="p-0">
                                                            <p className="mb-0 text-1 text-uppercase p-relative top-3">Full
                                                                Name</p>
                                                            <h4 className="mb-0 text-color-secondary text-6">Janice
                                                                Doe</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-md-0 mb-3 mb-md-0 pe-4 me-4 border-right">
                                                    <div className="d-flex flex-row align-items-center h-100">
                                                        <div className="p-0">
                                                            <p className="mb-0 text-1 text-uppercase p-relative top-3">Available
                                                                Courses</p>
                                                            <h4 className="mb-0 text-color-secondary text-3">12</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-md-0 mb-3 mb-md-0 pe-4 me-4 flex-grow-1">
                                                    <div className="d-flex flex-row align-items-center h-100">
                                                        <div className="p-0">
                                                            <p className="mb-0 text-1 text-uppercase p-relative top-3">Average
                                                                Rating</p>
                                                            <h4 className="mb-0 text-color-secondary text-3">4.75</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-md-4">
                                                    <div className="d-flex flex-row align-items-center h-100">
                                                        <div className="p-0">
                                                            <a href="#"
                                                               className="btn btn-secondary font-weight-bold btn-px-5 btn-py-3">VIEW
                                                                COURSES</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="custom-read-more-style-1" data-plugin-readmore
                                                 data-plugin-options="{
														'buttonOpenLabel': 'View More <i class=\'fas fa-chevron-down text-2 ms-1\'></i>',
														'buttonCloseLabel': 'View Less <i class=\'fas fa-chevron-up text-2 ms-1\'></i>',
														'maxHeight': 120
													}">
                                                <p className="text-3-5">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Curabitur vulputate posuere tortor luctus
                                                    vulputate. Cras laoreet pretium blandit. </p>
                                                <p className="text-3-5">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Curabitur vulputate posuere tortor luctus
                                                    vulputate. Cras laoreet pretium blandit. Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit. Curabitur vulputate posuere tortor
                                                    luctus vulputate. Cras laoreet pretium blandit. </p>
                                                <p className="text-3-5">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Curabitur vulputate posuere tortor luctus
                                                    vulputate. Cras laoreet pretium blandit. </p>
                                                <div className="readmore-button-wrapper d-none">
                                                    <a href="#" className="text-decoration-none">
                                                        View More
                                                        <i className="fas fa-chevron-down"></i>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col">
                                    <div
                                        className="d-flex flex-wrap bg-light custom-link-hover-effects custom-instructor-details">
                                        <div className="position-relative lazyload col-12 col-md-3"
                                             data-bg-src="img/demos/education/team/team-3.jpg"
                                             style={{
                                                 backgroundPosition: "center",
                                                 backgroundSize: "cover",
                                                 minHeight: "302px"
                                             }}>
                                        </div>
                                        <div className="col-md-9 p-5">

                                            <div className="d-md-flex mb-4">
                                                <div className="ps-md-0 mb-3 mb-md-0 pe-4 me-4 border-right">
                                                    <div className="d-flex flex-row align-items-center h-100">
                                                        <div className="p-0">
                                                            <p className="mb-0 text-1 text-uppercase p-relative top-3">Full
                                                                Name</p>
                                                            <h4 className="mb-0 text-color-secondary text-6">Robert
                                                                Doe</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-md-0 mb-3 mb-md-0 pe-4 me-4 border-right">
                                                    <div className="d-flex flex-row align-items-center h-100">
                                                        <div className="p-0">
                                                            <p className="mb-0 text-1 text-uppercase p-relative top-3">Available
                                                                Courses</p>
                                                            <h4 className="mb-0 text-color-secondary text-3">12</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-md-0 mb-3 mb-md-0 pe-4 me-4 flex-grow-1">
                                                    <div className="d-flex flex-row align-items-center h-100">
                                                        <div className="p-0">
                                                            <p className="mb-0 text-1 text-uppercase p-relative top-3">Average
                                                                Rating</p>
                                                            <h4 className="mb-0 text-color-secondary text-3">4.75</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-md-4">
                                                    <div className="d-flex flex-row align-items-center h-100">
                                                        <div className="p-0">
                                                            <a href="#"
                                                               className="btn btn-secondary font-weight-bold btn-px-5 btn-py-3">VIEW
                                                                COURSES</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="custom-read-more-style-1" data-plugin-readmore
                                                 data-plugin-options="{
														'buttonOpenLabel': 'View More <i class=\'fas fa-chevron-down text-2 ms-1\'></i>',
														'buttonCloseLabel': 'View Less <i class=\'fas fa-chevron-up text-2 ms-1\'></i>',
														'maxHeight': 120
													}">
                                                <p className="text-3-5">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Curabitur vulputate posuere tortor luctus
                                                    vulputate. Cras laoreet pretium blandit. </p>
                                                <p className="text-3-5">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Curabitur vulputate posuere tortor luctus
                                                    vulputate. Cras laoreet pretium blandit. Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit. Curabitur vulputate posuere tortor
                                                    luctus vulputate. Cras laoreet pretium blandit. </p>
                                                <p className="text-3-5">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Curabitur vulputate posuere tortor luctus
                                                    vulputate. Cras laoreet pretium blandit. </p>
                                                <div className="readmore-button-wrapper d-none">
                                                    <a href="#" className="text-decoration-none">
                                                        View More
                                                        <i className="fas fa-chevron-down"></i>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col">
                                    <div
                                        className="d-flex flex-wrap bg-light custom-link-hover-effects custom-instructor-details">
                                        <div className="position-relative lazyload col-12 col-md-3"
                                             data-bg-src="img/demos/education/team/team-4.jpg"
                                             style={{
                                                 backgroundPosition: "center",
                                                 backgroundSize: "cover",
                                                 minHeight: "302px"
                                             }}>
                                        </div>
                                        <div className="col-md-9 p-5">

                                            <div className="d-md-flex mb-4">
                                                <div className="ps-md-0 mb-3 mb-md-0 pe-4 me-4 border-right">
                                                    <div className="d-flex flex-row align-items-center h-100">
                                                        <div className="p-0">
                                                            <p className="mb-0 text-1 text-uppercase p-relative top-3">Full
                                                                Name</p>
                                                            <h4 className="mb-0 text-color-secondary text-6">Alice
                                                                Doe</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-md-0 mb-3 mb-md-0 pe-4 me-4 border-right">
                                                    <div className="d-flex flex-row align-items-center h-100">
                                                        <div className="p-0">
                                                            <p className="mb-0 text-1 text-uppercase p-relative top-3">Available
                                                                Courses</p>
                                                            <h4 className="mb-0 text-color-secondary text-3">12</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-md-0 mb-3 mb-md-0 pe-4 me-4 flex-grow-1">
                                                    <div className="d-flex flex-row align-items-center h-100">
                                                        <div className="p-0">
                                                            <p className="mb-0 text-1 text-uppercase p-relative top-3">Average
                                                                Rating</p>
                                                            <h4 className="mb-0 text-color-secondary text-3">4.75</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-md-4">
                                                    <div className="d-flex flex-row align-items-center h-100">
                                                        <div className="p-0">
                                                            <a href="#"
                                                               className="btn btn-secondary font-weight-bold btn-px-5 btn-py-3">VIEW
                                                                COURSES</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="custom-read-more-style-1" data-plugin-readmore
                                                 data-plugin-options="{
														'buttonOpenLabel': 'View More <i class=\'fas fa-chevron-down text-2 ms-1\'></i>',
														'buttonCloseLabel': 'View Less <i class=\'fas fa-chevron-up text-2 ms-1\'></i>',
														'maxHeight': 120
													}">
                                                <p className="text-3-5">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Curabitur vulputate posuere tortor luctus
                                                    vulputate. Cras laoreet pretium blandit. </p>
                                                <p className="text-3-5">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Curabitur vulputate posuere tortor luctus
                                                    vulputate. Cras laoreet pretium blandit. Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit. Curabitur vulputate posuere tortor
                                                    luctus vulputate. Cras laoreet pretium blandit. </p>
                                                <p className="text-3-5">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Curabitur vulputate posuere tortor luctus
                                                    vulputate. Cras laoreet pretium blandit. </p>
                                                <div className="readmore-button-wrapper d-none">
                                                    <a href="#" className="text-decoration-none">
                                                        View More
                                                        <i className="fas fa-chevron-down"></i>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col">
                                    <div
                                        className="d-flex flex-wrap bg-light custom-link-hover-effects custom-instructor-details">
                                        <div className="position-relative lazyload col-12 col-md-3"
                                             data-bg-src="img/demos/education/team/team-5.jpg"
                                             style={{
                                                 backgroundPosition: "center",
                                                 backgroundSize: "cover",
                                                 minHeight: "302px"
                                             }}>
                                        </div>
                                        <div className="col-md-9 p-5">

                                            <div className="d-md-flex mb-4">
                                                <div className="ps-md-0 mb-3 mb-md-0 pe-4 me-4 border-right">
                                                    <div className="d-flex flex-row align-items-center h-100">
                                                        <div className="p-0">
                                                            <p className="mb-0 text-1 text-uppercase p-relative top-3">Full
                                                                Name</p>
                                                            <h4 className="mb-0 text-color-secondary text-6">Bob
                                                                Doe</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-md-0 mb-3 mb-md-0 pe-4 me-4 border-right">
                                                    <div className="d-flex flex-row align-items-center h-100">
                                                        <div className="p-0">
                                                            <p className="mb-0 text-1 text-uppercase p-relative top-3">Available
                                                                Courses</p>
                                                            <h4 className="mb-0 text-color-secondary text-3">12</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-md-0 mb-3 mb-md-0 pe-4 me-4 flex-grow-1">
                                                    <div className="d-flex flex-row align-items-center h-100">
                                                        <div className="p-0">
                                                            <p className="mb-0 text-1 text-uppercase p-relative top-3">Average
                                                                Rating</p>
                                                            <h4 className="mb-0 text-color-secondary text-3">4.75</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-md-4">
                                                    <div className="d-flex flex-row align-items-center h-100">
                                                        <div className="p-0">
                                                            <a href="#"
                                                               className="btn btn-secondary font-weight-bold btn-px-5 btn-py-3">VIEW
                                                                COURSES</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="custom-read-more-style-1" data-plugin-readmore
                                                 data-plugin-options="{
														'buttonOpenLabel': 'View More <i class=\'fas fa-chevron-down text-2 ms-1\'></i>',
														'buttonCloseLabel': 'View Less <i class=\'fas fa-chevron-up text-2 ms-1\'></i>',
														'maxHeight': 120
													}">
                                                <p className="text-3-5">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Curabitur vulputate posuere tortor luctus
                                                    vulputate. Cras laoreet pretium blandit. </p>
                                                <p className="text-3-5">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Curabitur vulputate posuere tortor luctus
                                                    vulputate. Cras laoreet pretium blandit. Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit. Curabitur vulputate posuere tortor
                                                    luctus vulputate. Cras laoreet pretium blandit. </p>
                                                <p className="text-3-5">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Curabitur vulputate posuere tortor luctus
                                                    vulputate. Cras laoreet pretium blandit. </p>
                                                <div className="readmore-button-wrapper d-none">
                                                    <a href="#" className="text-decoration-none">
                                                        View More
                                                        <i className="fas fa-chevron-down"></i>
                                                    </a>
                                                </div>
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
                    </div>
                </div>
            </section>

            <section className="section section-height-3 bg-color-tertiary border-0 m-0">
                <div className="container py-3">
                    <div className="row align-items-center justify-content-center text-center text-lg-start">
                        <div className="col-md-8 col-lg-9 mb-4 mb-lg-0">
                            <h2 className="text-color-primary font-weight-bold mb-0 appear-animation"
                                data-appear-animation="fadeInRightShorterPlus" data-appear-animation-delay="150">Ready
                                to kick-start your career?</h2>
                        </div>
                        <div className="col-lg-3 text-lg-end">
                            <a href="demo-education-courses.html"
                               className="btn btn-secondary font-weight-bold btn-px-5 btn-py-3 mt-4 mb-2 appear-animation"
                               data-appear-animation="fadeInLeftShorterPlus" data-appear-animation-delay="350">GET
                                STARTED NOW</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default InstructorsIndex
