/**
 *
 * VariableScope
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function VariableScope() {
  return (
    <Section>
      <H1HeadingPrimary>Variable scope</H1HeadingPrimary>
      <Paragraph>
        When you declare a variable outside of any function, it is called a
        global variable, because it is available to any other code in the
        current document. When you declare a variable within a function, it is
        called a local variable, because it is available only within that
        function.
      </Paragraph>
      <Paragraph>
        JavaScript before ECMAScript 2015 does not have block statement scope;
        rather, a variable declared within a block is local to the function (or
        global scope) that the block resides within. For example the following
        code will log 5, because the scope of x is the function (or global
        context) within which x is declared, not the block, which in this case
        is an if statement.
      </Paragraph>
      <code>
        if (true) &#123; var x = 5; &#125; console.log(x); &#47;&#47; 5
      </code>
      <Paragraph>
        This behavior changes, when using the let declaration introduced in
        ECMAScript 2015.
      </Paragraph>
      <code>
        if (true) &#123; let y = 5; &#125; console.log(y); &#47;&#47;
        ReferenceError: y is not <br />
        defined
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

VariableScope.propTypes = {};

export default VariableScope;
