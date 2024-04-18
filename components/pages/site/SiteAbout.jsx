import {Helmet} from "react-helmet";

const SiteAbout = ({title}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className="container">
                <div className="row py-3">
                    <div className="col">

                        <p className="font-weight-medium text-4">Founded in 2001 by John Doe, gravida nibh vel velit
                            auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, <span
                                className="highlight highlight-primary highlight-bg-opacity highlight-animated"
                                data-appear-animation="highlight-animated-start" data-appear-animation-delay="2000"
                                data-plugin-options="{'flagClassOnly': true}">nisi elit consequat ipsum</span>, nec
                            sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. </p>
                        <p className="text-3-5 line-height-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Proin bibendum ultricies nunc, eu interdum enim convallis pretium. Quisque eu neque augue.
                            Aliquam egestas nunc at efficitur faucibus. Praesent mauris eros, tincidunt id enim sodales,
                            rhoncus malesuada ligula. </p>
                        <div className="row justify-content-center counters py-4 gy-4 gy-md-0 my-5-5">
                            <div className="col-md-auto mt-0">
                                <div className="counter appear-animation" data-appear-animation="fadeInUpShorterPlus"
                                     data-appear-animation-delay="150">
                                    <strong className="text-color-secondary text-13" data-to="30" data-append="+"
                                            data-plugin-options="{'accY': -200}">0</strong>
                                    <span
                                        className="text-color-secondary font-weight-bold text-4">Certified Instructors</span>
                                </div>
                            </div>
                            <div className="col-md-auto px-xl-5 mx-md-5">
                                <div className="counter appear-animation" data-appear-animation="fadeInUpShorterPlus"
                                     data-appear-animation-delay="300">
                                    <strong className="text-color-primary text-13" data-to="2000" data-append="+"
                                            data-plugin-options="{'accY': -200}">0</strong>
                                    <span
                                        className="text-color-primary font-weight-bold text-4">Students Enrolled</span>
                                </div>
                            </div>
                            <div className="col-md-auto">
                                <div className="counter appear-animation" data-appear-animation="fadeInUpShorterPlus"
                                     data-appear-animation-delay="450">
                                    <strong className="text-color-secondary text-13" data-to="200" data-append="+"
                                            data-plugin-options="{'accY': -200}">0</strong>
                                    <span
                                        className="text-color-secondary font-weight-bold text-4">Complete Courses</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-3-5 line-height-9 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin bibendum ultricies nunc, eu interdum enim convallis pretium. Quisque eu neque
                            augue. Aliquam egestas nunc at efficitur faucibus. Praesent mauris eros, tincidunt id enim
                            sodales, rhoncus malesuada ligula. </p>

                        <img className="img-fluid lazyload" src="img/lazy.png"
                             data-src="img/demos/education/generic/generic-1.jpg" alt=""/>

                        <div className="row justify-content-center my-5">
                            <div className="col-lg-8 text-center">
                                <div
                                    className="testimonial testimonial-style-2 testimonial-with-quotes testimonial-quotes-primary mb-0">
                                    <blockquote>
                                        <p className="mb-0 custom-font-1 fst-italic text-5 line-height-7">Pellentesque
                                            ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh
                                            ipsum, blandit id faucibus accumsan libero luctus, molestie nunc.</p>
                                    </blockquote>
                                    <div className="testimonial-author">
                                        <p><strong className="font-weight-bold text-color-secondary">John Doe - CEO &
                                            Founder</strong></p>
                                    </div>
                                </div>
                                <img src="img/demos/education/signature.png" className="img-fluid my-4" alt=""/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="overflow-hidden">
                                    <div className="overflow-hidden mb-3-5">
                                        <h2 className="text-color-secondary font-weight-semi-bold text-6 line-height-1 mb-0 appear-animation"
                                            data-appear-animation="maskUp" data-appear-animation-delay="100">Our
                                            Mission</h2>
                                    </div>
                                    <p className="text-3-5 line-height-9 mb-5 appear-animation"
                                       data-appear-animation="fadeInUpShorterPlus"
                                       data-appear-animation-delay="300">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Praesent dapibus elementum ante quis commodo. Fusce tincidunt
                                        pretium pellentesque. Nulla vitae ante tincidunt, suscipit dui sit amet, posuere
                                        tortor. Sed elementum ex fringilla, molestie nibh eu, pulvinar diam. Fusce
                                        vestibulum nisl a lectus consequat, vel semper arcu tempor. Sed ac consequat
                                        nunc.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="overflow-hidden">
                                    <div className="overflow-hidden mb-3-5">
                                        <h2 className="text-color-secondary font-weight-semi-bold text-6 line-height-1 mb-0 appear-animation"
                                            data-appear-animation="maskUp" data-appear-animation-delay="500">Our
                                            Vision</h2>
                                    </div>
                                    <p className="text-3-5 line-height-9 mb-5 appear-animation"
                                       data-appear-animation="fadeInUpShorterPlus"
                                       data-appear-animation-delay="700">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Praesent dapibus elementum ante quis commodo. Fusce tincidunt
                                        pretium pellentesque. Nulla vitae ante tincidunt, suscipit dui sit amet, posuere
                                        tortor. Sed elementum ex fringilla, molestie nibh eu, pulvinar diam. Fusce
                                        vestibulum nisl a lectus consequat, vel semper arcu tempor. Sed ac consequat
                                        nunc.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

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
export default SiteAbout
