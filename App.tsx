import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {IndexTabs} from './src/navigator/IndexTabs';

const App = () => {
  return (
    <NavigationContainer>
      <IndexTabs />
    </NavigationContainer>
  );
};

export default App;
