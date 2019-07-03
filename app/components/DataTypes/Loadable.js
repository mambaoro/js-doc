/**
 *
 * Asynchronously loads the component for DataTypes
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
