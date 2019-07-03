/**
 *
 * WhatYou
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

const ULList = styled.ul`
  margin-left: 8rem;
  li {
    margin-bottom: 1.8rem;
    width: 95%;
  }
`;

function WhatYou() {
  return (
    <Section>
      <H1HeadingPrimary>What you should already know</H1HeadingPrimary>
      <Paragraph>
        This guide assumes you have the following basic background:
      </Paragraph>
      <ULList>
        <li>
          <p>
            A general understanding of the Internet and the World Wide Web
            (WWW).
          </p>
        </li>
        <li>
          <p>Good working knowledge of HyperText Markup Language (HTML).</p>
        </li>
        <li>
          <p>
            Some programming experience. If you are new to programming, try one
            of the tutorials linked on the main page about JavaScript.
          </p>
        </li>
      </ULList>
    </Section>
  );
}

WhatYou.propTypes = {};

export default WhatYou;
