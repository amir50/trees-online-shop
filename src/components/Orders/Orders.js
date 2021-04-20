import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Order.css'

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  
    const [orderItem, setOrderItem] = useState([])
    useEffect(() => {
        fetch('http://localhost:9000/orderCollection?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
              
                setOrderItem(data)
            })

    }, [])


    return (
        <div>
            <Header />
            {
                orderItem.map(orderItem =>


                    <div className="style">
                        <div className="order">
                            <h5>{orderItem.name}</h5>
                            <img src={orderItem.imageURL} alt="Avatar" class="avatar"></img>
                            <h5>{orderItem.price}</h5>
                        </div>
                    </div>

                )
            }

        </div>
    );
};

export default Orders;