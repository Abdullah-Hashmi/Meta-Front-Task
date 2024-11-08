import {Dimensions} from 'react-native';
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const {height, width} = Dimensions.get('window');

export const COLORS = {
  primary: '#52C2FE',
  // colors={['#00A4E4', '#1EB0E9']}
  secondary: '#00A4E4',
  tertiary: '#1EB0E9',
  white: '#FFFFFF',
  secondaryWhite: '#F9F9FF',
  tertiaryWhite: '#fafafa',
  black: '#000000',
  gray: '#8a8994',
  gray2: '#e4e5e6',
  secondaryGray: '#808080',
  ScreenBackgroundColor: '#EFF9FF',
  thinText: '#6C6C6C',
  item1backgroundColor: '#9DF4F4',
  item2backgroundColor: '#98FBCB',
  item3backgroundColor: '#FEE5D7',
  item4backgroundColor: '#FFCBA1',
  item5backgroundColor: '#FDDC8A',
  item1_TitleColor: '#008B94',
  item2_TitleColor: '#4AA688',
  item3_TitleColor: '#C54B6C',
  item4_TitleColor: '#E36A4A',
  item5_TitleColor: '#D88D1B',
  black: '#000000',
};

export const FontFamily = {
  // → Heading
  heading: 'OpenSans-SemiBold',
  H2_Light: 'DMSans-Medium',
  H3_Regular: 'DMSans-Medium',
  H4_Regular: 'DMSans-Bold',
  H5_Regular: 'DMSans-Bold',
  H6_Regular: 'DMSans-Bold',

  // → Subtitle
  S1_Regular: 'DMSans-Regular',
  S2_Medium: 'DMSans-Regular',

  // → Paragraph
  P1_Regular: 'DMSans-Regular',
  P2_Regular: 'DMSans-Regular',

  // → Button
  B1_Bold: 'DMSans-Bold',
  B2_Semibold: 'DMSans-Bold',
  B3_Semibold: 'DMSans-Bold',

  // → Label
  L1_Semibold: 'DMSans-Bold',
  L2_Regular: 'DMSans-Regular',
  L2_Semibold: 'DMSans-Bold',
  subtitle: 'Poppins-Light',
};
export const FontSize = {
  subtitle: 12,
  title: 16,
  itemtitle: 18,
  itemscount: 10,
};

export const SIZES = {
  // Global SIZES

  font: 14,
  radius: 30,
  padding: 8,
  padding2: 12,
  padding3: 16,

  // FONTS Sizes
  largeTitle: 50,
  h1: 36,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  // App Dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'black',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'bold', fontSize: SIZES.h4, lineHeight: 20},
  body1: {fontFamily: 'regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'regular', fontSize: SIZES.body4, lineHeight: 20},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
