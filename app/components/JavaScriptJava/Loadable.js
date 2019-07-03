/**
 *
 * Asynchronously loads the component for JavaScriptJava
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
