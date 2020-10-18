import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="row pt-4 pb-2 d-flex align-items-center header">
            <h1 className="col-6"><Link to="/">RS Solutions</Link></h1>
            <div className="col-6 text-right">
                <Link to="/login" className="logout">Logout</Link>
            </div>
        </div>
    )
}