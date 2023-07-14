import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

function BackScreen() {
    return (
        <ImageBackground
          source={require('../../assets/bg.png')}
          style={{ flex: 1 }}
        >
         <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
        <Image
          style={{ height: 80, width: 80 }}
          source={require('../../assets/hewa_logo.png')}
          resizeMode="contain"
        />
      </View>
    
        </ImageBackground>
      );
}
export default BackScreen