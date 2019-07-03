/**
 *
 * Documentation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Router } from '@reach/router';
import { createBrowserHistory } from 'history';
import posed, { PoseGroup } from 'react-pose';
import Introduction from '../Introduction';
import WhatYou from '../WhatYou';
import JavaScriptJava from '../JavaScriptJava';
import HelloWorld from '../HelloWorld';
import Variables from '../Variables';
import DeclaringVar from '../DeclaringVar';
import VariableScope from '../VariableScope';
import GlobalVar from '../GlobalVariables';
import Constants from '../Constants';
import DataTypes from '../DataTypes';
import { media, bp } from '../../base';

function Documentation() {
  const history = createBrowserHistory();
  const { location } = history;
  return (
    <DivDoc>
      <PoseGroup>
        <RoutesContainer key={location.pathname}>
          <Router location={location}>
            <Introduction path="introduction" default />
            <WhatYou path="whatyou" />
            <JavaScriptJava path="javascript-java" />
            <HelloWorld path="hello-world" />
            <Variables path="variables" />
            <DeclaringVar path="declaring-var" />
            <VariableScope path="variable-scope" />
            <GlobalVar path="global-var" />
            <Constants path="constants" />
            <DataTypes path="datatypes" />
          </Router>
        </RoutesContainer>
      </PoseGroup>
    </DivDoc>
  );
}

const css1Bp600 = css`
  margin: 3rem auto;
  width: 95%;
`;

const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 100,
    beforeChildren: true,
    transition: { duration: 100 },
  },
  exit: { opacity: 0, transition: { duration: 50 } },
});

const DivDoc = styled.div`
  width: 100%;
  margin: 3rem;
  ${media(css1Bp600, bp.bp600)}
`;

Documentation.propTypes = {};

export default Documentation;
