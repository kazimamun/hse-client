import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h4>Page Not Found</h4>
            <h3>404!</h3>
            <Link to="/">Go To Home</Link>
        </div>
    );
};

export default NotFound;