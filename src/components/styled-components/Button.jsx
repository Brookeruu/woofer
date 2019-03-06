import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background: #c38d9e;
  border-radius: 3px;
  border: 2px solid #c38d9e;
  box-shadow: 0.25em 0.25em #6c648b;
  color: white;
  margin: 1em 1em;
  padding: 0.5em 2em;
  font-size: 16px;
  fontFamily: Bakery;
  
  ${props =>  `
    &:hover {
      background: #6c648b;
      border: 2px solid #6c648b;
      box-shadow: 0.25em 0.25em #c38d9e;
    }
  `}
`;

export default Button;