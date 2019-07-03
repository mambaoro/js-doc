/**
 *
 * GlobalVariables
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function GlobalVariables() {
  return (
    <Section>
      <H1HeadingPrimary>Global variables</H1HeadingPrimary>
      <Paragraph>
        Global variables are in fact properties of the global object. In web
        pages the global object is window, so you can set and access global
        variables using the window.variable syntax.
      </Paragraph>
      <Paragraph>
        Consequently, you can access global variables declared in one window or
        frame from another window or frame by specifying the window or frame
        name. For example, if a variable called phoneNumber is declared in a
        document, you can refer to this variable from an iframe as
        parent.phoneNumber.
      </Paragraph>
    </Section>
  );
}

const Section = styled.section`
  font-size: 1.536rem;
  line-height: 1.5;
  width: 100%;
  code {
    font-size: 1.2rem;
    padding: 2rem;
    background-color: #f7f7f7;
    text-align: left;
    display: block;
    line-height: 1.9;
  }
`;

const H1HeadingPrimary = styled.h1`
  font-size: var(--h1-fontsize);
  font-weight: var(--h1-fontweight);
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  margin-left: 2.5rem;
  margin-bottom: 2rem;
  ::selection {
    background-color: purple;
  }
`;

GlobalVariables.propTypes = {};

export default GlobalVariables;
