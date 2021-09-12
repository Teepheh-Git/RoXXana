import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, Animated, Image} from 'react-native';
import {HeaderBar} from '../components';
import {COLORS, constants, dummyData, FONTS, SIZES} from '../constants';
import {connect} from 'react-redux';
import icons from '../constants/icons';
import appTheme from '../constants/theme';
import images from '../constants/images';

const promoTabs = constants.promoTabs;

const TabIndicator = ({}) => {
    return (
        <View style={{
            position: 'absolute',
            height: '100%',
            width: 100,
            left: 0,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,

        }}>


        </View>

    );
};

const Tabs = ({appTheme}) => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: appTheme.tabBackgroundColor,
        }}>

            {/*Tab Indicator*/}

            <TabIndicator/>


            {/*Tab */}

            {promoTabs.map((item, index) => {

                return (
                    <TouchableOpacity onPress={() => {
                        console.log(item);
                    }} key={`PromoTabs-${index}`}>


                        <View style={{
                            paddingHorizontal: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 40,
                        }}>

                            <Text style={{
                                color: COLORS.white, ...FONTS.h3,
                            }}>{item.title}</Text>

                        </View>

                    </TouchableOpacity>
                );

            })}
        </View>
    );
};

const Home = ({navigation, appTheme}) => {


    const scrollX = React.useRef(new Animated.Value(0)).current;

    function renderAvailableRewards() {
        return (

            <TouchableOpacity onPress={() => navigation.navigate('Rewards')} style={{
                flexDirection: 'row',
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.padding,
                height: 100,
            }}>

                {/*Reward cup section*/}
                <View style={{

                    width: 100,
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.pink,
                    borderTopLeftRadius: 15,
                    borderBottomLeftRadius: 15,
                }}>

                    <ImageBackground resizeMode={'contain'} source={icons.reward_cup} style={{
                        width: 85,
                        height: 85,
                        marginLeft: 3,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>

                        <View
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.transparentBlack,
                            }}
                        >

                            <Text style={{color: COLORS.white, ...FONTS.h4}}>200</Text>

                        </View>

                    </ImageBackground>
                </View>


                {/*Reward Details section*/}

                <View style={{
                    flex: 1,
                    marginLeft: -10,
                    backgroundColor: COLORS.lightPink,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        color: COLORS.primary, ...FONTS.h2,
                        fontSize: 20,
                    }}> Available Rewards</Text>

                    <View style={{
                        marginTop: 5,
                        padding: SIZES.base,
                        borderRadius: SIZES.radius * 2,
                        backgroundColor: COLORS.primary,
                    }}>

                        <Text style={{
                            color: COLORS.white, ...FONTS.body3,

                        }}>150 points - $2.50 off
                        </Text>
                    </View>
                </View>


            </TouchableOpacity>
        );
    }

    function renderPromoDeals() {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>

                {/*Header Tabs*/}

                <Tabs appTheme={appTheme}/>


                {/*Details*/}

                <Animated.FlatList
                    data={dummyData.promos}
                    horizontal
                    pagingEnabled
                    scrollEventThrottle={16}
                    keyExtractor={item => `${item.id}`}
                    snapToAlignment={'center'}
                    onScroll={Animated.event([
                        {nativeEvent: {contentOffset: {x: scrollX}}},
                    ], {useNativeDriver: false})}
                    renderItem={({item, index}) => {

                        return (
                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                                width: SIZES.width,
                                paddingTop: SIZES.padding,
                            }}>

                                {/*image*/}
                                <Image resizeMode={'contain'}
                                       source={images.strawberryBackground}
                                       style={{
                                           width: '100%',
                                       }}/>

                                {/*name*/}

                                <Text style={{color: COLORS.red, ...FONTS.h1}}>{item.name}</Text>

                                {/*description*/}

                                <Text style={{
                                    marginTop: 3,
                                    color: appTheme.textColor,
                                    ...FONTS.body4,
                                }}>{item.description}</Text>

                                {/*calories*/}

                                <Text style={{
                                    marginTop: 3,
                                    color: appTheme.textColor,
                                    ...FONTS.body4,
                                }}>{item.calories}</Text>


                                {/*button*/}


                            </View>
                        );


                    }}/>


            </View>

        );
    }

    return (
        <View style={styles.container}>
            <HeaderBar/>

            <ScrollView style={{
                flex: 1,
                marginTop: -25,
                borderTopLeftRadius: SIZES.radius * 2,
                borderTopRightRadius: SIZES.radius * 2,
                backgroundColor: appTheme.backgroundColor,
            }}
                        contentContainerStyle={{
                            paddingBottom: 150,

                        }}
            >


                {/*Reward section*/}
                {renderAvailableRewards()}


                {/*Promo section*/}
                {renderPromoDeals()}

            </ScrollView>
        </View>
    )
        ;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
        error: state.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
