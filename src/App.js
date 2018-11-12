import React, { Component } from 'react';
import styled from 'react-emotion';

import * as UI from './_components/ui';
import theme from './theme.json';

import Logo from './_assets/images/stab-logo-white.png';

import Hero from './_components/hero';
import Carousel from './_components/carousel';
import FullscreenVideo from './_components/fullscreenVideo';

import VideoModal from './_components/videoModal';

const Title = styled('div')`
  color: ${theme.colors.grey};
  text-transform: uppercase;
  text-decoration: none !important;
  text-align: center;
  letter-spacing: 6px;
  font-size: 18px;
  margin-bottom: 125px;

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
      video: false
    };
  }

  showVideo() {
    this.setState({
      video: true
    });
  }

  hideVideo() {
    this.setState({
      video: false
    });
  }

  renderVideoPopup() {
    if (this.state.video)
      return <VideoModal closeModal={() => this.hideVideo()} />;
  }

  render() {
    return (
      <div>
        {this.renderVideoPopup()}
        <Hero showVideo={() => this.showVideo()} />
        <Title>Winning Categories</Title>
        <Carousel dir="right" num="01" />
        <Carousel dir="left" num="02" />
        <Carousel dir="right" num="03" />
        <Carousel dir="left" num="04" />

        <Title>Watch the Video</Title>
        <FullscreenVideo showVideo={() => this.showVideo()} />

        <Title>Meet the brands</Title>
        <Carousel dir="right" num="01" />
        <Carousel dir="left" num="02" />

        <Footer>
          <StabLogo src={Logo} />
          <Caption>BEST BOARD SHORTS 2018</Caption>
        </Footer>
      </div>
    );
  }
}

export default App;
