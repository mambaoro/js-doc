/**
 *
 * Constants
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

function Constants() {
  return (
    <Section>
      <H1HeadingPrimary>Constants</H1HeadingPrimary>
      <Paragraph>
        You can create a read-only, named constant with the const keyword. The
        syntax of a constant identifier is the same as for a variable
        identifier: it must start with a letter, underscore or dollar sign and
        can contain alphabetic, numeric, or underscore characters.
      </Paragraph>
      <code>const PI = 3.14;</code>
      <Paragraph>
        A constant cannot change value through assignment or be re-declared
        while the script is running. It has to be initialized to a value.
      </Paragraph>
      <Paragraph>
        The scope rules for constants are the same as those for let block scope
        variables. If the const keyword is omitted, the identifier is assumed to
        represent a variable.
      </Paragraph>
      <Paragraph>
        You cannot declare a constant with the same name as a function or
        variable in the same scope. For example:
      </Paragraph>
      <code>
        &#47;&#47; THIS WILL CAUSE AN ERROR function f() &#123;&#125;; const f =
        5; &#47;&#47; THIS WILL CAUSE AN ERROR ALSO function f() &#123; const g
        = 5; var g; &#47;&#47;statements &#125;
      </code>
    </Section>
  );
}

Constants.propTypes = {};

export default Constants;
