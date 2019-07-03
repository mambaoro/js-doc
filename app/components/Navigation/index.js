/**
 *
 * Navigation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from '@reach/router';
import { media, bp } from '../../base';

const css1Bp600 = css`
  border: none;
  margin: 0 auto;
`;

const NavContainer = styled.nav`
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  border-right: 3px solid rgba(0, 22, 22, 0.4);
  min-width: 30rem;
  ${media(css1Bp600, bp.bp600)}
`;

const H1HeadingPrimary = styled.h1`
  font-size: var(--h1-fontsize);
  font-weight: var(--h1-fontweight);
  padding: 1.5rem 2.5rem;
  padding-bottom: 2.8rem;
  border-bottom: 1px solid #000;
  text-align: center;
`;

const UlLinkList = styled.ul``;

const LILinkItem = styled.li`
  color: #4d4e53;
  :not(:last-child) {
    border-bottom: 1px solid #000;
  }
`;

const RouterLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 1.3rem 2rem;
  padding-left: 3rem;
`;

const isActive = ({ isCurrent }) => {
  if (isCurrent) {
    return {
      style: {
        backgroundColor: '#000',
        color: '#fafafa',
      },
    };
  }
  return null;
};

function Navigation() {
  return (
    <NavContainer>
      <H1HeadingPrimary>JS Documentation</H1HeadingPrimary>
      <UlLinkList>
        <LILinkItem>
          <RouterLink to="/" getProps={isActive}>
            Introduction
          </RouterLink>
        </LILinkItem>
        <LILinkItem>
          <RouterLink to="/whatyou" getProps={isActive}>
            What you should already know
          </RouterLink>
        </LILinkItem>
        <LILinkItem>
          <RouterLink to="/javascript-java" getProps={isActive}>
            JavaScript and Java
          </RouterLink>
        </LILinkItem>
        <LILinkItem>
          <RouterLink to="/hello-world" getProps={isActive}>
            Hello World
          </RouterLink>
        </LILinkItem>
        <LILinkItem>
          <RouterLink to="/variables" getProps={isActive}>
            Variables
          </RouterLink>
        </LILinkItem>
        <LILinkItem>
          <RouterLink to="/declaring-var" getProps={isActive}>
            Declaring variables
          </RouterLink>
        </LILinkItem>
        <LILinkItem>
          <RouterLink to="/variable-scope" getProps={isActive}>
            Variable Scope
          </RouterLink>
        </LILinkItem>
        <LILinkItem>
          <RouterLink to="/global-var" getProps={isActive}>
            Global variables
          </RouterLink>
        </LILinkItem>
        <LILinkItem>
          <RouterLink to="/constants" getProps={isActive}>
            Constants
          </RouterLink>
        </LILinkItem>
        <LILinkItem>
          <RouterLink to="/datatypes" getProps={isActive}>
            Data types
          </RouterLink>
        </LILinkItem>
      </UlLinkList>
    </NavContainer>
  );
}

Navigation.propTypes = {};

export default Navigation;
