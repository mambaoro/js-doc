/**
 *
 * DataTypes
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function DataTypes() {
  return (
    <Section>
      <H1HeadingPrimary>Data types</H1HeadingPrimary>
      <Paragraph>
        The latest ECMAScript standard defines seven data types:
      </Paragraph>
      <ULList>
        <li>
          <p>Six data types that are primitives:</p>
          <ul>
            <li>
              <p>Boolean. true and false.</p>
            </li>
            <li>
              <p>
                null. A special keyword denoting a null value. Because
                JavaScript is case-sensitive, null is not the same as Null,
                NULL, or any other variant.
              </p>
            </li>
            <li>
              <p>undefined. A top-level property whose value is undefined.</p>
            </li>
            <li>
              <p>Number. 42 or 3.14159.</p>
            </li>
            <li>
              <p>String. &ldquo;Howdy&rdquo;</p>
            </li>
            <li>
              <p>
                Symbol (new in ECMAScript 2015). A data type whose instances are
                unique and immutable.
              </p>
            </li>
          </ul>
        </li>
        <li>and Object</li>
      </ULList>
      <Paragraph>
        Although these data types are a relatively small amount, they enable you
        to perform useful functions with your applications. Objects and
        functions are the other fundamental elements in the language. You can
        think of objects as named containers for values, and functions as
        procedures that your application can perform.
      </Paragraph>
    </Section>
  );
}

const Section = styled.section`
  font-size: 1.536rem;
  line-height: 1.5;
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

const ULList = styled.ul`
  margin-left: 8rem;
  li {
    margin-bottom: 1.8rem;
    width: 95%;
    ul {
      margin-top: 2rem;
      margin-left: 6rem;
    }
  }
`;

DataTypes.propTypes = {};

export default DataTypes;
