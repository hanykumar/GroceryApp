import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar, View } from 'react-native';
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"

import Navigator from './navigator/navigator';
import store from './store/store';

function App(): React.JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <Provider store={store}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <StatusBar barStyle="light-content" />
          <Navigator />
        </View>
      </Provider>
    </GluestackUIProvider>
  );
}

export default App;
