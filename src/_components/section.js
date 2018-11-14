import React, { Component } from 'react';
import styled from 'react-emotion';

import * as UI from './ui';
import theme from '../theme.json';

import SamplePhotoOne from '../_assets/images/sample/category-cover.jpg';
import SamplePhotoTwo from '../_assets/images/sample/hurley.jpeg';

import Facebook from '../_assets/icons/facebook.svg';
import Twitter from '../_assets/icons/twitter.svg';

import Slider from 'react-slick';

import Arrow from '../_assets/icons/arrow.svg';
import Close from '../_assets/icons/closeme.svg';

import Play from '../_assets/icons/play.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CategoryBar = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #111;
  width: 100px;
  background-image: repeating-linear-gradient(
    120deg,
    #111,
    #111 1px,
    #202020 1px,
    #202020 8px
  );

  @media (max-width: 992px) {
    width: 100%;
    height: 60px;
  }
`;

const Number = styled('div')`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 4px;
  color: #ccc;
  transform: rotateZ(-90deg);

  .number {
    width: 50px;
    text-align: center;
  }

  .bar {
    background-color: #ccc;
    width: 50px;
    height: 1px;
  }

  @media (max-width: 992px) {
    transform: rotateZ(0deg);
  }
`;

const VideoPreview = styled('div')`
  overflow: hidden;
  position: relative;
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 992px) {
    width: 100%;
    height: 400px;
  }
`;

const Video = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.8s ease;
`;

const ContentWrapper = styled('div')`
  position: relative;
  width: calc(100% - 60%);
  background-color: #111;

  .container {
    padding: 30px;
    height: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .section-number {
    position: relative;
    font-size: 50px;
    opacity: 0.4;
    font-weight: bold;
    transition: 0.5s ease;
  }

  .section-title {
    position: relative;
    z-index: 6;
    label {
      text-transform: uppercase;
      font-size: 8px;
      letter-spacing: 2px;
      color: #ccc;
      opacity: 0.4;
    }

    h2 {
      color: #ccc;
      margin: 0px;
      font-family: Circular Book;
      max-width: 70%;
      text-align: justify;
      font-size: 32px;
      letter-spacing: 2px;
    }
  }

  .section-summary {
    transform: translateY(50px);
    opacity: 0;
    transition: 0.5s ease;

    color: #ccc;
    font-family: Circular Book;

    p {
      line-height: 1.8;
      font-size: 14px;
    }

    .read-more {
      text-transform: uppercase;
      font-size: 10px;
      letter-spacing: 4px;
      color: #ccc;
      cursor: pointer;
    }
  }

  @media (max-width: 992px) {
    width: 100%;

    .section-summary {
      transform: translateY(0px);
      opacity: 1;
    }

    .section-number {
      font-size: 60px;
      display: none;
    }
  }
`;

const Container = styled('div')`
  height: 500px;
  min-height: 500px;
  border-top: 1px solid #111;
  display: flex;
  transition: 0.2s ease;
  opacity: 0.5;
  position: relative;
  margin-bottom: 40px;


  .deets {
    transition: 0.5s ease;
    opacity: 0;
    transform: translateX(100%);

    &--show {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  &:hover {
    opacity: 1;

    .section-summary {
      transform: translateY(0px);
      opacity: 1;
    }

    .section-number {
      font-size: 60px;
      opacity: 0.7;
    }

    .video-preview {
      transform: scale(1.15);
    }

    .toggle-button {
      transform: translateX(50px);
    }
  }

  @media (min-width: 993px) {
    .mb {
      display: none;
    }
  }

  @media (max-width: 992px) {
    flex-direction: column;
    height: auto;
    min-height: auto;
    opacity: 1;
    margin-bottom: 0px;

    .dt {
      display: none;
    }

    .section-number {
      font-size: 60px;
    }

    .video-preview {
      transform: scale(1.15);
    }

    .toggle-button {
      transform: translateX(50px);
    }

    .read-more {
      display: none;
    }
  }
`;

const PlayButton = styled('img')`
  cursor: pointer;
  height: 45px;
`;

const ToggleButton = styled('div')`
  background-color: #252525;
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;

  position: absolute;
  transition: 0.2s ease;
  bottom: calc(50px);
  transform: translateX(100px);
  right: 0px;
  cursor: pointer;

  z-index: 6;

  @media (max-width: 992px) {
    display: none;
  }
`;

const ToggleArrow = styled('img')`
  height: 14px;
  transition: 0.2s ease;
  position: absolute;
  left: 25px;
  transform: scaleX(-1);
`;

const ShowMore = styled('div')`
  display: flex;
  align-items: center;
  position: absolute;
  height: 100%;
  background-color: #111;
  left: 100px;
  z-index: 4;
`;

const ShowMoreWrap = styled('div')`
  width: calc(60% - 120px);
  height: calc(100% - 120px);
  padding: 60px;

  border-right: 1px solid #252525;

  p {
    margin: 0px;
    line-height: 1.8;
    color: #ccc;
    font-family: Circular Book;
    margin-bottom: 12px;
    font-size: 14px;
  }

  .share-row {
    position: absolute;
    bottom: 30px;
  }
`;

const ShareWrap = styled('a')`
  align-self: flex-start;
  flex: 1;
  text-decoration: none;
 
`;

const ShareButton = styled('div')`
  border: 1px solid #252525;
  border-left: none;
  margin-top: -1px;

  height: 50px;
  flex: 1;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 4px;
  color: #c8c1c1;
  text-decoration: none;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  background-image: repeating-linear-gradient(
    120deg,
    #252525,
    #252525 1px,
    #111 1px,
    #111 8px
  );
`;

const ShareIcon = styled('img')`
  margin-right: 12px;
`;

const Thumbnail = styled('div')`
  height: 250px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      showMore: false
    };
  }

  renderShowMoreMobile() {
    return (
      <div className="mb">
        <div className="section-title">
          <label>category</label>
          <h2>the warmest three/two</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </div>
    );
  }

  renderShowMore() {
    const cx = `dt deets ${this.state.showMore ? 'deets--show' : ''}`;
    return (
      <ShowMore className={cx}>
        <ShowMoreWrap>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum. Laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="share-row">
            <a href="#">
              <ShareIcon src={Twitter} />
            </a>
            <a href="#">
              <ShareIcon src={Facebook} />
            </a>
          </div>
        </ShowMoreWrap>

        <ShareWrap target="_blank" href="https://www.stabmag.com">
          <ShareButton>VIEW FULL FEATURE</ShareButton>
          <Thumbnail bg={SamplePhotoOne} />
        </ShareWrap>
      </ShowMore>
    );
  }

  render() {
    return (
      <Container>
        <CategoryBar>
          <Number>
            <div className="bar" />
            <div className="number">{this.props.num}</div>
            <div className="bar" />
          </Number>
        </CategoryBar>
        <VideoPreview>
          <Video className="video-preview" bg={SamplePhotoOne}>
            <PlayButton onClick={() => this.props.showVideo()} src={Play} />
          </Video>
        </VideoPreview>
        <ContentWrapper>
          <div className="container">
            <div>
              <div className="section-number">{this.props.num}</div>
              <div className="section-summary">
                <p className="dt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat...
                </p>

                {this.renderShowMoreMobile()}

                <div className="read-more">READ MORE</div>
              </div>
            </div>
            <div className="section-title dt">
              <label>category</label>
              <h2>the warmest three/two</h2>
            </div>
          </div>

          <ToggleButton
            onClick={() => this.setState({ showMore: !this.state.showMore })}
            className="toggle-button"
          >
            <ToggleArrow src={this.state.showMore ? Close : Arrow} />
          </ToggleButton>
        </ContentWrapper>

        {this.renderShowMore()}
      </Container>
    );
  }
}

export default Section;
