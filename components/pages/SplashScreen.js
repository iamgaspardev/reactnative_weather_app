import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, ImageBackground } from 'react-native';

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
      <ImageBackground
        source={require('../../assets/bg.png')}
        style={styles.backgroundImage}
      >
        <Animated.Image
          source={require('../../assets/hewa_logo.png')}
          resizeMode="contain"
          style={[styles.hewa_logo, { transform: [{ scale: hewa_logoScaleValue }] }]}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hewa_logo: {
    width: 100,
    height: 100,
  },
});

export default SplashScreen;
