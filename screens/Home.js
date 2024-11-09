import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Progress from 'react-native-progress';
import {COLORS, FontFamily, FontSize} from '../constants/theme';
import {itemsData} from '../data';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {images} from '../constants';

const Home = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(itemsData);

  const handleSearch = query => {
    setSearchQuery(query);
    if (query) {
      const filteredItems = itemsData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredData(filteredItems);
    } else {
      setFilteredData(itemsData);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <View
          style={[
            styles.itemContainer,
            {backgroundColor: item.itembackground_color},
          ]}>
          <View style={styles.itemContent}>
            <Text style={[styles.title, {color: item.color}]}>
              {item.title}
            </Text>
            <Text
              style={[
                styles.subTitle,
                {color: item.color, fontSize: hp('1.5%')},
              ]}>
              {item.subTitle}
            </Text>
            <View style={[styles.itemsCount, {backgroundColor: item.color}]}>
              <Text style={styles.itemsText}>{item.items}</Text>
            </View>
            <Text
              style={[
                styles.subTitle,
                {
                  color: item.color,
                  fontSize: hp('1.1%'),
                  marginBottom: hp('0.5%'),
                },
              ]}>
              {item.progressbarText}
            </Text>
            <Progress.Bar
              progress={item.progress}
              unfilledColor="white"
              width={wp('45%')}
              color={item.color}
              borderWidth={0}
              height={hp('0.5%')}
              useNativeDriver={true}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image source={item.overlay} style={styles.overlayImage} />
            <Image source={item.image} style={styles.image} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screenContainer}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />

      <View style={styles.headerContainer}>
        <Text style={styles.Subtitle}>Hello,</Text>
        <Text style={styles.headertitle}>MetaFront!</Text>
        <Text
          style={[
            styles.Subtitle,
            {fontSize: hp('1.8%'), marginEnd: wp('5%')},
          ]}>
          Stay organized with quick access to all your essential lists!
        </Text>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholderTextColor={COLORS.gray}
            placeholder="Search"
            value={searchQuery}
            onChangeText={handleSearch}
          />
          <TouchableOpacity style={styles.sliderIconContainer}>
            <Image source={images.CTA} style={styles.sliderIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ListFooterComponent={<View style={styles.footer} />}
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
    height: hp('30%'),
    backgroundColor: COLORS.ScreenBackgroundColor,
    justifyContent: 'flex-end',
    paddingLeft: wp('5%'),
    paddingBottom: hp('1%'),
  },
  headertitle: {
    color: COLORS.black,
    fontSize: FontSize.title,
    fontFamily: FontFamily.heading,
    marginBottom: hp('0.5%'),
    lineHeight: hp('3%'),
  },
  Subtitle: {
    fontSize: FontSize.subtitle,
    fontFamily: FontFamily.subtitle,
    color: COLORS.thinText,
    marginBottom: hp('0.5%'),
    lineHeight: hp('3%'),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('90s%'),
    marginTop: hp('1%'),
  },
  searchBar: {
    flex: 1,
    height: hp('5%'),
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderColor: COLORS.primary,
    borderWidth: 1,
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('2%'),
    color: COLORS.black,
  },
  sliderIcon: {
    width: wp('9%'),
    height: wp('9%'),
    marginLeft: wp('2%'),
    alignSelf: 'center',
  },
  listContainer: {
    flexGrow: 1,
    paddingBottom: hp('5%'),
  },
  itemContainer: {
    flexDirection: 'row',
    borderRadius: 15,
    marginVertical: hp('1%'),
    marginHorizontal: wp('5%'),
    alignItems: 'center',
    width: wp('90%'),
  },
  itemContent: {
    flex: 1,
    padding: wp('6%'),
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
    marginVertical: hp('0.2%'),
  },
  itemsCount: {
    paddingVertical: hp('0.5%'),
    paddingHorizontal: wp('2.5%'),
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginVertical: hp('0.5%'),
  },
  itemsText: {
    fontSize: FontSize.subtitle,
    fontFamily: FontFamily.subtitle,
    color: 'white',
  },
  imageContainer: {
    width: wp('30%'),
    height: wp('30%'),
    position: 'relative',
  },
  overlayImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    backgroundColor: 'transparent',
    borderRadius: 10,
    alignSelf: 'flex-end',
    top: -hp('3%'),
    overflow: 'hidden',
    zIndex: -1,
  },
  image: {
    width: wp('32%'),
    height: wp('34%'),
    resizeMode: 'cover',
    backgroundColor: 'transparent',
    position: 'relative',
    borderRadius: 10,
    alignSelf: 'flex-end',
    bottom: -hp('-0.1%'),
    right: 0,
  },
  footer: {
    height: hp('7%'),
  },
  sliderIconContainer: {
    width: wp('8%'),
    height: wp('8%'),
    marginLeft: wp('1%'),
    alignSelf: 'center',
    marginEnd: wp('2%'),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
