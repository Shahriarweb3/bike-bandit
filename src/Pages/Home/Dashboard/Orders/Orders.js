import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Typography } from '@mui/material';

const Orders = () => {
    const { user } = useAuth();

    const [myOrders, setMyOrders] = useState([])

    // send data to server to load orders by email 
    useEffect(() => {
        const url = `https://fierce-garden-19030.herokuapp.com/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(result => setMyOrders(result));
    }, [user.email])

    // delete and order
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
                        const remainingOrders = myOrders.filter(order => order._id !== id);
                        setMyOrders(remainingOrders);
                    };

                })
        }
    }



    return (
        <div style={{ marginBottom: '250px' }}>
            <Container >
                <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', my: 4 }}>Your Total Orders: {myOrders.length}</Typography>
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
                            {myOrders.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.productName}</TableCell>
                                    <TableCell align="right">{row.productDescription}</TableCell>
                                    <TableCell align="right"><Button disabled style={{ color: 'red' }}>Pending</Button></TableCell>
                                    <TableCell align="right"><Button onClick={() => handleDelete(row._id)}>Delete Order</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container >

        </div >
    );
};

export default Orders;