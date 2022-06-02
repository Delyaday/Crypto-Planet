import React, { useState, useEffect } from 'react';
import './cryptocurrencies.scss';
import './cryptoCardHover.css';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


import { useGetCryptosQuery } from '../../services/cryptoApi';

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data, isFetching } = useGetCryptosQuery(count);
    const [searchTerm, setSearchTerm] = useState(null);

    console.log(data);

    var coins = data?.data?.coins || [];

    if (coins.length && searchTerm) {
        coins = coins.filter(f => f.name.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1);
    }

    return (
        (!isFetching ?
            <div className='crypto-container'>

                {!simplified && (
                    <div className='search-crypto'>
                        <Input placeholder='Search Cryptocurrency...' onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                )}

                <Row className='crypto-card-container'>
                    {coins.map((currency) => (
                        <Col xs={24} sm={12} lg={6} className='crypto-card' style={{ padding: '10px' }} key={currency.uuid}>
                            <Link to={`/crypto/${currency.uuid}`}>
                                <Card title={`${currency.rank}. ${currency.symbol}`}
                                    extra={<img className='crypto-image' src={currency.iconUrl} />}
                                    hoverable
                                >
                                    <p>Price: {millify(currency.price)}</p>
                                    <p>Market Cap: {millify(currency.marketCap)}</p>
                                    <p>Daily Change: {millify(currency.change)}%</p>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div>
            : <div className="circle-border">
                <div className="circle-core"></div>
            </div>)
    )
}

export default Cryptocurrencies;