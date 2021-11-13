import { stringify } from '@firebase/util';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        fetch('http://localhost:5000/motorbikes', {
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
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue="" placeholder="Product Name" {...register("name")} />
                <input defaultValue="" placeholder="Description" {...register("description")} />
                <input placeholder="Price" defaultValue="" {...register("price")} />
                <input placeholder="Image url" defaultValue="" {...register("img")} />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddProduct;