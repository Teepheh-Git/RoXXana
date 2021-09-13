import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet, SafeAreaView, Image, FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {COLORS, dummyData, FONTS, SIZES} from '../constants';
import {IconButton, TabButtons} from '../components';
import icons from '../constants/icons';

const Location = ({navigation, appTheme}) => {

    const [selectedTab, setSelectedTab] = useState(0);

    function renderHeader() {
        return (

            <SafeAreaView style={{
                height: 120,
                backgroundColor: COLORS.primary,
                alignItems: 'center',
            }}>

                <View style={{
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.radius,
                    alignItems: 'center',
                }}>

                    {/*Back Button*/}
                    <IconButton
                        icon={icons.leftArrow}
                        onPress={() => {
                            navigation.goBack();
                        }}/>

                    {/*Title*/}
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                    }}>

                        <Text style={{
                            color: COLORS.white,
                            ...FONTS.h1,
                            fontSize: 25,
                        }}>
                            Locations
                        </Text>
                    </View>

                    {/*Empty*/}
                    <View style={{width: 25}}/>


                </View>

            </SafeAreaView>
        );
    }

    function renderTopBarSection() {
        return (


            <View
                style={{
                    flexDirection: 'row',
                }}>

                {/*Nearby*/}
                <TabButtons
                    label={'Nearby'}
                    containerStyle={{
                        width: 80,
                    }}
                    selected={selectedTab === 0}
                    onPress={() => {
                        setSelectedTab(0);
                    }}
                />

                {/*Previous*/}
                <TabButtons
                    label={'Previous'}
                    containerStyle={{
                        width: 100,
                    }}
                    selected={selectedTab === 1}
                    onPress={() => {
                        setSelectedTab(1);
                    }}
                />

                {/*Favourite*/}
                <TabButtons
                    label={'Favourite'}
                    containerStyle={{
                        width: 100,
                    }}
                    selected={selectedTab === 2}
                    onPress={() => {
                        setSelectedTab(2);
                    }}
                />

            </View>

        );
    }

    function renderSearchBar() {

        return (
            <View style={{
                flexDirection: 'row',
                marginTop: SIZES.radius,
                height: 50,
                paddingHorizontal: SIZES.padding,
                borderRadius: 25,
                backgroundColor: COLORS.lightGreen2,
                alignItems: 'center',
            }}>

                <TextInput
                    placeholder={' enter your city, state or zipcode'}
                    placeholderTextColor={COLORS.lightGray2}
                    style={{
                        flex: 1,
                        height: 50,
                        color: COLORS.black,
                        ...FONTS.body3,
                    }}/>

                <Image
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.lightGray2,
                    }}
                    source={icons.search}/>

            </View>
        );
    }

    function renderLocationList() {
        return (

            <FlatList
                style={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.radius,
                }}
                data={dummyData.locations}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                keyboardDismissMode={'on-drag'}
                renderItem={({item}) =>
                    <TouchableOpacity
                        style={{
                            marginBottom: SIZES.radius,
                            borderRadius: SIZES.radius * 2,
                            paddingHorizontal: SIZES.padding,
                            paddingVertical: SIZES.radius,
                            backgroundColor: appTheme.cardBackgroundColor,
                        }}
                        onPress={() => {
                            navigation.navigate('Order', {selectedLocation: item});
                        }}
                    >

                        {/*Name  and Bookmark*/}


                        <View style={{flexDirection: 'row'}}>

                            <Text
                                style={{
                                    flex: 1,
                                    color: appTheme.textColor,
                                    ...FONTS.h2,
                                }}>{item.title}</Text>

                            <Image

                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: item.bookmark ? COLORS.red2 : COLORS.white,


                                }}
                                source={item.bookmarked ? icons.bookmarkFilled : icons.bookmark}/>


                        </View>


                        {/*Address*/}

                        <View style={{
                            marginTop: SIZES.base,
                            width: '100%',
                        }}>

                            <Text
                                style={{
                                    color: appTheme.textColor,
                                    ...FONTS.body3,
                                    lineHeight: 21,
                                }}>{item.address}</Text>

                        </View>


                        {/*Operation hours*/}


                        <View style={{
                            marginTop: SIZES.base,
                        }}>

                            <Text
                                style={{
                                    color: appTheme.textColor,
                                    ...FONTS.body5,
                                    lineHeight: 16,
                                }}>{item.operation_hours}</Text>

                        </View>

                        {/*Services*/}
                        <View style={{
                            flexDirection: 'row',
                            marginTop: SIZES.base,
                        }}>

                            {/*pickUp*/}

                            <View style={{
                                borderRadius: 20,
                                borderColor: appTheme.textColor,
                                borderWidth: 1,
                                paddingHorizontal: SIZES.radius,
                                paddingVertical: 5,
                            }}>

                                <Text style={{
                                    color: appTheme.textColor,
                                    ...FONTS.body3,
                                }}>PIck Up</Text>

                            </View>

                            {/*delivery*/}
                            <View style={{
                                borderRadius: 20,
                                borderColor: appTheme.textColor,
                                borderWidth: 1,
                                paddingHorizontal: SIZES.radius,
                                paddingVertical: 5,
                                marginLeft: 5,
                            }}>

                                <Text style={{
                                    color: appTheme.textColor,
                                    ...FONTS.body3,
                                }}>Delivery</Text>

                            </View>

                        </View>


                    </TouchableOpacity>
                }


            />
        );
    }

    return (
        <View style={styles.container}>

            {/*Header*/}
            {renderHeader()}

            {/*Details*/}
            <View style={{
                flex: 1,
                marginTop: -20,
                borderTopLeftRadius: SIZES.radius * 2,
                borderTopRightRadius: SIZES.radius * 2,
                padding: SIZES.padding,
                backgroundColor: appTheme.backgroundColor,
            }}>


                {/*topBAr*/}
                {renderTopBarSection()}

                {/*searchBar*/}
                {renderSearchBar()}


                {renderLocationList()}


            </View>

        </View>
    );
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


export default connect(mapStateToProps, mapDispatchToProps)(Location);
