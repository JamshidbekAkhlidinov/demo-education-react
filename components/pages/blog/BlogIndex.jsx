import {Helmet} from "react-helmet";

const BlogIndex = ({title}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className="container">
                <div className="row py-3">
                    <div className="col-lg-8 mb-5 mb-lg-0">

                        <article className="mb-5">
                            <div className="card bg-transparent border-0 custom-border-radius-1">
                                <div className="card-body p-0 z-index-1">
                                    <a href="demo-education-blog-post.html" data-cursor-effect-hover="plus">
                                        <img className="card-img-top border-radius-0 mb-2"
                                             src="img/blog/wide/blog-2.jpg" alt="Card Image"/>
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
                                            className="text-color-secondary text-color-hover-primary text-decoration-none text-4"
                                            href="demo-education-blog-post.html">The Education Business</a></h4>
                                        <p className="card-text mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Nunc viverra lorem , consectetur adipiscing elit...</p>
                                        <a href="demo-education-blog-post.html"
                                           className="text-decoration-none custom-link-hover-effects">
												<span
                                                    className="btn btn-link font-weight-semi-bold text-decoration-none text-2 ps-0 text-uppercase">
													Read More
												</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="mb-5">
                            <div className="card bg-transparent border-0 custom-border-radius-1">
                                <div className="card-body p-0 z-index-1">
                                    <a href="demo-education-blog-post.html" data-cursor-effect-hover="plus">
                                        <img className="card-img-top border-radius-0 mb-2"
                                             src="img/blog/wide/blog-21.jpg" alt="Card Image"/>
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
                                            className="text-color-secondary text-color-hover-primary text-decoration-none text-4"
                                            href="demo-education-blog-post.html">How to Grow your Business</a></h4>
                                        <p className="card-text mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Nunc viverra lorem , consectetur adipiscing elit...</p>
                                        <a href="demo-education-blog-post.html"
                                           className="text-decoration-none custom-link-hover-effects">
												<span
                                                    className="btn btn-link font-weight-semi-bold text-decoration-none text-2 ps-0 text-uppercase">
													Read More
												</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <ul className="custom-pagination-style-1 pagination pagination-rounded pagination-md justify-content-center">
                            <li className="page-item"><a className="page-link" href="#"
                                                         data-cursor-effect-hover="fit"><i
                                className="fas fa-angle-left"></i></a></li>
                            <li className="page-item active"><a className="page-link" href="#"
                                                                data-cursor-effect-hover="fit">1</a></li>
                            <li className="page-item"><a className="page-link" href="#"
                                                         data-cursor-effect-hover="fit">2</a></li>
                            <li className="page-item"><a className="page-link" href="#"
                                                         data-cursor-effect-hover="fit">3</a></li>
                            <li className="page-item"><a className="page-link" href="#"
                                                         data-cursor-effect-hover="fit"><i
                                className="fas fa-angle-right"></i></a></li>
                        </ul>

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
export default BlogIndex
