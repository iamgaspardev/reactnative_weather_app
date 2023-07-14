import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const SplashScreen = () => {
  const hewa_logoScaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(hewa_logoScaleValue, {
      toValue: 1,
      duration: 1500, 
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/hewa_logo.png')} 
        style={[styles.hewa_logo, { transform: [{ scale: hewa_logoScaleValue }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hewa_logo: {
    width: 200, 
    height: 200, 
  },
});

export default SplashScreen;