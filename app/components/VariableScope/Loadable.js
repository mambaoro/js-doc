/**
 *
 * Asynchronously loads the component for VariableScope
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
