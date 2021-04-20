import React from "react";
import { useHistory } from "react-router";
import './ShowProduct.css'

const ShowProduct = ({ product }) => {
    console.log(product)
    let history = useHistory();
    const buyNowHandler = (id) => {
      
        history.push(`/checkOut/${id}`)

    }
    return (
       
        <div>
            
            <div className="productItem">
                <img src={product.imageURL} alt="" />
                <h2>{product.name}</h2>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <h4>${product.price}</h4>
                    <button style={{ color: '#fff', background: '#72BA59', border: 'none', borderRadius: '5px' }} onClick={() => buyNowHandler(product._id)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ShowProduct;
