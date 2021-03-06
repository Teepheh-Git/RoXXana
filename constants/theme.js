import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const COLORS = {
    primary: '#da8182',     // Green
    secondary: '#2C2C2C',    // Gray

    deepPink: '#bb5e8a',
    fuschia: '#D993B4',
    yellow: '#F1CD7C',
    lightPrimary: '#e8b6b7',
    white: '#fff',
    white1: '#F1E6D8',
    deepPurple: '#420b4d',
    lightGreen2: '#BED2BB',
    // deepPink: '#bb5e8a',
    red2: '#FF7363',
    black: '#000000',
    gray: '#6E6E6E',
    gray1: '#363636',
    gray2: '#4B4B4B',
    gray3: '#4D4D4D',
    lightGray: '#3B3B3B',
    lightGray2: '#707070',
    lightGray3: '#f0f0f0',

    pink: '#D993B4',
    lightPink: '#F3DEE8',

    transparentWhite: 'rgba(255, 255, 255, 0.2)',
    transparentBlack: 'rgba(0, 0, 0, 0.4)',
    transparent: 'transparent',
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height,
};
export const FONTS = {
    largeTitle: {fontSize: SIZES.largeTitle},
    h1: {fontSize: SIZES.h1, lineHeight: 36},
    h2: {fontSize: SIZES.h2, lineHeight: 30},
    h3: {fontSize: SIZES.h3, lineHeight: 22},
    h4: {fontSize: SIZES.h4, lineHeight: 22},
    body1: {fontSize: SIZES.body1, lineHeight: 36},
    body2: {fontSize: SIZES.body2, lineHeight: 30},
    body3: {fontSize: SIZES.body3, lineHeight: 22},
    body4: {fontSize: SIZES.body4, lineHeight: 22},
    body5: {fontSize: SIZES.body5, lineHeight: 22},
};

export const darkTheme = {
    name: 'dark',
    backgroundColor: COLORS.secondary,
    textColor: COLORS.white,
    tabBackgroundColor: COLORS.lightGray,
    cardBackgroundColor: COLORS.gray3,
    bottomTabBarBackgroundColor: COLORS.gray3,
    headerColor: COLORS.yellow,
};

export const lightTheme = {
    name: 'light',
    backgroundColor: COLORS.lightGray3,
    textColor: COLORS.black,
    tabBackgroundColor: COLORS.yellow,
    cardBackgroundColor: COLORS.lightPrimary,
    bottomTabBarBackgroundColor: COLORS.lightPrimary,
    headerColor: COLORS.deepPink,
};

export const selectedTheme = darkTheme;

const appTheme = {
    COLORS, SIZES, FONTS, darkTheme, lightTheme, backgroundColor: undefined,
};

export default appTheme;
