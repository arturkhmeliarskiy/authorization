import {createStore} from 'redux';
import { maiReducer } from './reducers';

export const store = createStore(maiReducer);
