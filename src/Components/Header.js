import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="col-md-6 col-md-offset-3">
            <h2>Header</h2>
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
    )
}