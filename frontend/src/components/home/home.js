import React from 'react';
import './home.css';

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="homeWrapper">
            <Link to='/login'><div className="homeButton"> Login </div></Link>
            <Link to='/donorform'><div className="homeButton"> Donor </div></Link> 
        </div>
    )
};

export default Home;