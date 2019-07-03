/**
 *
 * Container
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigation from '../Navigation';
import Documentation from '../Documentation';

function Container() {
  return (
    <DivContainer>
      <Navigation />
      <Documentation />
    </DivContainer>
  );
}

const DivContainer = styled.div`
  font-family: 'Open Sans', 'sans-serif';
  display: flex;
  height: 100vh;
  p,
  code {
    color: #4d4e53;
  }
`;

Container.propTypes = {};

export default Container;
