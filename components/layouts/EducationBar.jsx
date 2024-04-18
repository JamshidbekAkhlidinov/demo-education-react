import {Helmet} from "react-helmet";

const EducationBar = ({title}) => {
    return (
        <>
            <section
                className="page-header page-header-modern page-header-background page-header-background-md custom-bg-color-grey-1 mb-0"
                style={{
                    backgroundImage: "url(img/demos/education/backgrounds/page-header.jpg)",
                    backgroundPosition: "100% 100%",
                }}>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col align-self-center p-static text-center">
                            <h1 className="font-weight-bold text-color-secondary text-10">
                                {title}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>


            <div className="container">
                <div className="row py-3">
                    <div className="col">
                        <ul className="breadcrumb d-block">
                            <li><a href="#">Home</a></li>
                            {/*<li><a href="#">Courses</a></li>*/}
                            <li className="active">{title} </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
export default EducationBar
