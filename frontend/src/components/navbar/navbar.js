import React, { Component } from 'react';
import './navbar.css';

import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navWrapper">
                <Link to='/'><div>BloodWorks</div></Link>
            </div>
        )
    }
}

export default Navbar;