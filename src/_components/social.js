import React, { Component } from 'react';
import styled from 'react-emotion';

import * as UI from '../_components/ui';
import theme from '../theme.json';

import Instagram from '../_assets/icons/instagram.svg';
import Twitter from '../_assets/icons/twitter.svg';
import Facebook from '../_assets/icons/facebook.svg';
import Share from '../_assets/icons/share.svg';

const SocialWrap = styled('div')`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 30px;
  position: absolute;
  left: 30px;
  bottom: 130px;
  z-index: 12;

  @media (max-width: 992px) {
    left: 15px;
  }

 
`;

const SocialLink = styled('a')`
  margin-bottom: 18px;
  img {
    height: 20px;
  }

  @media (max-width: 992px) {
    img {
      height: 12px;
    }
  }
`;

const StabMagText = styled('a')`
  color: ${theme.colors.grey};
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transform: rotateZ(-90deg);
  position: absolute;
  bottom: -60px;
  left: -30px;
  text-decoration: none;

  @media (max-width: 992px) {
    left: -35px;
  }
`;

class Social extends Component {
  render() {
    return (
      <SocialWrap>
        <SocialLink href="#">
          <img src={Instagram} />
        </SocialLink>
        <SocialLink href="#">
          <img src={Twitter} />
        </SocialLink>
        <SocialLink href="#">
          <img src={Facebook} />
        </SocialLink>
        <SocialLink href="#">
          <img src={Share} />
        </SocialLink>
        <StabMagText target="_blank" href="https://www.stabmag.com">Stabmag.com</StabMagText>
      </SocialWrap>
    );
  }
}

export default Social;
