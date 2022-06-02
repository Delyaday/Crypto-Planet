import React from 'react';
import { Button, Menu, Avatar, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { BulbOutlined, FundOutlined, UserOutlined, MoneyCollectOutlined, AppstoreOutlined, HomeOutlined, StarOutlined, BarChartOutlined } from '@ant-design/icons';
import './navbar.scss';
import icon from '../images/cryptocurrency.png';


const Navbar = () => {
    return (
        <div className='nav-container'>
            {/* <div className='back-nav-img'>
                <img src='https://www.housingwire.com/wp-content/uploads/2019/09/Purple-technology-data-internet-99.jpg' alt=''/>
            </div> */}
            <div className='logo-container'>
                <Avatar src={icon} shape="square" size={45}/>
                <div className='logo-text'>
                    <Link to='/'>CryptoPlanet</Link>
                </div>
            </div>
            <hr/>
            <div className='menu'>
                <Menu theme='dark' className='menu-items'>
                <Menu.Item icon={<HomeOutlined />} className='menu-item'>
                        <Link to='/' className='menu-item-text'>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<AppstoreOutlined />} className='menu-item'>
                        <Link to='/dashboard' className='menu-item-text'>Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />} className='menu-item'>
                        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BarChartOutlined />} className='menu-item'>
                        <Link to='/stats'>Global Statistic</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />} className='menu-item'>
                        <Link to='/news'>News</Link>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    )
};

export default Navbar;