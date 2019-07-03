/**
 *
 * Asynchronously loads the component for Variables
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
