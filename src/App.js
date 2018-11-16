import React, { Component } from 'react';
import styled from 'react-emotion';

import * as UI from './_components/ui';
import theme from './theme.json';

import Logo from './_assets/images/stab-logo-white.png';

import Hero from './_components/hero';
import Section from './_components/section';
import FullscreenVideo from './_components/fullscreenVideo';

import VideoModal from './_components/videoModal';

import data from './_data/categories.json';

const Title = styled('div')`
  color: ${theme.colors.grey};
  text-transform: uppercase;
  text-decoration: none !important;
  text-align: center;
  letter-spacing: 6px;
  font-size: 12px;
  margin-bottom: 100px;
  margin-top: 100px;

  @media (max-width: 992px) {
    margin-bottom: 80px;
  }

  @media (max-width: 892px) {
    font-size: 14px;
  }
`;

const Footer = styled('div')`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Caption = styled('div')`
  color: ${theme.colors.grey};
  font-size: 8px;
  margin-top: 12px;
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none !important;
`;

const StabLogo = styled('img')`
  height: 30px;

  z-index: 4;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video: false,
      url: ''
    };
  }

  showVideo(video) {
    console.log(video);
    this.setState({
      video: true,
      url: video
    });
  }

  hideVideo() {
    this.setState({
      video: false,
      url: ''
    });
  }

  renderVideoPopup() {
    if (this.state.video)
      return (
        <VideoModal
          video={this.state.url}
          closeModal={() => this.hideVideo()}
        />
      );
  }

  render() {
    const categories = Object.keys(data['categories']).map(key => {
      console.log('single data');
      const number = Number(key) + 1;

      return (
        <Section
          key={key}
          data={data['categories'][key]}
          dir={number % 2 == 0 ? 'row-reverse' : 'row'}
          showVideo={video => this.showVideo(video)}
          num={`0${number}`}
          type="category"
        />
      );
    });

    const brands = Object.keys(data['brands']).map(key => {
      console.log('single brand data');
      const number = Number(key) + 1;

      return (
        <Section
          key={key}
          data={data['brands'][key]}
          dir={number % 2 == 0 ? 'row-reverse' : 'row'}
          showVideo={video => this.showVideo(video)}
          num={`0${number}`}
          type="brand"
        />
      );
    });

    return (
      <div>
        {this.renderVideoPopup()}
        <Hero showVideo={video => this.showVideo(video)} />
        <Title>Categories</Title>
        {categories}

        <Title>Watch Full Video</Title>
        <FullscreenVideo showVideo={video => this.showVideo(video)} />

        <Title>Meet the brands</Title>
        {brands}

        <Footer>
          <StabLogo src={Logo} />
          <Caption>BEST WETSUITS 2018</Caption>
        </Footer>
      </div>
    );
  }
}

export default App;
