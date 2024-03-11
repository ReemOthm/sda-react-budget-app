import './../../styles/error-page.css';

import { Link } from "react-router-dom";

const ErrorPage = ()=>{
    return (
        <div className="error-page">
            <h1>404</h1>
            <p>Page not Found</p>
            <div className="button" role="button">
                <Link to={"/"}>Go to Home</Link>
            </div>
        </div>
    )
}

export default ErrorPage;