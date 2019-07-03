/**
 *
 * Asynchronously loads the component for Documentation
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
