import {Helmet} from "react-helmet";

const BlogView = ({title}) => {
    return (
        <>
             <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className="container">

                <div className="row py-3">
                    <div className="col-lg-8 mb-5 mb-lg-0">

                        <article>
                            <div className="card border-0">
                                <div className="card-body z-index-1 p-0">
                                    <p className="text-uppercase text-1 mb-3 text-color-default">
                                        <time pubdate dateTime="2024-01-10">10 Jan 2024</time>
                                        <span className="opacity-3 d-inline-block px-2">|</span> 3 Comments <span
                                        className="opacity-3 d-inline-block px-2">|</span> John Doe
                                    </p>

                                    <div className="post-image pb-4">
                                        <img className="card-img-top custom-border-radius-1"
                                             src="img/blog/wide/blog-2.jpg" alt="Card Image"/>
                                    </div>

                                    <div className="card-body p-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lectus
                                            lacus, rutrum sit amet placerat et, bibendum nec mauris. Duis molestie,
                                            purus eget placerat viverra, nisi odio gravida sapien, congue tincidunt nisl
                                            ante nec tellus. Vestibulum ante ipsum primis in faucibus orci luctus et
                                            ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Fusce sagittis, massa fringilla consequat blandit, mauris
                                            ligula porta nisi, non tristique enim sapien vel nisl. Suspendisse
                                            vestibulum lobortis dapibus. Vestibulum ante ipsum primis in faucibus orci
                                            luctus et ultrices posuere cubilia Curae; Praesent nec tempus nibh. Donec
                                            mollis commodo metus et fringilla. Etiam venenatis, diam id adipiscing
                                            convallis, nisi eros lobortis tellus, feugiat adipiscing ante ante sit amet
                                            dolor. Vestibulum vehicula scelerisque facilisis. Sed faucibus placerat
                                            bibendum. Maecenas sollicitudin commodo justo, quis hendrerit leo consequat
                                            ac. Proin sit amet risus sapien, eget interdum dui. Proin justo sapien,
                                            varius sit amet hendrerit id, egestas quis mauris.</p>
                                        <p>Ut ac elit non mi pharetra dictum nec quis nibh. Pellentesque ut fringilla
                                            elit. Aliquam non ipsum id leo eleifend sagittis id a lorem. Sociis natoque
                                            penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam
                                            massa mauris, viverra et rhoncus a, feugiat ut sem. Quisque ultricies diam
                                            tempus quam molestie vitae sodales dolor sagittis. Praesent commodo sodales
                                            purus. Maecenas scelerisque ligula vitae leo adipiscing a facilisis nisl
                                            ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et
                                            ultrices posuere cubilia Curae;</p>
                                        <p>Curabitur non erat quam, id volutpat leo. Nullam pretium gravida urna et
                                            interdum. Suspendisse in dui tellus. Cras luctus nisl vel risus adipiscing
                                            aliquet. Phasellus convallis lorem dui. Quisque hendrerit, lectus ut
                                            accumsan gravida, leo tellus porttitor mi, ac mattis eros nunc vel enim.
                                            Nulla facilisi. Nam non nulla sed nibh sodales auctor eget non augue.
                                            Pellentesque sollicitudin consectetur mauris, eu mattis mi dictum ac. Etiam
                                            et sapien eu nisl dapibus fermentum et nec tortor.</p>

                                        <!-- Go to www.addtoany.com to customize -->
                                        <!-- AddToAny BEGIN -->
                                        <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
                                            <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
                                            <a className="a2a_button_facebook"></a>
                                            <a className="a2a_button_x"></a>
                                            <a className="a2a_button_copy_link"></a>
                                        </div>
                                        <script async src="https://static.addtoany.com/menu/page.js"></script>
                                        <!-- AddToAny END -->

                                        <hr className="my-5"/>

                                        <div className="post-block post-author">
                                            <h3 className="text-color-secondary text-capitalize font-weight-semi-bold text-5 m-0 mb-3">Author</h3>
                                            <div className="img-thumbnail img-thumbnail-no-borders d-block pb-3">
                                                <a href="blog-post.html">
                                                    <img src="img/avatars/avatar.jpg" className="rounded-circle"
                                                         alt=""/>
                                                </a>
                                            </div>
                                            <p><strong className="name"><a href="#"
                                                                           className="text-4 text-dark pb-2 pt-2 d-block">John
                                                Doe</a></strong></p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
                                                euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem,
                                                adipiscing in adipiscing et, interdum nec metus.</p>
                                        </div>

                                        <hr className="my-5"/>

                                        <div id="comments" className="post-block post-comments">
                                            <h3 className="text-color-secondary text-capitalize font-weight-semi-bold text-5 m-0 mb-3">3
                                                comments for "An Interview with John Doe"</h3>

                                            <ul className="comments">
                                                <li>
                                                    <div className="comment">
                                                        <div
                                                            className="img-thumbnail img-thumbnail-no-borders d-none d-sm-block">
                                                            <img className="avatar rounded-circle" alt=""
                                                                 src="img/avatars/avatar-2.jpg"/>
                                                        </div>
                                                        <div className="comment-block">
                                                            <div className="comment-arrow"></div>
                                                            <span className="comment-by">
																	<strong className="text-dark">John Doe</strong>
																	<span className="float-end">
																		<span> <a href="#"><i
                                                                            className="fas fa-reply"></i> Reply</a></span>
																	</span>
																</span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                Nam viverra euismod odio, gravida pellentesque urna
                                                                varius vitae, gravida pellentesque urna varius vitae.
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                Nam viverra euismod odio, gravida pellentesque urna
                                                                varius vitae. Sed dui lorem, adipiscing in adipiscing
                                                                et, interdum nec metus. Mauris ultricies, justo eu
                                                                convallis placerat, felis enim ornare nisi, vitae mattis
                                                                nulla ante id dui.</p>
                                                            <span
                                                                className="date float-end">January 12, 2024 at 1:38 pm</span>
                                                        </div>
                                                    </div>

                                                    <ul className="comments reply">
                                                        <li>
                                                            <div className="comment">
                                                                <div
                                                                    className="img-thumbnail img-thumbnail-no-borders d-none d-sm-block">
                                                                    <img className="avatar rounded-circle" alt=""
                                                                         src="img/avatars/avatar-3.jpg"/>
                                                                </div>
                                                                <div className="comment-block">
                                                                    <div className="comment-arrow"></div>
                                                                    <span className="comment-by">
																			<strong
                                                                                className="text-dark">John Doe</strong>
																			<span className="float-end">
																				<span> <a href="#"><i
                                                                                    className="fas fa-reply"></i> Reply</a></span>
																			</span>
																		</span>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur
                                                                        adipiscing elit. Nam viverra euismod odio,
                                                                        gravida pellentesque urna varius vitae, gravida
                                                                        pellentesque urna varius vitae.</p>
                                                                    <span className="date float-end">January 12, 2024 at 1:38 pm</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="comment">
                                                                <div
                                                                    className="img-thumbnail img-thumbnail-no-borders d-none d-sm-block">
                                                                    <img className="avatar rounded-circle" alt=""
                                                                         src="img/avatars/avatar-4.jpg"/>
                                                                </div>
                                                                <div className="comment-block">
                                                                    <div className="comment-arrow"></div>
                                                                    <span className="comment-by">
																			<strong
                                                                                className="text-dark">John Doe</strong>
																			<span className="float-end">
																				<span> <a href="#"><i
                                                                                    className="fas fa-reply"></i> Reply</a></span>
																			</span>
																		</span>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur
                                                                        adipiscing elit. Nam viverra euismod odio,
                                                                        gravida pellentesque urna varius vitae, gravida
                                                                        pellentesque urna varius vitae.</p>
                                                                    <span className="date float-end">January 12, 2024 at 1:38 pm</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="comment">
                                                        <div
                                                            className="img-thumbnail img-thumbnail-no-borders d-none d-sm-block">
                                                            <img className="avatar rounded-circle" alt=""
                                                                 src="img/avatars/avatar.jpg"/>
                                                        </div>
                                                        <div className="comment-block">
                                                            <div className="comment-arrow"></div>
                                                            <span className="comment-by">
																	<strong className="text-dark">John Doe</strong>
																	<span className="float-end">
																		<span> <a href="#"><i
                                                                            className="fas fa-reply"></i> Reply</a></span>
																	</span>
																</span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                elit.</p>
                                                            <span
                                                                className="date float-end">January 12, 2024 at 1:38 pm</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="comment">
                                                        <div
                                                            className="img-thumbnail img-thumbnail-no-borders d-none d-sm-block">
                                                            <img className="avatar rounded-circle" alt=""
                                                                 src="img/avatars/avatar.jpg"/>
                                                        </div>
                                                        <div className="comment-block">
                                                            <div className="comment-arrow"></div>
                                                            <span className="comment-by">
																	<strong className="text-dark">John Doe</strong>
																	<span className="float-end">
																		<span> <a href="#"><i
                                                                            className="fas fa-reply"></i> Reply</a></span>
																	</span>
																</span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                elit.</p>
                                                            <span
                                                                className="date float-end">January 12, 2024 at 1:38 pm</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>

                                            <h3 className="text-color-secondary text-capitalize font-weight-semi-bold text-5 m-0 mb-3 mt-5">Leave
                                                a Reply</h3>

                                            <form className="custom-form-simple-validation p-4 rounded bg-color-grey"
                                                  action="/" method="POST">
                                                <div className="p-2">
                                                    <div className="row">
                                                        <div className="form-group col-lg-6">
                                                            <label
                                                                className="form-label required mb-1 font-weight-semi-bold text-dark">Full
                                                                Name</label>
                                                            <input type="text" value=""
                                                                   data-msg-required="Please enter your name."
                                                                   maxLength="100"
                                                                   className="form-control py-3 px-3 border-0 box-shadow-none"
                                                                   name="name" id="name" required/>
                                                        </div>
                                                        <div className="form-group col-lg-6">
                                                            <label
                                                                className="form-label required mb-1 font-weight-semi-bold text-dark">Email
                                                                Address</label>
                                                            <input type="email" value=""
                                                                   data-msg-required="Please enter your email address."
                                                                   data-msg-email="Please enter a valid email address."
                                                                   maxLength="100"
                                                                   className="form-control py-3 px-3 border-0 box-shadow-none"
                                                                   name="email" id="email" required/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group col">
                                                            <label
                                                                className="form-label required mb-1 font-weight-semi-bold text-dark">Comment</label>
                                                            <textarea maxLength="5000"
                                                                      data-msg-required="Please enter your message."
                                                                      rows="8"
                                                                      className="form-control p-3 border-0 box-shadow-none"
                                                                      name="message" id="message" required></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group col mb-0">
                                                            <button type="submit"
                                                                    className="btn btn-primary custom-btn-style-1 font-weight-semibold btn-px-4 btn-py-2 text-3-5"
                                                                    data-loading-text="Loading..."
                                                                    data-cursor-effect-hover="plus"
                                                                    data-cursor-effect-hover-color="light">
                                                                <span>Post Comment</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </article>

                    </div>
                    <div className="blog-sidebar col-lg-4 pt-4 pt-lg-0 mb-5">
                        <aside className="sidebar">
                            <div className="px-3 mb-4">
                                <h3 className="text-color-secondary text-capitalize font-weight-bold text-5 m-0 mb-3">About
                                    The Blog</h3>
                                <p className="m-0">Lorem ipsum dolor sit amet, conse elit porta. Vestibulum ante justo,
                                    volutpat quis porta diam.</p>
                            </div>
                            <div className="py-1 clearfix">
                                <hr className="my-2"/>
                            </div>
                            <div className="px-3 mt-4">
                                <form action="page-search-results.html" method="get">
                                    <div className="input-group mb-3 pb-1">
                                        <input className="form-control box-shadow-none text-1 border-0 bg-color-grey"
                                               placeholder="Search..." name="s" id="s" type="text"/>
                                        <button type="submit" className="btn bg-color-grey text-1 p-2"><i
                                            className="fas fa-search m-2"></i></button>
                                    </div>
                                </form>
                            </div>
                            <div className="py-1 clearfix">
                                <hr className="my-2"/>
                            </div>
                            <div className="px-3 mt-4">
                                <h3 className="text-color-secondary text-capitalize font-weight-bold text-5 m-0 mb-3">Recent
                                    Posts</h3>
                                <div className="pb-2 mb-1">
                                    <a href="#"
                                       className="text-color-default text-uppercase text-1 mb-0 d-block text-decoration-none">10
                                        Jan 2024 <span className="opacity-3 d-inline-block px-2">|</span> 3
                                        Comments <span className="opacity-3 d-inline-block px-2">|</span> John Doe</a>
                                    <a href="#"
                                       className="text-color-secondary text-hover-primary font-weight-bold text-3 d-block pb-3 line-height-4">Lorem
                                        ipsum dolor sit amet</a>
                                    <a href="#"
                                       className="text-color-default text-uppercase text-1 mb-0 d-block text-decoration-none">10
                                        Jan 2024 <span className="opacity-3 d-inline-block px-2">|</span> 3
                                        Comments <span className="opacity-3 d-inline-block px-2">|</span> John Doe</a>
                                    <a href="#"
                                       className="text-color-secondary text-hover-primary font-weight-bold text-3 d-block pb-3 line-height-4">Consectetur
                                        adipiscing elit</a>
                                    <a href="#"
                                       className="text-color-default text-uppercase text-1 mb-0 d-block text-decoration-none">10
                                        Jan 2024 <span className="opacity-3 d-inline-block px-2">|</span> 3
                                        Comments <span className="opacity-3 d-inline-block px-2">|</span> John Doe</a>
                                    <a href="#"
                                       className="text-color-secondary text-hover-primary font-weight-bold text-3 d-block pb-3 line-height-4">Vivamus
                                        sollicitudin nibh luctus</a>
                                </div>
                            </div>
                            <div className="py-1 clearfix">
                                <hr className="my-2"/>
                            </div>
                            <div className="px-3 mt-4">
                                <h3 className="text-color-secondary text-capitalize font-weight-bold text-5 m-0 mb-3">Recent
                                    Comments</h3>
                                <div className="pb-2 mb-1">
                                    <a href="#"
                                       className="text-color-default text-2 mb-0 d-block text-decoration-none line-height-4">Admin
                                        on <strong className="text-color-secondary text-hover-primary text-4">Vivamus
                                            sollicitudin</strong> <span
                                            className="text-uppercase text-1 d-block pt-1 pb-3">10 Jan 2024</span></a>
                                    <a href="#"
                                       className="text-color-default text-2 mb-0 d-block text-decoration-none line-height-4">John
                                        Doe on <strong className="text-color-secondary text-hover-primary text-4">Lorem
                                            ipsum dolor</strong> <span
                                            className="text-uppercase text-1 d-block pt-1 pb-3">10 Jan 2024</span></a>
                                    <a href="#"
                                       className="text-color-default text-2 mb-0 d-block text-decoration-none line-height-4">Admin
                                        on <strong className="text-color-secondary text-hover-primary text-4">Consectetur
                                            adipiscing</strong> <span
                                            className="text-uppercase text-1 d-block pt-1 pb-3">10 Jan 2024</span></a>
                                </div>
                            </div>
                            <div className="py-1 clearfix">
                                <hr className="my-2"/>
                            </div>
                            <div className="px-3 mt-4">
                                <h3 className="text-color-secondary text-capitalize font-weight-bold text-5 m-0">Categories</h3>
                                <ul className="nav nav-list flex-column mt-2 mb-0 p-relative right-9">
                                    <li className="nav-item"><a className="nav-link bg-transparent border-0" href="#">Design
                                        (2)</a></li>
                                    <li className="nav-item">
                                        <a className="nav-link bg-transparent border-0 active" href="#">Photos (4)</a>
                                        <ul>
                                            <li className="nav-item"><a className="nav-link bg-transparent border-0"
                                                                        href="#">Animals</a></li>
                                            <li className="nav-item"><a
                                                className="nav-link bg-transparent border-0 active"
                                                href="#">Business</a></li>
                                            <li className="nav-item"><a className="nav-link bg-transparent border-0"
                                                                        href="#">Sports</a></li>
                                            <li className="nav-item"><a className="nav-link bg-transparent border-0"
                                                                        href="#">People</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a className="nav-link bg-transparent border-0" href="#">Videos
                                        (3)</a></li>
                                    <li className="nav-item"><a className="nav-link bg-transparent border-0" href="#">Lifestyle
                                        (2)</a></li>
                                    <li className="nav-item"><a className="nav-link bg-transparent border-0" href="#">Technology
                                        (1)</a></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogView
