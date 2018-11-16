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
  bottom: 170px;
  z-index: 1;

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
  bottom: -70px;
  left: -49px;
  width: 120px;
  text-decoration: none;

  @media (max-width: 992px) {
    left: -53px;
  }
`;

class Social extends Component {
  render() {
    return (
      <SocialWrap>
        <SocialLink href="https://www.instagram.com/stab/">
          <img src={Instagram} />
        </SocialLink>
        <SocialLink href="https://twitter.com/Stabmagazine?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          <img src={Twitter} />
        </SocialLink>
        <SocialLink href="https://www.facebook.com/StabSurfMagazine/">
          <img src={Facebook} />
        </SocialLink>
        <StabMagText target="_blank" href="https://www.stabmag.com">
          BEST WETSUITS 2018
        </StabMagText>
      </SocialWrap>
    );
  }
}

export default Social;
