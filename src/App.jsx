import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import EducationLayout from "../components/layouts/EducationLayout.jsx";
import SiteAbout from "../components/pages/site/SiteAbout.jsx";
import SiteIndex from "../components/pages/site/SiteIndex.jsx";
import CoursesIndex from "../components/pages/courses/CoursesIndex.jsx";
import InstructorsIndex from "../components/pages/instructors/InstructorsIndex.jsx";
import BlogIndex from "../components/pages/blog/BlogIndex.jsx";
import SiteContactUs from "../components/pages/site/SiteContactUs.jsx";



const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<EducationLayout/>}>
                <Route path="/" element={<SiteIndex title="Bosh sahifa"/>}/>
                <Route path="/about" element={<SiteAbout title="Malumot"/>}/>
                <Route path="/courses" element={<CoursesIndex title="CoursesIndex"/>}/>
                <Route path="/instructors" element={<InstructorsIndex title="InstructorsIndex"/>}/>
                <Route path="/blog" element={<BlogIndex title="BlogIndex"/>}/>
                <Route path="/contact-us" element={<SiteContactUs title="SiteContactUs"/>}/>
            </Route>
        </>
    )
);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
