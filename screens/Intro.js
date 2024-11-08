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
import Button from '../conponents/Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Intro = ({navigation}) => {
  return (
    <ImageBackground
      source={images.background || require('../assets/images/background.jpeg')}
      style={styles.backgroundImage}>
      <StatusBar hidden />

      <View style={styles.container}>
        <Text style={styles.title}>
          Meta Front Software House Evaluation Task
        </Text>
        <Text style={styles.subTitle}>React Native Developer Position</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
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
    justifyContent: 'center',
    paddingHorizontal: wp('5%'),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: wp('6%'),
    marginHorizontal: wp('5%'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: wp('8%'),
    textAlign: 'center',
    fontFamily: FONTS.bold,
    marginBottom: hp('2%'),
  },
  subTitle: {
    fontSize: wp('5%'),
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: FONTS.regular,
    marginBottom: hp('5%'),
  },
  button: {
    marginVertical: hp('3%'),
    width: wp('80%'),
    paddingVertical: hp('2%'),
    borderRadius: 8,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    alignSelf: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('3%'),
  },
  footerText: {
    fontSize: wp('4%'),
    color: COLORS.white,
    fontFamily: 'medium',
  },
  footerName: {
    fontSize: wp('5%'),
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
  },
});

export default Intro;
