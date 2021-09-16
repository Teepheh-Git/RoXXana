import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';
import icons from '../constants/icons';
import {connect} from 'react-redux';
import {toggleTheme} from '../stores/themeActions';

const HeaderBar = ({appTheme, toggleTheme}) => {

    function toggleThemeHandler() {
        if (appTheme.name === 'light') {
            toggleTheme('dark');
        } else {
            toggleTheme('light');
        }
    }

    return (
        <SafeAreaView
            style={{
                height: 150,
                width: '100%',
                backgroundColor: COLORS.fuschia,
                flexDirection: 'row',
            }}>


            {/*greetings*/}
            <View style={{
                flex: 1,
                paddingLeft: SIZES.padding,
            }}
            >

                <Text style={{color: COLORS.white, ...FONTS.h2}}>Boluwatife, </Text>
                <Text style={{color: COLORS.white, ...FONTS.h2}}>Welcome Back! </Text>
            </View>

            {/*toggleButton*/}

            <TouchableOpacity
                onPress={() => toggleThemeHandler()}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginHorizontal: SIZES.padding,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: COLORS.lightPurple,
                }}>
                {/*sun*/}
                <View style={{
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...(appTheme.name === 'light') ? styles.selectedLightModeStyle : {},
                }}>

                    <Image
                        source={icons.sunny}
                        style={{
                            height: 30,
                            width: 30,
                            tintColor: COLORS.white,
                        }}>
                    </Image>
                </View>

                {/*moon*/}
                <View style={{
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...(appTheme.name === 'dark') ? styles.selectedNightModeStyle : {},

                }}>
                    <Image
                        source={icons.night}
                        style={{
                            height: 30,
                            width: 30,
                            tintColor: COLORS.white,
                        }}>
                    </Image>
                </View>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    selectedNightModeStyle: {
        borderRadius: 20,
        backgroundColor: COLORS.black,
    },

    selectedLightModeStyle: {
        borderRadius: 20,
        backgroundColor: COLORS.yellow,
    },

});


function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
        error: state.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleTheme: (themeType) => {
            return dispatch(toggleTheme(themeType));
        },
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
