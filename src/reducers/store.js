import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

export const history = createBrowserHistory();

const enhancers = [];

const middleware = [thunk, routerMiddleware(history)];


// /* eslint-disable */
// const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// /* eslint-enable */

// if (typeof devToolsExtension === 'function') {
//   enhancers.push(devToolsExtension);
// }

const composeEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(rootReducer(history), composeEnhancers);
