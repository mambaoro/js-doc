/**
 *
 * Documentation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Router } from '@reach/router';
import { createBrowserHistory } from 'history';
import posed, { PoseGroup } from 'react-pose';
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
`;

Documentation.propTypes = {};

export default Documentation;
