import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h5>Home Page</h5>
            <Link to='/login'>Login</Link>
            <br/>
            <Link to='/private'>Private Page</Link>
        </div>
    );
};

export default Home;