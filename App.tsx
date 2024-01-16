import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './navigator/navigator';
import store from './store/store';
import { StatusBar, View } from 'react-native';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="light-content" />
      <Navigator />
    </View>
    </Provider>
  );
}

export default App;
