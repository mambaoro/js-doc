/**
 *
 * HelloWorld
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function HelloWorld() {
  return (
    <Section>
      <H1HeadingPrimary>Hello world</H1HeadingPrimary>
      <Paragraph>
        To get started with writing JavaScript, open the Scratchpad and write
        your first &ldquo;Hello world&rdquo; JavaScript code:
      </Paragraph>
      <code>
        function greetMe(yourName) &#123;alert(&apos;Hello &apos; +
        yourName)&#125; <br />
        greetMe(&ldquo;World&rdquo;);
      </code>
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

HelloWorld.propTypes = {};

export default HelloWorld;
