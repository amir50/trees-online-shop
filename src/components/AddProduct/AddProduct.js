import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Admin from "../Admin/Admin";


const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = (data) => {
        console.log(data)
        const eventDta = {
            name: data.name,
           
            price: data.price,
            imageURL: imageURL
        };
        console.log(eventDta)
        const url = `http://localhost:9000/addProduct`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventDta)
        })
            .then(res => {
                window.location.reload()
            })
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set("key", 'f0535a47bedf4c503611b0a5b2dddc16');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <Admin></Admin>
           
            <div class="m-5">
                <form onSubmit={handleSubmit(onSubmit)} class="row g-2">
                    <div class="col-md-6">

                        <input name="name" placeholder="Enter Trees Name" ref={register} type="text" class="form-control" id="name" required />
                    </div>

                    <div class="col-md-6">

                        <input name="price" ref={register} type="text" class="form-control" id="price" placeholder="price" required />
                    </div>

                    <div class="col-md-6">

                        <input type="file" class="form-control" onChange={handleImageUpload} id="Photo" required />
                    </div>

                    <input type="submit" class="col-md-1" />
                </form>
                <br /><br />

            </div>
        </div>
    );
};

export default AddProduct;


