import React from 'react';
import { useGetGlobalStatsQuery } from '../../services/cryptoApi';
import './globalStats.scss';
import { MoreOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Row, Col } from 'antd';


export const GlobalStats = () => {
    const { data, isFetching } = useGetGlobalStatsQuery();
    const stats = data?.data;

    console.log(data);

    return (
        <div className='container'>
            <div className='heading'>Global Crypto Statistic</div>
            <hr />


            <Row>
                <Col span={10}>
                    <div className="featured">
                        <div className="top">
                            <h1 className="title">Total Revenue</h1>
                            <MoreOutlined fontSize="small" />
                        </div>
                        <div className="bottom">
                            <div className="featuredChart">
                                <CircularProgressbar className='progress-bar' value={70} text={"70%"} strokeWidth={5} />
                            </div>
                            <p className="title">Total coins today</p>
                            <p className="amount">{stats?.totalCoins}</p>
                            <p className="desc">
                                Previous transactions processing. Last payments may not be included.
                            </p>
                            <div className="summary">
                                <div className="item">
                                    <div className="itemTitle">Target</div>
                                    <div className="itemResult negative">
                                        <ArrowDownOutlined fontSize="small" />
                                        <div className="resultAmount">$12.4k</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="itemTitle">Last Week</div>
                                    <div className="itemResult positive">
                                        <ArrowUpOutlined fontSize="small" />
                                        <div className="resultAmount">$12.4k</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="itemTitle">Last Month</div>
                                    <div className="itemResult positive">
                                        <ArrowUpOutlined fontSize="small" />
                                        <div className="resultAmount">$12.4k</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </Col>
            </Row>
        </div>
    )
}