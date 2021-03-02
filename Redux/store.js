import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './Reducers/authentication.reducer';
import registerReducer from './Reducers/Register.reducer';
import DataReduce from './Reducers/Data.reduce';
import SatalliteReducer from './Reducers/Satallite.reducer';
import ElectricityReducer from './Reducers/Electricity.reducer';

const RootReducers = combineReducers({
  auth: authReducer,
  reg: registerReducer,
  dat: DataReduce,
  sat: SatalliteReducer,
  ele: ElectricityReducer,
});

const middleware = [thunk];

const store = createStore(
  RootReducers,
  {},
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
