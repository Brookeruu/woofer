import React from 'react';
import styled, { css } from 'styled-components';

const Title = styled.h1`
  font-size: 5em;
  letter-spacing: 5px;
  color: white;
  text-transform: uppercase;
  
  ${props =>  `
    &:hover {
    font-size: 5em;
    }
  `}
`;


export default Title;