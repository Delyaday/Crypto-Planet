import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import { Navbar, Cryptocurrencies, CryptoDetails, News } from './components';
import ProfilePage from './components/profilePage/ProfilePage';
import DashboardPage from './components/dashboardPage/DashboardPage';

import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';
import { GlobalStats } from './components/globalStats/GlobalStats';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    const particlesInit = async (main) => {

      await loadFull(main);
    };

    const options = {
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.1,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }

    return (
      <div className='app'>

        {/* https://besthqwallpapers.com/Temp/24-5-2022/purple-digital-globe-purple-digital-background-global-networks-dots-globe-silhouette-digital-technology-besthqwallpapers.com-1536x864.jpg
        https://webassets.inman.com/wp-content/uploads/2019/11/Untitled-design-2019-11-21T171042.855-1984x880.jpg */}

        <div className='main-back-img'>
          <img src='https://besthqwallpapers.com/Temp/24-5-2022/purple-digital-globe-purple-digital-background-global-networks-dots-globe-silhouette-digital-technology-besthqwallpapers.com-1536x864.jpg' alt='' />
          <Particles
            className='main-particles'
            id="tsparticles"
            init={particlesInit}
            options={options}
          />
        </div>

        <div className='navbar'>
          <Navbar />
        </div>

        <div className='main'>

          <Routes>
            <Route index element={<ProfilePage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/stats' element={<GlobalStats />} />
            <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
            <Route path='/crypto/:coinId' element={<CryptoDetails />} />
            <Route path='/news' element={<News />} />
          </Routes>
        </div>

        {/* <div className='footer'>
          <div className='footer-context'>
            <span className='footer-project'>CryptoPlanet</span> <br />
            <span className='footer-author'>&#169; Delya Rivman 2022</span>
          </div>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div> */}

      </div>
    )
  }
}

export default App;



