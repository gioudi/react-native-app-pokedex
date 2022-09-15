import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {IndexNavigator} from './src/navigator/IndexNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <IndexNavigator />
    </NavigationContainer>
  );
};

export default App;
