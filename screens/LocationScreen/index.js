import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity, SafeAreaView, Image, FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {COLORS, dummyData, FONTS, SIZES} from '../../constants';
import {IconButton, TabButtons} from '../../components';
import icons from '../../constants/icons';
import styles from './styles';

const LocationScreen = ({navigation, appTheme}) => {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <View style={styles.container}>

            {/*Header*/}
            <SafeAreaView style={styles.safeAreaView}>

                <View style={styles.headerView}>

                    {/*Back Button*/}
                    <IconButton
                        icon={icons.leftArrow}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    />

                    {/*Title*/}
                    <View style={styles.titleView}>
                        <Text style={styles.titleText}>Locations</Text>
                    </View>

                    {/*Empty*/}
                    <View style={{width: 25}}/>
                </View>

            </SafeAreaView>
            {/*Details*/}
            <View style={[styles.details, {backgroundColor: appTheme.backgroundColor}]}>

                {/*TopBar*/}
                <View style={{flexDirection: 'row'}}>

                    {/*Nearby*/}
                    <TabButtons
                        label={'Nearby'}
                        selected={selectedTab === 0}
                        containerStyle={{
                            width: 80,
                        }}
                        onPress={() => {
                            setSelectedTab(0);
                        }}
                    />

                    {/*Previous*/}
                    <TabButtons
                        label={'Previous'}
                        selected={selectedTab === 1}
                        containerStyle={{
                            width: 100,
                        }}
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
                {/*searchBar*/}
                <View style={styles.searchBarView}>
                    <TextInput
                        placeholder={'enter your city, state or zipcode'}
                        placeholderTextColor={COLORS.lightGray2}
                        style={styles.searchBarTextInput}
                    />

                    <Image
                        style={styles.searchBarImage}
                        source={icons.search}
                    />
                </View>

                <FlatList
                    style={styles.flatList}
                    data={dummyData.locations}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    keyboardDismissMode={'on-drag'}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            style={[styles.touchableOpacity, {
                                backgroundColor: appTheme.cardBackgroundColor,
                            }]}
                            onPress={() => {
                                navigation.navigate('Order', {selectedLocation: item});
                            }}>

                            {/*Name  and Bookmark*/}
                            <View style={{flexDirection: 'row'}}>

                                <Text style={[styles.nameBookmark, {color: appTheme.textColor}]}>{item.title}</Text>

                                <Image
                                    source={item.bookmarked ? icons.bookmarkFilled : icons.bookmark}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: item.bookmark ? COLORS.red2 : COLORS.white,
                                    }}
                                />
                            </View>


                            {/*Address*/}
                            <View style={styles.addressView}>
                                <Text style={[styles.addressText, {color: appTheme.textColor}]}>{item.address}</Text>
                            </View>


                            {/*Operation hours*/}
                            <View style={{marginTop: SIZES.base}}>
                                <Text
                                    style={[styles.operationHoursText, {color: appTheme.textColor}]}>{item.operation_hours}</Text>
                            </View>

                            {/*Services*/}
                            <View style={styles.services
                            }>

                                {/*pickUp*/}

                                <View style={[styles.pickUp, {borderColor: appTheme.textColor}]}>
                                    <Text style={{
                                        color: appTheme.textColor,
                                        ...FONTS.body3,
                                    }}>PIck Up</Text>
                                </View>

                                {/*delivery*/}
                                <View style={[styles.delivery, {borderColor: appTheme.textColor}]}>
                                    <Text style={{
                                        color: appTheme.textColor,
                                        ...FONTS.body3,
                                    }}>Delivery</Text>
                                </View>
                            </View>
                        </TouchableOpacity>}
                />
            </View>
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


export default connect(mapStateToProps, mapDispatchToProps)(LocationScreen);
