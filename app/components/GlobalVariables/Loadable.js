/**
 *
 * Asynchronously loads the component for GlobalVariables
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
