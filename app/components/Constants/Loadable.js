/**
 *
 * Asynchronously loads the component for Constants
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
