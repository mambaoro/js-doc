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
import Introduction from '../Introduction/Loadable';
import WhatYou from '../WhatYou/Loadable';
import JavaScriptJava from '../JavaScriptJava/Loadable';
import HelloWorld from '../HelloWorld/Loadable';
import Variables from '../Variables/Loadable';
import DeclaringVar from '../DeclaringVar/Loadable';
import VariableScope from '../VariableScope/Loadable';
import GlobalVar from '../GlobalVariables/Loadable';
import Constants from '../Constants/Loadable';
import DataTypes from '../DataTypes/Loadable';
import { media, bp } from '../../base';

const css1Bp600 = css`
  margin: 3rem auto;
  width: 95%;
`;

const DivDoc = styled.div`
  width: 100%;
  margin: 3rem;
  ${media(css1Bp600, bp.bp600)}
`;

function Documentation() {
  const history = createBrowserHistory();
  const { location } = history;
  return (
    <DivDoc>
      <div>
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
      </div>
    </DivDoc>
  );
}

Documentation.propTypes = {};

export default Documentation;
