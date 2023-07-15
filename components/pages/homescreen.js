import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground,ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import getdata from '../../services/getdata';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';


const HomeScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Dar es Salaam');
  const isFocused = useIsFocused();
  useEffect(() => {
    const fetchData = async () => {
        if (isFocused) {
            try {
                const storedData = await AsyncStorage.getItem('weatherData');
                console.log("data tested----------------->", storedData);
          
                if (storedData) {
                  const parsedData = JSON.parse(storedData);
          
                  if (parsedData.cod === "404") {
                    const data = await getdata.getWeatherData(city);
                    setWeatherData(data);
                  } else {
                    setWeatherData(parsedData);
                  }
                } else {
                  const data = await getdata.getWeatherData(city);
                  setWeatherData(data);
                }
              } catch (error) {
                console.error('Error fetching weather data:', error);
              }
          }
      
    };
  
    fetchData();
  },  [isFocused]);
  

  if (!weatherData) {
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

  const { name, main, weather, wind } = weatherData;
  const { temp, feels_like, humidity } = main;
  const { speed } = wind;
  const { main: weatherMain, description, icon } = weather[0];

  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/hewa_logo.png')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Icon name="location" size={30} color="orange" />
          <Text style={styles.textstyle}>{name}</Text>
        </View>
        <View style={styles.weatherContainer}>
          <Icon name="cloud" size={90} color="#f1f1f1" />
          <View style={styles.temperatureContainer}>
            <Text style={styles.temperatureValue}>{Math.round(temp - 273.15)}</Text>
            <Text style={styles.temperatureUnit}>°C</Text>
          </View>
          <View style={styles.temperatureContainer}>
            <Text style={styles.temperatureValue2}>Feels like</Text>
            <Text style={styles.temperatureUnit2}>{Math.round(feels_like - 273.15)} °C</Text>
          </View>
          <Text style={styles.text}>{description}</Text>
        </View>
      </View>
      <View style={styles.detailscomponent}>
        <View style={styles.rowarrangement}>
          <View style={styles.rowItemLeft}>
            <Icon name="ios-speedometer-outline" size={30} color="white" />
            <Text style={styles.text2}>Windspeed</Text>
          </View>
          <Text style={styles.text2}>{speed} Km/hr</Text>
        </View>
        <View style={styles.rowarrangement}>
          <View style={styles.rowItemLeft}>
            <Icon name="calendar-outline" size={30} color="white" />
            <Text style={styles.text2}>Tuesday, 04 Oct 2022</Text>
          </View>
          <Text style={styles.text2}>17:00</Text>
        </View>
        <View style={styles.rowarrangement}>
          <View style={styles.rowItemLeft}>
            <Icon name="cloudy-night-outline" size={30} color="white" />
            <Text style={styles.text2}>Humidity</Text>
          </View>
          <Text style={styles.text2}>{humidity}%</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
  rowarrangement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  rowItemLeft: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailscomponent: {
    flex: 1,
    flexDirection: 'column',
    padding: 2,
    marginBottom: 10,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 10,
  },
  logo: {
    height: 80,
    width: 80,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textstyle: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 10,
  },
  weatherContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  temperatureValue: {
    fontSize: 60,
    color: '#f1f1f1',
  },
  temperatureUnit: {
    fontSize: 18,
    color: '#f1f1f1',
    marginLeft: 5,
  },
  temperatureValue2: {
    fontSize: 18,
    color: '#f1f1f1',
  },
  text: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#f1f1f1',
  },
  temperatureUnit2: {
    fontSize: 18,
    color: 'orange',
    marginLeft: 5,
  },
  text2: {
    fontSize: 18,
    color: '#f1f1f1',
    marginLeft: 5,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default HomeScreen;
