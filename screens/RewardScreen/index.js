import React from 'react';
import {
    View,
    Text,
    FlatList,
    ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import HeaderBar from '../../components/HeaderBar';
import {COLORS, dummyData, FONTS} from '../../constants';
import icons from '../../constants/icons';
import {CustomButton} from '../../components';
import styles from './styles';

const RewardScreen = ({navigation, appTheme}) => {
    return (
        <View style={styles.container}>
            {/*Header*/}
            <HeaderBar/>

            {/*details*/}
            <FlatList
                data={dummyData.availableRewards}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                style={[styles.rewardDetails, {backgroundColor: appTheme.backgroundColor}]}
                ListHeaderComponent={
                    <View>
                        {/*reward point*/}
                        <View style={styles.rewardPointsView}>

                            {/*Texts*/}
                            <Text style={styles.rewardPointsText}>Rewards</Text>
                            <Text style={[styles.rewardPointsDetailsText, {color: appTheme.textColor}]}>
                                You are 45 points away from your next reward</Text>


                            {/*Image*/}
                            <ImageBackground
                                resizeMode={'contain'}
                                source={icons.reward_cup}
                                style={styles.rewardImage}>

                                <View style={styles.rewardImageView}>
                                    <Text style={{...FONTS.h1}}>280</Text>
                                </View>
                            </ImageBackground>
                        </View>

                        {/*button*/}
                        <View style={styles.customButtonView}>

                            {/*scan button*/}
                            <CustomButton
                                isPrimaryButton
                                label={'Scan in store'}
                                containerStyle={styles.customButton}
                                labelStyle={{...FONTS.h3}}

                                onPress={() => {
                                    navigation.navigate('Location');
                                }}
                            />

                            {/*redeem button*/}
                            <CustomButton
                                isSecondaryButton
                                label={'Redeem'}
                                containerStyle={styles.customButton2}
                                labelStyle={{...FONTS.h3}}
                                onPress={() => {
                                    navigation.navigate('Location');
                                }}
                            />
                        </View>

                        {/*header label*/}
                        <View style={styles.headerLabel}>
                            <Text style={{color: appTheme.textColor, ...FONTS.h2}}>Available Rewards</Text>
                        </View>

                    </View>
                }
                ListFooterComponent={
                    <View style={{
                        marginBottom: 120,
                    }}/>
                }

                renderItem={({item}) => {
                    return (
                        <View
                            style={[styles.availableRewards, {backgroundColor: item.eligible ? COLORS.yellow : COLORS.gray2}]}>
                            <Text style={{
                                color: item.eligible ? COLORS.black : COLORS.lightGray2,
                                ...FONTS.body3,
                            }}>{item.title}</Text>
                        </View>

                    );
                }}/>
        </View>
    );
};


function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
        error: state.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(RewardScreen);
