import React from 'react';
import styled, { css } from 'styled-components';

const GridWrapper = styled.section`
  padding: 0em;
  /* backgroundColor: white; */
  
  ${props =>`
    &:hover {
      background: #f3e8eb; 
      margin: 0px;
      height: 100%;
      border-radius: 15px;
      color: black;
    }
  `}
`;

export default GridWrapper;
