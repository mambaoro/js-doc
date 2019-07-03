/**
 *
 * JavaScriptJava
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

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

function JavaScriptJava() {
  return (
    <Section>
      <H1HeadingPrimary>JavaScript and Java</H1HeadingPrimary>
      <Paragraph>
        JavaScript and Java are similar in some ways but fundamentally different
        in some others. The JavaScript language resembles Java but does not have
        Java&apos;s static typing and strong type checking. JavaScript follows
        most Java expression syntax, naming conventions and basic control-flow
        constructs which was the reason why it was renamed from LiveScript to
        JavaScript.
      </Paragraph>
      <Paragraph>
        In contrast to Java&apos;s compile-time system of classes built by
        declarations, JavaScript supports a runtime system based on a small
        number of data types representing numeric, Boolean, and string values.
        JavaScript has a prototype-based object model instead of the more common
        class-based object model. The prototype-based model provides dynamic
        inheritance; that is, what is inherited can vary for individual objects.
        JavaScript also supports functions without any special declarative
        requirements. Functions can be properties of objects, executing as
        loosely typed methods.
      </Paragraph>
      <Paragraph>
        JavaScript is a very free-form language compared to Java. You do not
        have to declare all variables, classes, and methods. You do not have to
        be concerned with whether methods are public, private, or protected, and
        you do not have to implement interfaces. Variables, parameters, and
        function return types are not explicitly typed.
      </Paragraph>
    </Section>
  );
}

JavaScriptJava.propTypes = {};

export default JavaScriptJava;
