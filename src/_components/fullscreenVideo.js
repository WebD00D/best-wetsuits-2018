import React, { Component } from 'react';
import styled from 'react-emotion';

import * as UI from '../_components/ui';
import theme from '../theme.json';

import Hero from '../_components/hero';
import Carousel from './section';

import Thumbnail from '../_assets/images/sample/thum-cover-big.jpg';
import PlayButton from '../_assets/icons/play.png';

const Wrap = styled('div')`
  position: relative;
  height: 700px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${props => props.thumb});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  -webkit-box-shadow: 2px 2px 41px 6px rgba(0, 0, 0, 0.34);
  -moz-box-shadow: 2px 2px 41px 6px rgba(0, 0, 0, 0.34);
  box-shadow: 2px 2px 41px 6px rgba(0, 0, 0, 0.34);
  margin-bottom: 125px;

  @media (max-width: 992px) {
    margin-bottom: 80px;
  }

  @media (max-width: 892px) {
    height: 320px;
  }
`;

const Filter = styled('div')`
  position: absolute;
  background-color: ${theme.colors.filter};
  width: 100%;
  height: 100%;
  opacity: 0.6;
`;

const Play = styled('img')`
  height: 100px;
  position: relative;
  z-index: 1;
  cursor: pointer;

  @media (max-width: 892px) {
    height: 50px;
  }
`;

class FullscreenVideo extends Component {
  render() {
    return (
      <Wrap thumb={Thumbnail}>
        <Filter />
        <Play
          onClick={() =>
            this.props.showVideo(
              'https://www.youtube.com/embed/eqbfJuXa4w0?autoplay=1'
            )
          }
          src={PlayButton}
        />
      </Wrap>
    );
  }
}

export default FullscreenVideo;
