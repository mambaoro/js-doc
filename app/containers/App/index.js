/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Introduction from '../../components/Introduction/Loadable';
import WhatYou from '../../components/WhatYou/Loadable';
import JavaScriptJava from '../../components/JavaScriptJava/Loadable';
import HelloWorld from '../../components/HelloWorld/Loadable';
import Variables from '../../components/Variables/Loadable';
import DeclaringVar from '../../components/DeclaringVar/Loadable';
import VariableScope from '../../components/VariableScope/Loadable';
import GlobalVar from '../../components/GlobalVariables/Loadable';
import Constants from '../../components/Constants/Loadable';
import DataTypes from '../../components/DataTypes/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <Fragment>
      <Router>
        <HomePage path="/">
          <Introduction path="introduction" />
          <WhatYou path="whatyou" />
          <JavaScriptJava path="javascript-java" />
          <HelloWorld path="hello-world" />
          <Variables path="variables" />
          <DeclaringVar path="declaring-var" />
          <VariableScope path="variable-scope" />
          <GlobalVar path="global-var" />
          <Constants path="constants" />
          <DataTypes path="datatypes" />
        </HomePage>
        <NotFoundPage default />
      </Router>
      <GlobalStyle />
    </Fragment>
  );
}
