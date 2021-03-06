import React, { Component, useState } from "react";
import styled from "react-emotion";

import * as UI from "../_components/ui";
import theme from "../theme.json";

import Social from "../_components/social";

import Logo from "../_assets/images/logo-black.png";
import HeroCover from "../_assets/images/sample/hero.JPG";
import VideoThumb from "../_assets/images/sample/thum-cover-big.jpg";
import PlayButton from "../_assets/icons/play.png";
import Arrow from "../_assets/icons/arrow.svg";

const HeroWrap = styled("div")`
  height: 600px;
  display: flex;
  position: relative;
  border-bottom: 1px solid #ccc;

  @media (max-width: 992px) {
    height: 400px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
  }
`;

const LeftPanel = styled("div")`
  position: relative;
  flex: 1;
  min-width: 600px;
  height: 100%;
  background-color: #f5f5f5;

  @media (max-width: 992px) {
    min-width: 100px;
    max-width: 100px;
    width: 100px;
  }

  @media (max-width: 892px) {
    min-width: 60px;
    max-width: 60px;
    width: 60px;
  }
`;

const RightPanel = styled("div")`
  position: relative;
  height: 100%;
  flex: 2;
  background-color: ${theme.colors.black};
  background-repeat: no-repeat;
  background: url("https://firebasestorage.googleapis.com/v0/b/volcome-house.appspot.com/o/best-swimwear-2020%2Fzbush_7M9A7030_RT.jpg?alt=media&token=2a31bb16-cf5e-4879-b6b3-7f07f1bed0c0");
  background-size: cover;
  background-position: center;
`;

const Filter = styled("div")`
  background-color: ${(props) =>
    props.lighter ? theme.colors.filterLight : theme.colors.filter};
  height: 100%;
  width: 100%;
  position: absolute;
`;

const StabLogo = styled("img")`
  position: fixed;
  height: 30px;
  top: 30px;
  left: 30px;
  z-index: 20;

  @media (max-width: 892px) {
    left: 15px;
    top: 15px;
    height: 22px;
  }
`;

const BottomBar = styled("div")`
  height: 70px;
  background-color: ${theme.colors.lightBlack};
  border-top: 1px solid #f5f5f5;

  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;
  background-image: repeating-linear-gradient(
    120deg,
    #d3d3d3,
    #d3d3d3 1px,
    #f5f5f5 1px,
    #f5f5f5 8px
  );

  
  // color: ${theme.colors.grey};
  color: #202020;
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  z-index: 4;

  .text {
    padding-right: 30px;
  }

  .mobile-arrow {
    display: none;
  }

  @media (max-width: 992px) {
    justify-content: flex-start;

    .text {
      display: none;
    }

    .mobile-arrow {
      display: block;
      left: 30px;
      position: absolute;
    }
  }

  @media (max-width: 892px) {
    .mobile-arrow {
      display: none;
    }
  }
`;

const VideoThumbnail = styled("div")`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0px;
  height: 200px;
  width: 350px;
  bottom: 0px;
  left: 0px;

  background-image: url(${VideoThumb});
  background-size: cover;
  background-repeeat: no-repeat;
  background-position: center;
  box-shadow: 5px -5px 20px rgba(0, 0, 0, 0.2);
  border-top-right-radius: 2px;

  @media (max-width: 992px) {
    border-top-right-radius: 0px;
    border-top-left-radius: 2px;
    right: 0px;
    left: initial;

    width: 420px;
    height: 250px;
  }

  @media (max-width: 892px) {
    width: 100%;
    border-top-left-radius: 0px;
    height: 200px;
  }
`;

const Play = styled("img")`
  height: 50px;
  position: relative;
  z-index: 1;
  cursor: pointer;
`;

const ArrowDown = styled("img")`
  transform: rotateZ(90deg);
  height: 16px;
  margin-left: 12px;
`;

const HeadlineWrap = styled("div")`
  display: flex;
  justify-content: flex-start;
  padding-top: 88px;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;

  @media (max-width: 992px) {
    padding-top: 108px;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
  }
`;

const Headline = styled("div")`
  font-family: Circular;
  font-style: normal;
  line-height: 85px;
  font-size: 60px;
  letter-spacing: 1px;
  color: #111;
  max-width: 1100px;
  padding-left: 150px;
  text-align: left;

  @media (max-width: 992px) {
    max-width: 100%;
    padding-left: 50px;
    padding-right: 30px;
    font-size: 50px;
    line-height: 80px;
    text-align: justify;
    margin-bottom: 12px;
  }

  @media (max-width: 892px) {
    font-size: 34px;
    line-height: 50px;
    text-align: left;
  }
`;

const Byline = styled("div")`
  font-family: Circular;
  font-weight: 500;
  line-height: normal;
  font-size: 14px;
  letter-spacing: 4px;
  color: ${theme.colors.grey};
  max-width: 1100px;
  text-transform: uppercase;
  padding-left: 180px;
  margin-bottom: 150px;
  margin-top: 40px;

  @media (max-width: 992px) {
    padding-left: 70px;
    max-width: 400px;
    font-size: 10px;
    line-height: 22px;
    margin-top: 0px;
  }
`;

const HeroCaption = styled("div")`
  font-family: sans-serif;
  line-height: 20px;
  font-size: 12px;
  text-align: justify;
  letter-spacing: 0.5px;
  position: absolute;
  bottom: 40px;
  padding-right: 30px;
  left: 150px;
  line-height: 28px;
  color: #252525;

  @media (max-width: 992px) {
    display: none;
    z-index: 6;
    width: 400px;
    left: 65px;
    bottom: 50px;
  }

  @media (max-width: 892px) {
    display: none;
    width: 600px;
    bottom: 230px;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: 2px;
    left: 70px;
  }

  @media (max-width: 682px) {
    display: none;
  }
`;

const Bar = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #f5f5f5;
  width: 100px;
  position: absolute;
  height: 100%;
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
`;

const NavButton = styled(UI.NavButton)`
  border-bottom-left-radius: 2px;
  background-color: #fff;
  color: #111;

  @media (max-width: 892px) {
    height: 40px;
    padding-left: 30px;
    padding-right: 30px;
    line-height: 40px;
  }
`;

const RightMenuWrap = styled("div")`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  z-index: 4;
`;

const ArchiveMenu = styled("div")`
  position: relative;
  color: #111;
  z-index: 2;
  margin-right: 16px;
`;

const ArchiveLink = styled("div")`
  cursor: pointer;
`;

const Hero = () => {
  return (
    <HeroWrap>
      <HeadlineWrap>
        <Headline>
          Stab's Guide To The Best Boardshorts and Swimwear of 2020
        </Headline>
      </HeadlineWrap>
      <LeftPanel>
        <Bar />
        <a href="https://www.stabmag.com">
          <StabLogo src={Logo} />
        </a>

        <Social />
        <HeroCaption>
          <p>
            There’s few garments as anti-depressive as a well-cut,
            tastefully-decorated pair of trunks, and boy do we need them now
            more than ever. From the top to the bottom, stabmag.com is rife with
            trunk enthusiasts, and Best Boardshorts time is the best time
            (asides from all the squabbling over who looks best in what, of
            course). So without further ado, let us welcome you into our fully
            sanitised wrap of finest surf shorts 2020 has to offer.
          </p>
        </HeroCaption>
      </LeftPanel>
      <RightPanel>
        <RightMenuWrap>
          <ArchiveMenu>
            <ArchiveLink
              onClick={() =>
                window.open("https://season-winter-19-20.stabrecommends.com/")
              }
            >
              Winter 19/20
            </ArchiveLink>
          </ArchiveMenu>
          <NavButton href="https://www.stabmag.com">
            VISIT STABMAG.COM
          </NavButton>
        </RightMenuWrap>

        <BottomBar>
          <div className="mobile-arrow">
            <ArrowDown src={Arrow} />
          </div>
          <div className="text">
            BEST BOARDSHORTS AND SWIMEAR 2020
            <ArrowDown src={Arrow} />
          </div>
        </BottomBar>
        <Filter lighter />
      </RightPanel>
    </HeroWrap>
  );
};

export default Hero;
