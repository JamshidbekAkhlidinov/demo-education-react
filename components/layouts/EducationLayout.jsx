import {Outlet, useLocation} from "react-router-dom";
import EducationMenu from "../menu/EducationMenu.jsx";
import EducationBar from "./EducationBar.jsx";
import EducationFooter from "./EducationFooter.jsx";

const EducationLayout = () => {
    const location = useLocation();
    const isMainPage = location.pathname !== '/';

    const title = document.title;

    return (
        <>

            <EducationMenu/>

            <div role="main" className="main">

                {isMainPage && <EducationBar title={title}/>}

                <Outlet/>

            </div>

            <EducationFooter/>

        </>
    )
}
export default EducationLayout