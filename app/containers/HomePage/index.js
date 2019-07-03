/*
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Container/Loadable';

function Homepage(props) {
  return <Container location={props.location} />;
}

Homepage.propTypes = {
  location: PropTypes.object,
};

export default Homepage;
