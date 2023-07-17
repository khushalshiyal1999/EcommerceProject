import { useState } from 'react';
import { Menu, Drawer, Badge, Avatar, Dropdown } from 'antd';
import HeaderLogo from '../../assets/images/HeaderLogo.png';
import { CartIcon, SearchIcon, UserOutline } from '../../assets/icons';
import '../../assets/style/index.scss'
import '../../assets/style/responsive.scss'
import { CheckoutDialog } from '../../componets/CheckoutDialog';
import LoginDialog from '../../componets/LoginDialog';
import { useSelector } from 'react-redux';
import {  items,getInitials, localStorageData, userRole } from './HomePageUtils';





export const Header = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const loginUser = JSON.parse(localStorage.getItem("userData")) || {}
    const getdata = useSelector((state) => state.cartreducer.carts);
    const [openLogin, setLogin] = useState(false)
    const menuItems = [
        { name: 'Watches', link: '/' },
        { name: 'Eyewear', link: '/' },
        { name: 'Accessories', link: '/' },
        { name: 'News', link: '/' },
    ];
    
    const handleDrawerClose = () => {
        setDrawerVisible(false);
    };
   const cartItemLength = getdata.filter(obj => obj.username === loginUser.username).length
    return (
        <div className='container'>
            <div className="navBar">
                <div className="header-logo">
                    <a href='/'>
                        <img src={HeaderLogo} alt="header-logo" />
                    </a>
                </div>

                <Drawer
                    open={drawerVisible}
                    onClose={handleDrawerClose}
                    placement="left"
                    className="responsive-menu"
                >
                    <Menu mode="vertical">
                        {menuItems.map((obj, index) => (
                            <Menu.Item key={index}>
                                <a href={obj.link}>{obj.name}</a>
                            </Menu.Item>
                        ))}
                         {!userRole && <Menu.Item> <div className="mobile-header-login" onClick={() => setLogin(true)}>
                            <UserOutline />
                            <p>Log In</p>
                        </div></Menu.Item>}
                        
                    </Menu>
                </Drawer>
                <Menu mode="horizontal" className="navbar-menu">
                    {menuItems.map((obj, index) => (
                        <Menu.Item key={index}>
                            <a href={obj.link}>{obj.name}</a>
                        </Menu.Item>
                    ))}
                </Menu>
                <div className="navbar-bts">
                    {localStorageData.username && <>
                        <SearchIcon />
                        <Dropdown menu={{
                            items
                        }} placement="bottomRight">
                            <Avatar style={{ backgroundColor: '#D84727', verticalAlign: 'middle' }} size="large" >
                                {userRole === 'admin' ? 'Admin' : userRole === 'superAdmin' ? 'SA' : getInitials(localStorageData.username)}
                            </Avatar>
                        </Dropdown>

                    </>}
                    {!localStorageData.username && (<>
                        <SearchIcon />
                        <div className="header-login" onClick={() => setLogin(true)}>
                            <UserOutline />
                            <p>Log In</p>
                        </div>
                    </>)

                    }
                    <div className="cartIcon">
                        <Badge count={cartItemLength} color="primary"
                            id="basic-button"
                            aria-controls={openDialog ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openDialog ? 'true' : undefined}
                            onClick={() => setOpenDialog(true)}
                        >
                            <CartIcon className='cart-icon' />
                        </Badge>
                    </div>
                    <div className="mobile-menu" onClick={() => setDrawerVisible(true)}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                </div>
                <CheckoutDialog open={openDialog} onClose={() => setOpenDialog(false)} />
                <LoginDialog open={openLogin} onClose={() => setLogin(false)} />
            </div>
        </div>

    );
};
