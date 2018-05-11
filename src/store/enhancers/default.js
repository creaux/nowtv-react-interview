import { compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import promise from './promise';

export default compose(
  promise,
  devToolsEnhancer(),
);
