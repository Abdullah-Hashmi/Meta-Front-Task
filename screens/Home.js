import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import {COLORS, FontFamily, FontSize} from '../constants/theme';
import {itemsData} from '../data';
import {ProgressBar} from 'react-native-paper'; // Make sure you have react-native-paper installed for ProgressBar
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Home = ({navigation}) => {
  const renderItem = ({item}) => {
    console.log('Image source:', item.image); // Log the image to ensure it's correct
    return (
      <View
        style={[
          styles.itemContainer,
          {backgroundColor: item.itembackground_color},
        ]}>
        <View style={styles.itemContent}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
          <Text style={styles.itemsText}>{item.items}</Text>
          {/* <Text style={styles.progressbarText}>{item.progressbarText}</Text> */}
          {/* <ProgressBar
            progress={parseFloat(item.progressbarText) / 100}
            color={item.color}
            style={styles.progressBar}
          /> */}
        </View>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.screenContainer}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      {/* Header section */}
      <View style={styles.headerContainer}>
        <Text style={styles.Subtitle}>Hello,</Text>
        <Text style={styles.headertitle}>MetaFront!</Text>
        <Text style={styles.Subtitle}>
          Stay organized with quick access to all your essential lists!
        </Text>
      </View>
      {/* FlatList section */}
      <FlatList
        data={itemsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.ScreenBackgroundColor,
  },
  headerContainer: {
    height: hp('25%'),
    backgroundColor: COLORS.ScreenBackgroundColor,
    justifyContent: 'flex-end',
    paddingLeft: wp('7%'),
    paddingBottom: hp('3%'),
  },
  headertitle: {
    color: COLORS.black,
    fontSize: FontSize.title,
    fontFamily: FontFamily.heading,
    // fontWeight: 'SemiBold',
    // marginTop: hp('2%'),
  },
  loginText: {
    color: COLORS.black,
    fontSize: FontSize.title,
    fontFamily: FontFamily.B2_Semibold,
    fontWeight: 'bold',
    marginTop: hp('2%'),
  },
  Subtitle: {
    fontSize: FontSize.subtitle,
    fontFamily: FontFamily.subtitle,
    color: COLORS.thinText,
    marginHorizontal: wp('2%'),
  },
  listContainer: {
    paddingBottom: hp('5%'),
  },
  itemContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: wp('5%'),
    alignItems: 'center',
  },
  itemContent: {
    flex: 1,
  },
  title: {
    fontSize: FontSize.itemtitle,
    fontFamily: FontFamily.H4_Regular,
    color: COLORS.black,
  },
  subTitle: {
    fontSize: FontSize.subtitle,
    fontFamily: FontFamily.S1_Regular,
    color: COLORS.gray,
    marginVertical: 2,
  },
  itemsText: {
    fontSize: FontSize.subtitle,
    fontFamily: FontFamily.P1_Regular,
    color: COLORS.secondaryGray,
    marginVertical: 2,
  },
  progressbarText: {
    fontSize: FontSize.subtitle,
    fontFamily: FontFamily.P2_Regular,
    color: COLORS.gray,
    marginVertical: 2,
  },
  progressBar: {
    height: 5,
    borderRadius: 3,
    marginTop: 5,
  },
  image: {
    width: wp('20%'),
    height: wp('20%'),
    resizeMode: 'contain',
    backgroundColor: 'transparent',
  },
});
