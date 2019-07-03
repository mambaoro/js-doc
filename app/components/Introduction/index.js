/**
 *
 * Introduction
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function Introduction() {
  return (
    <Section>
      <H1HeadingPrimary>Introduction</H1HeadingPrimary>
      <Paragraph>
        JavaScript is a cross-platform, object-oriented scripting language. It
        is a small and lightweight language. Inside a host environment (for
        example, a web browser), JavaScript can be connected to the objects of
        its environment to provide programmatic control over them.
      </Paragraph>
      <Paragraph>
        JavaScript contains a standard library of objects, such as Array, Date,
        and Math, and a core set of language elements such as operators, control
        structures, and statements. Core JavaScript can be extended for a
        variety of purposes by supplementing it with additional objects; for
        example:
      </Paragraph>
      <ULList>
        <li>
          <p>
            Client-side JavaScript extends the core language by supplying
            objects to control a browser and its Document Object Model (DOM).
            For example, client-side extensions allow an application to place
            elements on an HTML form and respond to user events such as mouse
            clicks, form input, and page navigation.
          </p>
        </li>
        <li>
          <p>
            Server-side JavaScript extends the core language by supplying
            objects relevant to running JavaScript on a server. For example,
            server-side extensions allow an application to communicate with a
            database, provide continuity of information from one invocation to
            another of the application, or perform file manipulations on a
            server.
          </p>
        </li>
      </ULList>
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
  }
`;

Introduction.propTypes = {};

export default Introduction;
