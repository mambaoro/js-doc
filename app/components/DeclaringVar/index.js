/**
 *
 * DeclaringVar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

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

function DeclaringVar() {
  return (
    <Section>
      <H1HeadingPrimary>Declaring variables</H1HeadingPrimary>
      <Paragraph>You can declare a variable in three ways:</Paragraph>
      <Paragraph>With the keyword var. For example,</Paragraph>
      <code>var x = 42.</code>
      <Paragraph>
        This syntax can be used to declare both local and global variables.
      </Paragraph>
      <Paragraph>By simply assigning it a value. For example,</Paragraph>
      <code>x = 42.</code>
      <Paragraph>
        This always declares a global variable. It generates a strict JavaScript
        warning. You shouldn&apos;t use this variant.
      </Paragraph>
      <Paragraph>With the keyword let. For example,</Paragraph>
      <code>let y = 13.</code>
      <Paragraph>
        This syntax can be used to declare a block scope local variable. See
        Variable scope below.
      </Paragraph>
    </Section>
  );
}

DeclaringVar.propTypes = {};

export default DeclaringVar;
