import React, { Component } from "react";
import styled from "react-emotion";

import * as UI from "./ui";
import theme from "../theme.json";

import SamplePhotoOne from "../_assets/images/sample/category-cover.jpg";
import SamplePhotoTwo from "../_assets/images/sample/hurley.jpeg";

import Facebook from "../_assets/icons/facebook.svg";
import Twitter from "../_assets/icons/twitter.svg";

import Slider from "react-slick";

import Arrow from "../_assets/icons/arrow.svg";
import Close from "../_assets/icons/closeme.svg";

import Play from "../_assets/icons/play.png";

import StabRecommends from "../_assets/images/SRBlack.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategoryBar = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #f5f5f5;
  width: 100%;
  height: 20px;
  background-image: repeating-linear-gradient(
    120deg,
    #111,
    #111 1px,
    #202020 1px,
    #202020 8px
  );

  background-image: repeating-linear-gradient(
    120deg,
    #d3d3d3,
    #d3d3d3 1px,
    #f5f5f5 1px,
    #f5f5f5 8px
  );

  @media (max-width: 992px) {
    width: 100%;
    height: 60px;
  }
`;

const Number = styled("div")`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 4px;
  color: #ccc;

  display: none;

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

const VideoPreview = styled("div")`
  overflow: hidden;
  position: relative;
  width: 60%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 992px) {
    width: 100%;
    height: 400px;
  }
`;

const Video = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.8s ease;
`;

const ContentWrapper = styled("div")`
  position: relative;
  width: calc(100% - 60%);
  background-color: #f5f5f5;

  .container {
    padding: 30px;

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
      color: #252525;
      opacity: 0.4;
    }

    h2 {
      color: #111;
      margin: 0px;
      font-family: Circular Book;
      max-width: 85%;
      text-align: justify;
      font-size: 32px;
      letter-spacing: 2px;
    }
  }

  .section-summary {
    transform: translateY(10px);
    opacity: 0.1;
    transition: 0.5s ease;

    color: #111;
    font-family: Circular Book;

    p {
      line-height: 1.8;
      font-size: 14px;
    }

    .read-more {
      text-transform: uppercase;
      font-size: 10px;
      letter-spacing: 4px;
      color: #111;
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

const Container = styled("div")`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;

  box-shadow: 5px -5px 20px rgba(0, 0, 0, 0.2);

  border-top: none;
  display: flex;
  flex-direction: column;
  transition: 0.2s ease;
  opacity: 0.8;
  position: relative;
  margin-bottom: 100px;

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
      transform: scale(1.08);
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
      transform: scale(1);
    }

    .toggle-button {
      transform: translateX(50px);
    }

    &:hover {
      .video-preview {
        transform: scale(1);
      }
    }
  }
`;

const PlayButton = styled("img")`
  cursor: pointer;
  height: 45px;
`;

const FlexWrap = styled("div")`
  min-height: 420px;
  display: flex;
  flex-direction: ${(props) => props.dir};

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const StabRecommendsLogo = styled("img")`
  position: absolute;
  height: 38px;
  top: 30px;
  right: 30px;
`;

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      showMore: false,
    };
  }
  j;

  render() {
    const paragraphs =
      this.props.data.paragraphs &&
      Object.keys(this.props.data.paragraphs).map((key) => {
        const paragraph = this.props.data.paragraphs[key];
        return <p key={`paragraph-${key}`}>{paragraph}</p>;
      });

    const wetsuits =
      this.props.data.wetsuits &&
      Object.keys(this.props.data.wetsuits).map((key) => {
        console.log(this.props.data.wetsuits[key]);
        return (
          <li key={`option-${key}`}>
            <a
              style={{ color: "#ccc" }}
              target="_blank"
              href={this.props.data.wetsuits[key].link}
            >
              {this.props.data.wetsuits[key].name}
            </a>
          </li>
        );
      });

    return (
      <Container id={this.props.data.slug}>
        <FlexWrap dir={this.props.dir}>
          <VideoPreview>
            <Video className="video-preview" bg={this.props.data.thumbnail}>
              {/* <PlayButton
                onClick={() => this.props.showVideo(this.props.data.videoURL)}
                src={Play}
              /> */}
            </Video>
            {this.props.data.specialAlignment ? (
              <StabRecommendsLogo src={StabRecommends} />
            ) : (
              ""
            )}
          </VideoPreview>
          <ContentWrapper>
            <CategoryBar>
              <Number>
                <div className="bar" />
                <div className="number">{this.props.num}</div>
                <div className="bar" />
              </Number>
            </CategoryBar>
            <div className="container">
              <div className="section-title">
                <label>{this.props.type}</label>
                <h2>{this.props.data && this.props.data.title}</h2>
              </div>
              <div>
                <div className="section-summary">
                  {paragraphs}
                  <ul>{wetsuits}</ul>
                  {this.props.type === "brand" ? (
                    <a
                      target="_blank"
                      href={this.props.data.featureURL}
                      className="read-more"
                    >
                      VIEW FULL FEATURE
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </ContentWrapper>
        </FlexWrap>
      </Container>
    );
  }
}

export default Section;
