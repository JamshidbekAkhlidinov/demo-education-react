import {Helmet} from "react-helmet";

const InstructorsView = ({title}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
        </>
    )
}
export default InstructorsView
