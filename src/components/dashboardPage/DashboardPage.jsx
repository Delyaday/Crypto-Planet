import React from 'react';
import './dashboardPage.scss';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../../services/cryptoApi';
import Cryptocurrencies from '../cryptocurrencies/Cryptocurrencies';
import News from '../news/News';
import ErrorBoundary from '../errorCatch/ErrorBoundary';
import Widget from '../widgets/Widget';
import Column from 'antd/lib/table/Column';


const { Title } = Typography;

const DashboardPage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);

    console.log(data);

    const globalStats = data?.data?.stats;

    return (
        (!isFetching ?
            <div className='container'>
                <div className='heading'>Global Crypto Stats</div>
                <hr />
                <Row style={{marginTop: '30px'}}>
                    <Col span={10} offset={1}>
                        <Widget type='totalCryptoCurrencies' amount={globalStats?.total} />
                    </Col>
                    <Col span={10} offset={1}>
                        <Widget type='exchanges' amount={globalStats?.totalExchanges} />
                    </Col>
                </Row>
                <Row style={{marginTop: '30px'}}>
                    <Col span={10} offset={1}>
                        <Widget type='totalMarketCap' amount={globalStats?.totalMarketCap && millify(globalStats?.totalMarketCap)} />
                    </Col>
                    <Col span={10} offset={1}>
                        <Widget type='total24hVolume' amount={globalStats?.total24hVolume && millify(globalStats?.total24hVolume)} />
                    </Col>
                </Row>

                <div className='home-heading-container'>
                    <div className='home-title'>Top10 Cryptocurrencies in the world</div>
                    <div className='show-more'><Link to='/cryptocurrencies'>show more</Link></div>
                </div>
                <Cryptocurrencies simplified />
                <div className='home-heading-container'>
                    <div className='home-title'>Latest Crypto News</div>
                    <div className='show-more'><Link to='/news'>show more</Link></div>
                </div>
                <ErrorBoundary>
                    <News simplified />
                </ErrorBoundary>
            </div>
            : <div className="circle-border">
                <div className="circle-core"></div>
            </div>)
    )
}

export default DashboardPage;