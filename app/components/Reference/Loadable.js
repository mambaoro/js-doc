/**
 *
 * Asynchronously loads the component for Reference
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
