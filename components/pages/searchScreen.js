import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, TextInput, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const SearchScreen = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const handleButtonPress = () => {
    // Perform the desired action when the button is pressed
    console.log('Button pressed!');
  };
  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <View style={styles.hewa_logoContainer}>
          <Image
            style={styles.hewa_logo}
            source={require('../../assets/hewa_logo.png')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            width={300}
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            height={50}
            placeholder="Enter city name to search"
            keyboardType="text"
            placeholderTextColor="#F1F1F1"
          />
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#FFA500', // Orange background color
              padding: 10,
              borderRadius: 8,
            }}
            onPress={handleButtonPress}
          >
            <Icon name="search" size={24} color="#FFF" /> 
            <Text style={{ color: '#FFF', marginLeft: 8 }}>Search</Text> 
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hewa_logoContainer: {
    flex: 1,
    marginBottom: 30,
  },
  hewa_logo: {
    height: 80,
    width: 80,
  },
  inputContainer: {
    flex: 1.8,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#fff',
    color: '#fff',
    borderRadius: 10
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default SearchScreen;
