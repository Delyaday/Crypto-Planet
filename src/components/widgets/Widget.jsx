import React, { Component } from 'react';
import './widget.scss';
import { FieldTimeOutlined, HistoryOutlined, ArrowUpOutlined, InteractionOutlined, PayCircleOutlined, PoundCircleOutlined, ShoppingOutlined, TransactionOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


class Widget extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    switchData() {
        var { type } = this.props;

        switch (type) {
            case 'totalCryptoCurrencies':
                return {
                    title: 'TOTAL CRYPOCURRENCIES',
                    link: 'View all cryptocurrencies',
                    icon: <PayCircleOutlined className='icon'
                        style={{
                            color: 'crimson',
                            backgroundColor: 'rgba(255, 0, 0, 0.2)'
                        }} />,
                };

            case 'exchanges':
                return {
                    title: 'EXCHANGES',
                    link: 'View more about exchanges',
                    icon: <TransactionOutlined className='icon'
                        style={{
                            color: 'goldenrod',
                            backgroundColor: 'rgba(218, 165, 32, 0.2)'
                        }} />,
                };

            case 'totalMarketCap':
                return {
                    title: 'TOTAL MARKET CAP',
                    link: 'View more about market cap',
                    icon: <ShoppingOutlined className='icon'
                        style={{
                            color: 'peachpuff',
                            backgroundColor: 'rgba(0, 128, 0, 0.2)'
                        }} />,
                };

            case 'total24hVolume':
                return {
                    title: 'TOTAL 24H VOLUME',
                    link: 'View more about volume',
                    icon: <FieldTimeOutlined className='icon'
                        style={{
                            color: 'purple',
                            backgroundColor: 'rgba(128, 0, 128, 0.2'
                        }} />,
                };
        }

        return null;
    }

    render() {
        var data = this.switchData();
        var { amount } = this.props;

        return (
            <div className='widget'>
                <div className='left'>
                    <span className='title'>{data.title}</span>
                    <span className='counter'>{amount}</span>
                    <span className='link'><Link to='/stats' className='linkA'>{data.link}</Link></span>
                </div>
                <div className='right'>
                    <div className='percentage positive'>
                        <ArrowUpOutlined/> 20%
                    </div>
                    {data.icon}
                </div>
            </div>
        )
    }
}

export default Widget;