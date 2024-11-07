import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, images} from '../constants';
import Button from '../conponents/Button'; // Ensure this is the correct import for your button
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Intro = ({navigation}) => {
  return (
    <ImageBackground source={images.background} style={styles.backgroundImage}>
      <StatusBar hidden />

      <View style={styles.container}>
        <Text style={styles.title}>
          Meta Front Software House Evaluation Task
        </Text>
        <Text style={styles.subTitle}>React Native Developer Position</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log('Button Pressed');
            navigation.replace('Main');
          }}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>by:</Text>
          <Text style={styles.footerName}>Syed Abdullah</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center', // Centers the content vertically
    paddingHorizontal: wp('5%'), // Adjust padding based on screen width
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Centers content vertically
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a slight dark overlay to improve text readability
    borderRadius: 20,
    padding: wp('6%'), // Adjust padding based on screen width
    marginHorizontal: wp('5%'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, // For Android
  },
  title: {
    fontSize: wp('8%'), // Responsive font size based on screen width
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: FONTS.bold,
    marginBottom: hp('2%'), // Adjust margin based on screen height
  },
  subTitle: {
    fontSize: wp('5%'), // Responsive font size based on screen width
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: FONTS.regular,
    marginBottom: hp('5%'), // Adjust margin based on screen height
  },
  button: {
    marginVertical: hp('3%'), // Adjust margin based on screen height
    width: wp('80%'), // Responsive button width (80% of screen width)
    paddingVertical: hp('2%'), // Responsive padding based on screen height
    borderRadius: 8,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    alignSelf: 'center', // Centers the button horizontally
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('3%'), // Adjust margin based on screen height
  },
  footerText: {
    fontSize: wp('4%'), // Responsive font size based on screen width
    color: COLORS.white,
    fontFamily: 'medium',
  },
  footerName: {
    fontSize: wp('5%'), // Responsive font size based on screen width
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
  },
});

export default Intro;
