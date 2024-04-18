import {Outlet, useLocation} from "react-router-dom";
import EducationMenu from "../menu/EducationMenu.jsx";
import EducationBar from "./EducationBar.jsx";
import EducationFooter from "./EducationFooter.jsx";

const EducationLayout = () => {
    const location = useLocation();
    const isMainPage = location.pathname !== '/';

    return (
        <>

            <EducationMenu/>

            <div role="main" className="main">

                {isMainPage && <EducationBar/>}

                <Outlet/>

            </div>

            <EducationFooter/>

        </>
    )
}
export default EducationLayout