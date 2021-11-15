import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddProduct from '../Service/AddProduct/AddProduct';
import ManageProducts from '../Service/ManageProducts/ManageProducts';
import ManageAllOrders from '../Orders/MyOrders/ManageOrders';
import Review from './Review/Review';
import Orders from './Orders/Orders';
import useAuth from '../../../hooks/useAuth';
import Payment from './Payment/Payment';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 200;

function MyDashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logOut } = useAuth();

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            <Box>
                {admin ?
                    <Box>
                        <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none' }}><Button color="inherit">Make Admin</Button></Link>
                        <Link to={`${url}/manageorders`} style={{ textDecoration: 'none' }}><Button color="inherit">Manage All Orders</Button></Link>
                        <Link to={`${url}/addproduct`} style={{ textDecoration: 'none' }}><Button color="inherit">Add A Product</Button></Link>
                        <Link to={`${url}/manageproducts`} style={{ textDecoration: 'none' }}><Button color="inherit">Manage Products</Button></Link>
                        <Link to='/' style={{ textDecoration: 'none' }}><Button onClick={logOut} color="inherit">Logout</Button></Link>

                    </Box>
                    :
                    <Box>
                        <Link to={`${url}`} style={{ textDecoration: 'none' }}><Button color="inherit">Dashboard</Button></Link>
                        <br />
                        <Link to={`${url}/payment`} style={{ textDecoration: 'none' }}><Button color="inherit">Payment</Button></Link>
                        <br />
                        <Link to={`${url}/myorders`} style={{ textDecoration: 'none' }}><Button color="inherit">My Orders</Button></Link>
                        <Link to={`${url}/review`} style={{ textDecoration: 'none' }}><Button color="inherit">Give A Review</Button></Link>
                        <br />
                        <Link to='/' style={{ textDecoration: 'none' }}><Button onClick={logOut} color="inherit">Logout</Button></Link>
                    </Box>
                }
            </Box>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box style={{ backgroundColor: 'LightCyan' }} sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <Orders></Orders>
                    </Route>

                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <Orders></Orders>
                    </Route>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageorders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>

                </Switch>
            </Box>
        </Box >
    );
}

MyDashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,


};

export default MyDashboard;
