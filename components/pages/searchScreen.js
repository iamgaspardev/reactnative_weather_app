import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet,ActivityIndicator, TextInput, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getdata from '../../services/getdata';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [hasdata, setHasData] = useState(false);
  const [city, setCity] = useState('');
  const navigation = useNavigation();

  if (hasdata) {
    return (
      <ImageBackground
        source={require('../../assets/bg.png')}
        style={styles.imageBackground}
      >
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="80" color="orange" />
        </View>
      </ImageBackground>
    );
  }
  const handleButtonPress = async () => {
    try {
      setHasData(true);
      const data = await getdata.getWeatherData(city);
      if (data) {
        setWeatherData(data);
        await AsyncStorage.setItem('weatherData', JSON.stringify(data));
        navigation.navigate('Home');
      } else {
        console.error('Weather data is undefined');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setHasData(false);
    }
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
            onChangeText={setCity}
            value={city}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
