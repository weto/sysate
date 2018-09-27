import { createStore } from 'redux';

import reducersLogin from './login';

const store = createStore(reducersLogin);

export default store;
