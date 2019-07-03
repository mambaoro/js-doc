/**
 *
 * Asynchronously loads the component for FunctionDeclaration
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
