import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
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
          <Text style={styles.textstyle}>Dar es salaam</Text>
        </View>
        <View style={styles.weatherContainer}>
          <Icon name="cloud" size={90} color="#f1f1f1" />
          <View style={styles.temperatureContainer}>
            <Text style={styles.temperatureValue}>27</Text>
            <Text style={styles.temperatureUnit}>°C</Text>
          </View>
          <View style={styles.temperatureContainer}>
            <Text style={styles.temperatureValue2}>Feels like</Text>
            <Text style={styles.temperatureUnit2}>28 °C</Text>
          </View>
          <Text style={styles.text}>Cloudy</Text>
         
        </View>
      </View>
      <View style={styles.detailscomponent}>
            <View style={styles.rowarrangement}>
              <View style={styles.rowItemLeft}>
                <Icon name="calendar-outline" size={30} color="white" />
                <Text style={styles.text2}>Windspeed</Text>
              </View>
              <Text style={styles.text2}>Km/hr</Text>
            </View>
            <View style={styles.rowarrangement}>
              <View style={styles.rowItemLeft}>
                <Icon name="calendar-outline" size={30} color="white" />
                <Text style={styles.text2}>Tuesday,04 Oct 2022</Text>
              </View>
              <Text style={styles.text2}>17:00</Text>
            </View>
            <View style={styles.rowarrangement}>
              <View style={styles.rowItemLeft}>
                <Icon name="cloudy-night-outline" size={30} color="white" />
                <Text style={styles.text2}>Humidity</Text>
              </View>
              <Text style={styles.text2}>56%</Text>
            </View>
          </View>
          
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  rowarrangement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  rowItemLeft: {
    flex:0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailscomponent: {
    flex: 1,
    flexDirection: 'column',
    padding: 2,
    marginBottom:10,
    justifyContent:'flex-end'
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
