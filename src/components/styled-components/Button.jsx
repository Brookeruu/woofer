import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background: white;
  border-radius: 3px;
  border: 3px solid #ffffff;
  /* box-shadow: 0.25em 0.25em #6c648b; */
  color: #696969;
  margin: 1em 1em;
  padding: 0.2em .5em;
  font-size: 30px;
  font-family: Bakery;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
  text-transform: uppercase;
  letter-spacing: 2px;

  
  ${props =>  `
    &:hover {
      background: #fba100;
      border: 2px solid #fba100;
      color: #ffffff
      
    }
  `}
`;

export default Button;