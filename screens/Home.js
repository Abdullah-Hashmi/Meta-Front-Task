import React from 'react';
import {StyleSheet, Text, View, StatusBar, FlatList, Image} from 'react-native';
import * as Progress from 'react-native-progress';

import {COLORS, FontFamily, FontSize} from '../constants/theme';
import {itemsData} from '../data';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Home = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View
        style={[
          styles.itemContainer,
          {backgroundColor: item.itembackground_color},
        ]}>
        <View style={styles.itemContent}>
          {/* Title with dynamic color */}
          <Text style={[styles.title, {color: item.color}]}>{item.title}</Text>

          {/* Subtitle with dynamic color */}
          <Text style={[styles.subTitle, {color: item.color}]}>
            {item.subTitle}
          </Text>

          <Text style={styles.itemsText}>{item.items}</Text>

          {/* Progress Bar with dynamic color */}
          <Progress.Bar
            progress={item.progress} // Dynamic progress value
            unfilledColor="white" // White color for the unfilled part
            width={150}
            color={item.color} // Dynamic color for the filled part
            borderWidth={0} // Remove the border around the progress bar
            height={3.5}
            useNativeDriver={true} // Improve performance on certain devices
          />
        </View>

        {/* Image with overlay */}
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
          <Image source={item.overlay} style={styles.overlayImage} />
        </View>
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
        ListFooterComponent={<View style={styles.footer} />} // Adding space at the bottom
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
  },
  Subtitle: {
    fontSize: FontSize.subtitle,
    fontFamily: FontFamily.subtitle,
    color: COLORS.thinText,
  },
  listContainer: {
    flexGrow: 1, // Ensure the FlatList grows to fill available space
    paddingBottom: hp('5%'), // Adjust bottom padding to give space
  },
  itemContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: wp('5%'),
    alignItems: 'center',
    width: wp('90%'), // Adjusted item width (set to 90% of screen width)
    paddingBottom: 10, // Added padding at the bottom of each item
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
  imageContainer: {
    // position: 'relative', // Parent container for image and overlay
    width: wp('30%'),
    height: wp('30%'),
  },
  image: {
    width: wp('30%'), // Adjusted image size
    height: wp('30%'),
    resizeMode: 'cover',
    backgroundColor: 'transparent',
    alignSelf: 'flex-end', // Align image to the right
    bottom: -9,
    right: -14,
    borderRadius: 10,
  },
  overlayImage: {
    position: 'absolute', // Overlay positioned on top of the image
    top: -25,
    right: -100,

    right: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Adjust overlay size if necessary
    backgroundColor: 'transparent',
    borderRadius: 50,
    alignSelf: 'flex-end',
  },
  footer: {
    height: 50, // Add some height to the footer to provide spacing at the bottom
  },
});
