/**
 *
 * Asynchronously loads the component for WhatYou
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
