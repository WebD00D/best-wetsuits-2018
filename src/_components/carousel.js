import React, { Component } from 'react';
import styled from 'react-emotion';

import * as UI from '../_components/ui';
import theme from '../theme.json';

import SamplePhotoOne from '../_assets/images/sample/category-cover.jpg';
import SamplePhotoTwo from '../_assets/images/sample/hurley.jpeg';

import Slider from 'react-slick';

import Arrow from '../_assets/icons/arrow.svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled('div')`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 200px;
  position: relative;


  @media ( max-width: 992px ) {
    margin-bottom: 0px;
  }
`;

const ImageContainer = styled('div')`
  position: relative;
  width: 500px;
  min-width: 500px;
  height: 500px;
  box-shadow: 0px 9px 13px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

  @media (max-width: 992px) {
    width: 100%;
    min-width: 100%;
    border-radius: 0px;
  }

  @media (max-width: 892px) {
    height: 320px;
  }
`;

const ContentContainer = styled('div')`
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    height: auto;
  }
`;

const Wrap = styled('div')`
  display: flex;
  flex-direction: ${props =>
    props.direction === 'left' ? 'row-reverse' : 'row'};
  padding-left: 60px;
  padding-right: 60px;

  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const ButtonGroup = styled('div')`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
`;
const CarouselButton = styled('button')`
  width: 100px;
  height: 56px;

  border: none;
  background-color: ${props => props.color};
  outline: none;
  cursor: pointer;
  transition: 0.4s ease;

  &:hover {
    box-shadow: 0px 9px 13px rgba(0, 0, 0, 0.25);
    background-color: #111;
  }
`;

const SlideImage = styled('div')`
  height: 500px;
  width: 100%;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 3px;

  @media (max-width: 992px) {
    border-radius: 0px;
  }

  @media (max-width: 892px) {
    height: 320px;
  }
`;

const LeftArrow = styled('img')`
  height: 14px;
  transform: scaleX(-1);
`;
const RightArrow = styled('img')`
  height: 14px;
`;

const Caption = styled('div')`
  color: ${theme.colors.grey};
  font-size: 8px;
  margin-top: 12px;
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none !important;

  @media (max-width: 992px) {
    text-align: left; 
    padding-left: 60px;

  }

  @media (max-width: 892px) {
    text-align: left; 
    padding-left: 30px;

  }
`;

const Content = styled('div')`
  padding: 30px;
  background-color: #111;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  height: 325px;
  width: 100%;

  h1 {
    color: ${theme.colors.grey};
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 36px;
    text-align: justify;
    font-weight: 500;
  }

  p {
    color: ${theme.colors.grey};

    letter-spacing: 0.7px;
    font-size: 16px;
    text-align: justify;
    line-height: 1.75;
  }

  @media (max-width: 992px) {
    background-color: transparent;
    padding: 60px;
    height: auto;
  }

  @media ( max-width: 892px) {
    padding: 30px;
    padding-top: 50px;
  }
`;

const Number = styled('div')`
  top: 200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  jutify-content: center;
  width: 30px;
  font-size: 22px;
  color: ${theme.colors.grey};

  @media (max-width: 892px) {
    display: none;
  }
`;

const Bar = styled('div')`
  width: 1px;
  height: 30px;
  background-color: ${theme.colors.grey};
  margin-top: 12px;
  margin-bottom: 12px;
`;

class StabCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  render() {
    const sliderSettings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      fade: true
    };

    return (
      <Container>
        <Number>
          <Bar />
          {this.props.num}
          <Bar />
        </Number>
        <Wrap direction={this.props.dir}>
          <ImageContainer>
            <Slider ref={c => (this.slider = c)} {...sliderSettings}>
              <SlideImage bg={SamplePhotoTwo} />
              <SlideImage bg={SamplePhotoOne} />
            </Slider>
            <ButtonGroup>
              <CarouselButton
                color={theme.colors.lightBlack}
                onClick={() => this.slider.slickPrev()}
              >
                <LeftArrow src={Arrow} />
              </CarouselButton>
              <CarouselButton
                color={theme.colors.black}
                onClick={() => this.slider.slickNext()}
              >
                <RightArrow src={Arrow} />
              </CarouselButton>
            </ButtonGroup>
            <Caption>
              ON LOCATION IN THE FRIGID BRINE OF SAN FRANCISCO, CA
            </Caption>
          </ImageContainer>

          <ContentContainer>
            <Content>
              <h1>the warmest three/two</h1>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi.
              </p>
              <UI.PrimaryButton>Read full story</UI.PrimaryButton>
            </Content>
          </ContentContainer>
        </Wrap>
      </Container>
    );
  }
}

export default StabCarousel;
