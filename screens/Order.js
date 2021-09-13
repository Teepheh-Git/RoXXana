import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet, SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../constants';
import {IconButton, TabButtons, VerticalTextButton} from '../components';
import Svg, {Circle} from 'react-native-svg';

const Order = ({navigation, route, appTheme}) => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('Milk Tea');
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        let {selectedLocation} = route.params;
        setSelectedLocation(selectedLocation);
    }, []);

    useEffect(() => {

        let menuList = dummyData.menuList.filter(menuItem => menuItem.category === selectedCategory);


        setMenu(menuList);


    }, [selectedCategory]);


    function renderHeaderSection() {
        return (

            <SafeAreaView style={{
                height: 200,
                backgroundColor: COLORS.primary,
                alignItems: 'center',

            }}>

                {/*nav Bar*/}

                <View style={{
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.radius,
                    alignItems: 'center',
                }}>
                    <IconButton icon={icons.leftArrow}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                    />


                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                    }}>
                        <Text style={{color: COLORS.white, ...FONTS.h1, fontSize: 25}}>Pick-up Order</Text>
                    </View>
                    <View style={{width: 25}}/>

                </View>


                {/*Location*/}
                <View style={{
                    marginTop: SIZES.radius,
                    backgroundColor: COLORS.white1,
                    paddingVertical: 5,
                    borderRadius: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                }}>

                    <Text
                        style={{
                            color: COLORS.primary, ...FONTS.body3,

                        }}
                    >{selectedLocation?.title}</Text>
                </View>


            </SafeAreaView>

        );
    }

    function renderTopTabBarSection() {
        return (


            <View style={{
                flexDirection: 'row',
                marginTop: SIZES.radius,
                height: 50,
                justifyContent: 'center',
                paddingLeft: SIZES.padding * 2,
                paddingRight: SIZES.padding,

            }}>

                {/*Tab Button*/}

                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                    }}>

                    <TabButtons
                        label={'Menu'}
                        containerStyle={{
                            width: 60,
                        }}
                        selected={selectedTab === 0}
                        onPress={() => {
                            setSelectedTab(0);
                        }}
                    />

                    <TabButtons
                        label={'Previous'}
                        containerStyle={{
                            width: 90,
                        }}
                        selected={selectedTab === 1}
                        onPress={() => {
                            setSelectedTab(1);
                        }}

                    />

                    <TabButtons
                        label={'Favourite'}
                        containerStyle={{
                            width: 90,
                        }}
                        selected={selectedTab === 2}
                        onPress={() => {
                            setSelectedTab(2);
                        }}
                    />
                </View>

                {/*Order Number*/}

                <View style={{
                    width: 35,
                    height: 35,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.primary,

                }}>
                    <Text style={{
                        color: COLORS.white,
                        ...FONTS.h3,
                    }}>0</Text>

                </View>


            </View>

        );
    }

    function renderSideBar() {
        return (

            <View>
                <Svg height={'65'} width={'65'} viewBox={'0 0 65 65'}>
                    <Circle
                        cx={5}
                        cy={60}
                        r={60}
                        fill={COLORS.primary}
                    />
                </Svg>

                <View style={{
                    marginTop: -10,
                    width: 65,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.primary,
                    zIndex: 1,
                }}>

                    <VerticalTextButton
                        label={'Snack'}
                        selected={selectedCategory === 'Snack'}
                        onPress={() => setSelectedCategory('Snack')}
                    />
                    <VerticalTextButton
                        label={'Coffee'}
                        containerStyle={{
                            marginTop: 50,
                        }}
                        selected={selectedCategory === 'Coffee'}
                        onPress={() => setSelectedCategory('Coffee')}
                    />
                    <VerticalTextButton
                        label={'Smoothie'}
                        containerStyle={{
                            marginTop: 70,
                            width: 100,
                        }}
                        selected={selectedCategory === 'Smoothie'}
                        onPress={() => setSelectedCategory('Smoothie')}
                    />
                    <VerticalTextButton
                        label={'Specialtea'}
                        containerStyle={{
                            marginTop: 90,
                            width: 100,
                        }}
                        selected={selectedCategory === 'Specialtea'}
                        onPress={() => setSelectedCategory('Specialtea')}
                    />
                    <VerticalTextButton
                        label={'Milk Tea'}
                        containerStyle={{
                            marginTop: 80,
                            width: 80,
                        }}
                        selected={selectedCategory === 'Milk Tea'}
                        onPress={() => setSelectedCategory('Milk Tea')}
                    />

                </View>

                <Svg height={'65'} width={'65'} viewBox={'0 0 65 65'}>
                    <Circle
                        cx={5}
                        cy={0}
                        r={60}
                        fill={COLORS.primary}
                    />
                </Svg>

            </View>
        );
    }

    return (
        <View style={styles.container}>

            {/*header*/}
            {renderHeaderSection()}


            {/*Details*/}

            <View style={{
                flex: 1,
                marginTop: -45,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                backgroundColor: appTheme.backgroundColor,

            }}>

                {/*tab bar*/}
                {renderTopTabBarSection()}

                {/*sideBar && Listing*/}


                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                }}>
                    {/*SideBar*/}
                    {renderSideBar()}

                    {/*Listing*/}


                </View>

            </View>

        </View>
    );
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,

        }
        ,
    },
);


function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
        error: state.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(Order);
