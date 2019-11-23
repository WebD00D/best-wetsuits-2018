import React, { Component } from 'react';
import styled from 'react-emotion';
import theme from '../theme.json';

import CloseIcon from '../_assets/icons/closeme.svg';

const Wrap = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.filter};
  z-index: 10;
  top: 0px;
`;

const Close = styled('img')`
  height: 20px;
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  z-index: 5;
`;

const IframeContainer = styled('div')`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 599px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IFrame = styled('iframe')`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  width: 560px;
  height: 315px;
  box-shadow: 0px 9px 13px rgba(0, 0, 0, 0.25);
  z-index: 2;
  background-color: #000;
  border-radius: 4px;
`;

export default class VideoModal extends Component {
  render() {
    return (
      <Wrap id="FS">
        <Close onClick={() => this.props.closeModal()} src={CloseIcon} />
        <IframeContainer>
          <IFrame
            src={this.props.video}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </IframeContainer>
      </Wrap>
    );
  }
}


