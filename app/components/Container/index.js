/**
 *
 * Container
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Navigation from '../Navigation/Loadable';
import Documentation from '../Documentation/Loadable';
import { media, bp } from '../../base';

const css1Bp600 = css`
  flex-direction: column;
`;

const DivContainer = styled.div`
  font-family: 'Open Sans', 'sans-serif';
  display: flex;
  height: 100vh;
  p,
  code {
    color: #4d4e53;
  }
  ${media(css1Bp600, bp.bp600)}
`;

function Container({ location }) {
  return (
    <DivContainer>
      <Navigation />
      <Documentation location={location} />
    </DivContainer>
  );
}

Container.propTypes = {
  location: PropTypes.object,
};

export default Container;
