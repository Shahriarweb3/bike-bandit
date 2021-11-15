import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([])
    const initialOrderStatus = { status: 'Pending' }
    const [approved, setApproved] = useState('');

    // load all orders on UI
    useEffect(() => {
        fetch('https://fierce-garden-19030.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [])

    // delete specific order
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://fierce-garden-19030.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted')
                        const remainingOrders = allOrders.filter(order => order._id !== id);
                        setAllOrders(remainingOrders);
                    };
                })
        }
    }


    // Update order status
    const handleUpdateStatus = id => {
        const orderStatus = { approved }
        fetch('https://fierce-garden-19030.herokuapp.com/orders', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderStatus)

        })
            .then(res => res.json())
            .then(data => setApproved(data));

    }


    return (
        <div>
            <Container >
                <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', my: 4 }}>Total Orders: {allOrders.length}</Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 300, }} aria-label="orders table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Bike Ordered</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Order Status</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allOrders.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.productName}</TableCell>
                                    <TableCell align="right">{row.productPrice}</TableCell>
                                    <TableCell align="right"><Button variant="contained" style={{ color: 'red' }}>Pending{row.OrderStatus}</Button></TableCell>
                                    <TableCell align="right"><Button onClick={() => handleUpdateStatus(row._id)}>Approve Order</Button><Button onClick={() => handleDelete(row._id)}>Delete Order</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container >
        </div>
    );
};

export default ManageAllOrders;