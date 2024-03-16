import { memo } from 'react';
import '../styles/home-page.css';

import { Link } from "react-router-dom";

const Home = ()=>{
    return (
        <div className="home-page">
            <h1>Calculate your Budget!</h1>
            <div role='button' className='button'>
                <Link to="/budget-app">Start</Link>
            </div>
        </div>
    )
}

export default memo(Home);