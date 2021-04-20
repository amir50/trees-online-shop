import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'
const Admin = () => {
    return (
        
        <div className="productHeaderContainer">
            <div className="productHeader">
                <Link className="nav-link navHeader" to="/home">Trees Online</Link>
                <Link className="nav-link navHeader " to="/addProduct">Add Product</Link>
                <Link className="nav-link navHeader" to="/manageProduct">Manage Product</Link>
               
            </div>
        </div>

    );
};

export default Admin;