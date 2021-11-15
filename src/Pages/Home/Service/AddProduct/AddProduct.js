import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        fetch('https://fierce-garden-19030.herokuapp.com/motorbikes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Product Added Successfully');
                }
            })
    }
    return (
        <div style={{ marginBottom: '150px' }}>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="" placeholder="Product Name" {...register("productName")} />
                <input defaultValue="" placeholder="Description" {...register("productDescription")} />
                <input placeholder="Price" defaultValue="" {...register("productPrice")} />
                <input placeholder="Image url" defaultValue="" {...register("img")} />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddProduct;