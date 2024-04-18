import {Helmet} from "react-helmet";

const SiteContactUs = ({title}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className="container">
                <div className="row py-3">
                    <div className="col">

                        <p className="font-weight-medium text-4">Aenean sollicitudin, lorem quis bibendum auctor, <span
                            className="highlight highlight-primary highlight-bg-opacity highlight-animated"
                            data-appear-animation="highlight-animated-start" data-appear-animation-delay="2000"
                            data-plugin-options="{'flagClassOnly': true}">nisi elit consequat ipsum</span>, nec sagittis
                            sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi
                            accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. </p>
                        <p className="text-3-5 line-height-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Proin bibendum ultricies nunc, eu interdum enim convallis pretium. Quisque eu neque augue.
                            Aliquam egestas nunc at efficitur faucibus. Praesent mauris eros, tincidunt id enim sodales,
                            rhoncus malesuada ligula. </p>

                        <hr className="solid my-5"/>

                        <div className="row">
                            <div className="col-md-3 mb-4 mb-md-0 text-center">
                                <div className="feature-box d-flex flex-column align-items-center">
                                    <div
                                        className="feature-box-icon bg-color-quaternary feature-box-icon-extra-large appear-animation"
                                        data-appear-animation="fadeInLeftShorterPlus" data-appear-animation-delay="250">
                                        <img className="icon-animated" width="100" height="46"
                                             src="img/demos/education/icons/icon-pin.svg" alt="" data-icon
                                             data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"/>
                                    </div>
                                    <div className="feature-box-info ps-0 appear-animation"
                                         data-appear-animation="fadeInLeftShorterPlus"
                                         data-appear-animation-delay="150">
                                        <p className="mt-2 pt-1 mb-0 text-1 p-relative top-5 text-uppercase">Address</p>
                                        <p className="mb-0 text-color-secondary text-4 font-weight-semi-bold">123 Porto
                                            Blvd, Suite 100</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4 mb-md-0 text-center">
                                <div className="feature-box d-flex flex-column align-items-center">
                                    <div
                                        className="feature-box-icon bg-color-quaternary feature-box-icon-extra-large appear-animation"
                                        data-appear-animation="fadeInLeftShorterPlus" data-appear-animation-delay="250">
                                        <img className="icon-animated" width="100" height="46"
                                             src="img/demos/education/icons/icon-phone-call.svg" alt="" data-icon
                                             data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"/>
                                    </div>
                                    <div className="feature-box-info ps-0 appear-animation"
                                         data-appear-animation="fadeInLeftShorterPlus"
                                         data-appear-animation-delay="150">
                                        <p className="mt-2 pt-1 mb-0 text-1 p-relative top-5 text-uppercase">Phone
                                            Number</p>
                                        <p className="mb-0 text-color-secondary text-4 font-weight-semi-bold"><a
                                            href="tel:+1234567890" className="text-color-secondary">(800) 123-4567</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4 mb-md-0 text-center">
                                <div className="feature-box d-flex flex-column align-items-center">
                                    <div
                                        className="feature-box-icon bg-color-quaternary feature-box-icon-extra-large appear-animation"
                                        data-appear-animation="fadeInLeftShorterPlus" data-appear-animation-delay="250">
                                        <img className="icon-animated" width="100" height="46"
                                             src="img/demos/education/icons/icon-mail.svg" alt="" data-icon
                                             data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"/>
                                    </div>
                                    <div className="feature-box-info ps-0 appear-animation"
                                         data-appear-animation="fadeInLeftShorterPlus"
                                         data-appear-animation-delay="150">
                                        <p className="mt-2 pt-1 mb-0 text-1 p-relative top-5 text-uppercase">E-mail
                                            Address</p>
                                        <p className="mb-0 text-color-secondary text-4 font-weight-semi-bold"><a
                                            href="mailto:porto@portotheme.com"
                                            className="text-color-secondary">porto@portotheme.com</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4 mb-md-0 text-center">
                                <div className="feature-box d-flex flex-column align-items-center">
                                    <div
                                        className="feature-box-icon bg-color-quaternary feature-box-icon-extra-large appear-animation"
                                        data-appear-animation="fadeInLeftShorterPlus" data-appear-animation-delay="250">
                                        <img className="icon-animated" width="100" height="46"
                                             src="img/demos/education/icons/icon-appointment.svg" alt="" data-icon
                                             data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"/>
                                    </div>
                                    <div className="feature-box-info ps-0 appear-animation"
                                         data-appear-animation="fadeInLeftShorterPlus"
                                         data-appear-animation-delay="150">
                                        <p className="mt-2 pt-1 mb-0 text-1 p-relative top-5 text-uppercase">Working
                                            Days / Hours</p>
                                        <p className="mb-0 text-color-secondary text-4 font-weight-semi-bold">9:00AM -
                                            8:00PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="solid mt-5 mb-4"/>

                    </div>
                </div>
                <div className="row pb-5 mb-3">
                    <div className="col">
                        <h2 className="text-color-secondary font-weight-semi-bold text-6 line-height-1 mb-4">Send a
                            Message</h2>
                        <form className="contact-form custom-form-style-1" action="php/contact-form.php" method="POST">
                            <div className="contact-form-success alert alert-success d-none mt-4">
                                <strong>Success!</strong> Your message has been sent to us.
                            </div>

                            <div className="contact-form-error alert alert-danger d-none mt-4">
                                <strong>Error!</strong> There was an error sending your message.
                                <span className="mail-error-message text-1 d-block"></span>
                            </div>

                            <div className="row row-gutter-sm">
                                <div className="form-group col-lg-6 mb-4">
                                    <input type="text" value="" data-msg-required="Please enter your name."
                                           maxLength="100" className="form-control" name="name" id="name" required
                                           placeholder="Your Name"/>
                                </div>
                                <div className="form-group col-lg-6 mb-4">
                                    <input type="text" value="" data-msg-required="Please enter your phone number."
                                           maxLength="100" className="form-control" name="phone" id="phone" required
                                           placeholder="Phone Number"/>
                                </div>
                            </div>
                            <div className="row row-gutter-sm">
                                <div className="form-group col-lg-6 mb-4">
                                    <input type="email" value="" data-msg-required="Please enter your email address."
                                           data-msg-email="Please enter a valid email address." maxLength="100"
                                           className="form-control" name="email" id="email" required
                                           placeholder="Your Name"/>
                                </div>
                                <div className="form-group col-lg-6 mb-4">
                                    <input type="text" value="" data-msg-required="Please enter the subject."
                                           maxLength="100" className="form-control" name="subject" id="subject" required
                                           placeholder="Subject"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col mb-4">
                                    <textarea maxLength="5000" data-msg-required="Please enter your message." rows="10"
                                              className="form-control" name="message" id="message" required
                                              placeholder="Your Message"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col mb-0">
                                    <button type="submit"
                                            className="btn btn-secondary font-weight-bold btn-px-5 btn-py-3 mt-4 mb-2"
                                            data-loading-text="Loading...">SEND MESSAGE
                                    </button>
                                </div>
                            </div>
                        </form>
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
export default SiteContactUs
