import React from 'react';
import styled from 'react-emotion';
import theme from '../theme.json';

export const NavButton = styled('a')`
  height: 68px;
  display: inline-block;
  padding-left: 60px;
  padding-right: 60px;
  line-height: 68px;

  cursor: pointer;
  background-color: ${theme.colors.lightBlack};
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff !important;
  text-decoration: none !important;

  transition: 0.2s ease;

  &:hover {
    box-shadow: 0px 9px 13px rgba(0, 0, 0, 0.25);
  }
`;

export const PrimaryButton = styled('a')`
  height: 48px;
  display: inline-block;
  line-height: 48px;

  cursor: pointer;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff !important;
  text-decoration: none !important;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.75;
  }

  
`;
