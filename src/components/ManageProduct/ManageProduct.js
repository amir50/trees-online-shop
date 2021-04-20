import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Admin from '../Admin/Admin';
const ManageProduct = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:9000/booking')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    product.map(pd => console.log(pd.name, pd.price))
    return (
        <div>
            <Admin />
            {
                product.length === 0 && <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate("-50%,-50%")' }} className="spinner-border text-danger" role="status">
                    <span class="visually-hidden">Loading...</span></div>

            }
            
        </div>
    );
};

export default ManageProduct;