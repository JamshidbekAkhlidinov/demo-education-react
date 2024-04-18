import {NavLink, Outlet, useLocation} from "react-router-dom";
import EducationMenu from "../menu/EducationMenu.jsx";
import EducationBar from "./EducationBar.jsx";
import EducationFooter from "./EducationFooter.jsx";

const EducationLayout = ({title}) => {
    const location = useLocation();
    const isMainPage = location.pathname !== '/';

    return (
        <>
            <div className="body">

                <EducationMenu/>

                <div role="main" className="main">

                    {isMainPage && <EducationBar title={title}/>}

                    <Outlet/>

                </div>

                <EducationFooter/>

            </div>
        </>
    )
}
export default EducationLayout