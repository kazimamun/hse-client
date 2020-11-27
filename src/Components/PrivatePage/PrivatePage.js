import React from 'react';
import { Link } from 'react-router-dom';

const PrivatePage = () => {

    return (
        <div>
            <h1>This is PrivatePage</h1>
            <Link to='/'>Home</Link>
        </div>
    );
};

export default PrivatePage;