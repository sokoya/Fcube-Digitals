import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './Navigation';
import NavigationService from './_services/Navigation.service';
import store from './Redux/store';
import moment from 'moment';

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
}
