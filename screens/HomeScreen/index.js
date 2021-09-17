import React, {useCallback, useRef} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Animated,
    Image,
} from 'react-native';
import {CustomButton, HeaderBar} from '../../components';
import {COLORS, dummyData, FONTS, SIZES} from '../../constants';
import {connect} from 'react-redux';
import icons from '../../constants/icons';
import images from '../../constants/images';
import HomeTabs from './HomeTabs';
import styles from './styles';


const HomeScreen = ({navigation, appTheme}) => {


    const scrollX = React.useRef(new Animated.Value(0)).current;

    const promoScrollViewRef = useRef();

    const onPromoTabPress = useCallback(promoTabIndex => {
        promoScrollViewRef?.current?.scrollToOffset({
            offset: promoTabIndex * SIZES.width,
        });
    });


    return (
        <View style={styles.container}>
            <HeaderBar/>

            <ScrollView style={[styles.scrollView, {backgroundColor: appTheme.backgroundColor}]}
                        contentContainerStyle={{
                            paddingBottom: 150,
                        }}>

                {/*Reward section*/}
                <TouchableOpacity
                    onPress={() => navigation.navigate('Reward')}
                    style={styles.touchableOpacity}>

                    {/*Reward cup section*/}
                    <View style={styles.rewardCup}>

                        <Image
                            resizeMode={'contain'}
                            source={icons.reward_cup}
                            style={styles.rewardImage}>
                        </Image>
                    </View>


                    {/*Reward Details section*/}
                    <View style={styles.rewardDetailsView}>
                        <Text style={styles.availableRewardsView}>Eligible Rewards</Text>

                        <View style={styles.availablePointsView}>
                            <Text style={styles.pointsText}>150 points - $2.50 off</Text>
                        </View>
                    </View>
                </TouchableOpacity>


                {/*Promo section*/}
                <View style={styles.promoSectionsView}>

                    {/*Header Tabs*/}
                    <HomeTabs
                        appTheme={appTheme}
                        scrollX={scrollX}
                        onPromoTabPress={onPromoTabPress}
                    />


                    {/*Details*/}
                    <Animated.FlatList
                        ref={promoScrollViewRef}
                        data={dummyData.promos}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        keyExtractor={item => `${item.id}`}
                        snapToAlignment={'center'}
                        onScroll={Animated.event([
                            {nativeEvent: {contentOffset: {x: scrollX}}},
                        ], {useNativeDriver: false})}
                        renderItem={({item, index}) => {

                            return (
                                <View style={styles.promoDetailsView}>

                                    {/*image*/}
                                    <Image resizeMode={'contain'}
                                           source={images.strawberryBackground}
                                           style={{width: '90%', height: 250}}
                                    />

                                    {/*name*/}
                                    <Text style={styles.promoName}>{item.name}</Text>

                                    {/*description*/}
                                    <Text
                                        style={[styles.promoDescription, {color: appTheme.textColor}]}>{item.description}</Text>

                                    {/*calories*/}
                                    <Text
                                        style={[styles.promoCalories, {color: appTheme.backgroundColor}]}>{}>{item.calories}</Text>


                                    {/*button*/}
                                    <CustomButton
                                        containerStyle={styles.customButton}
                                        labelStyle={{...FONTS.h3}}
                                        isPrimaryButton
                                        label={'Order Now'}
                                        onPress={() => {
                                            navigation.navigate('Location');
                                        }}
                                    />
                                </View>
                            );
                        }}/>
                </View>
            </ScrollView>
        </View>
    );
};

export function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
        error: state.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
