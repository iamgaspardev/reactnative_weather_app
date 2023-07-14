import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './components/pages/SplashScreen';
import BottomTabs from './components/BottomTabs';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay for the splash screen
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Change the duration as needed
  }, []);

  if (isLoading) {
    return <SplashScreen/>;
  }

  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}

export default App;
