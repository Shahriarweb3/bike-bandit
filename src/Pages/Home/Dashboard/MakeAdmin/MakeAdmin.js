import { Alert, Button, Container, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleMakeAdmin = e => {
        const admin = { email };
        fetch('https://fierce-garden-19030.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('');
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <Box mb={20} mt={12} >
                <h2>Make an Admin</h2>
                <form sx={{ m: 8 }} onSubmit={handleMakeAdmin}>
                    <TextField
                        sx={{ width: '30%' }}
                        label="Email"
                        type="email"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <br />
                    <br />
                    <Button type="submit" style={{ backgroundColor: 'goldenrod' }} variant="contained">Make Admin</Button>
                </form>
                {success && <Alert severity="success">Made Admin successfully!</Alert>}
            </Box>

        </div >
    );
};

export default MakeAdmin;