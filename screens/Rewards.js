import React from 'react';
import {
    View,
    Text,
    StyleSheet, FlatList, ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import HeaderBar from '../components/HeaderBar';
import {COLORS, dummyData, FONTS, SIZES} from '../constants';
import icons from '../constants/icons';
import {CustomButton} from '../components';

const Rewards = ({navigation, appTheme}) => {
    function renderRewardPointSection() {
        return (
            <View style={{
                alignItems: 'center',
                marginVertical: SIZES.padding,
            }}>

                {/*Text*/}
                <Text style={{
                    color: COLORS.primary,
                    ...FONTS.h1,
                    fontSize: 35,
                }}>Rewards</Text>

                <Text style={{
                    color: appTheme.textColor,
                    marginTop: 10,
                    width: SIZES.width * 0.6,
                    textAlign: 'center',
                    ...FONTS.h3,
                    lineHeight: 18,
                }}>You are 45 points away from your next reward</Text>


                {/*Image*/}

                <ImageBackground
                    resizeMode={'contain'}
                    source={icons.reward_cup}

                    style={{
                        marginTop: SIZES.padding,
                        width: SIZES.width * .8,
                        height: SIZES.width * .8,
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>


                    <View style={{
                        width: 70,
                        height: 70,
                        borderRadius: 35,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.white,
                    }}>

                        <Text style={{
                            ...FONTS.h1,
                        }}>280</Text>

                    </View>


                </ImageBackground>


            </View>
        );
    }

    function renderButtons() {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {/*scan button*/}
                <CustomButton
                    isPrimaryButton
                    label={'Scan in store'}
                    containerStyle={{
                        width: 130,
                        marginRight: SIZES.radius,
                        paddingVertical: 5,
                        borderRadius: SIZES.radius * 2,
                    }}
                    labelStyle={{
                        ...FONTS.h3,
                    }}

                    onPress={() => {
                        navigation.navigate('Location');
                    }}
                />


                {/*redeem button*/}

                <CustomButton
                    isSecondaryButton
                    label={'Redeem'}
                    containerStyle={{
                        width: 130,
                        paddingVertical: 5,
                        borderRadius: SIZES.radius * 2,
                    }}
                    labelStyle={{
                        ...FONTS.h3,
                    }}

                    onPress={() => {
                        navigation.navigate('Location');
                    }}
                />


            </View>
        );
    }

    function renderAvailableRewardsHeader() {
        return (

            <View style={{
                marginTop: SIZES.padding,
                marginBottom: SIZES.radius,
                paddingHorizontal: SIZES.padding,
            }}>
                <Text style={{color: appTheme.textColor, ...FONTS.h2}}>Available Rewards</Text>

            </View>

        );
    }

    return (
        <View style={styles.container}>
            {/*Header*/}
            <HeaderBar/>

            {/*details*/}
            <FlatList

                style={{
                    marginTop: -20,
                    borderTopLeftRadius: SIZES.radius * 2,
                    borderTopRightRadius: SIZES.radius * 2,
                    backgroundColor: appTheme.backgroundColor,
                }}
                data={dummyData.availableRewards}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                ListHeaderComponent={
                    <View>
                        {/*reward point*/}
                        {renderRewardPointSection()}

                        {/*button*/}
                        {renderButtons()}


                        {/*header label*/}
                        {renderAvailableRewardsHeader()}


                    </View>
                }
                ListFooterComponent={
                    <View style={{
                        marginBottom: 120,
                    }}>

                    </View>

                }

                renderItem={({item}) => {
                    return (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginHorizontal: SIZES.padding,
                            marginBottom: SIZES.base,
                            paddingVertical: SIZES.base,
                            borderRadius: 20,
                            backgroundColor: item.eligible ? COLORS.yellow : COLORS.gray2,
                        }}>

                            <Text style={{
                                color: item.eligible ? COLORS.black : COLORS.lightGray2,
                                ...FONTS.body3,
                            }}>{item.title}</Text>

                        </View>

                    );


                }
                }/>

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


export default connect(mapStateToProps, mapDispatchToProps)(Rewards);
