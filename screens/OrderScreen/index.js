import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {COLORS, dummyData, icons, SIZES} from '../../constants';
import {IconButton, TabButtons, VerticalTextButton} from '../../components';
import Svg, {Circle} from 'react-native-svg';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styles from './styles';

const OrderScreen = ({navigation, route, appTheme}) => {

    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('LipGloss');
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        let {selectedLocation} = route.params;
        setSelectedLocation(selectedLocation);
    }, []);

    useEffect(() => {
        let menuList = dummyData.menuList.filter(menuItem => menuItem.category === selectedCategory);
        setMenu(menuList);

    }, [selectedCategory]);


    return (
        <View style={styles.container}>

            {/*header*/}
            <SafeAreaView style={styles.safeAreaView}>

                {/*nav Bar*/}
                <View style={styles.navBarView}>
                    <IconButton
                        icon={icons.leftArrow}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    />

                    <View style={styles.navBarView2}>
                        <Text style={styles.navBarText}>Pick-up Order</Text>
                    </View>
                    <View style={{width: 25}}/>

                </View>


                {/*Location*/}
                <View style={styles.locationView}>
                    <Text style={styles.locationText}>{selectedLocation?.title}</Text>
                </View>
            </SafeAreaView>

            {/*Details*/}
            <View style={[styles.detailsView, {backgroundColor: appTheme.backgroundColor}]}>

                {/*tab bar*/}
                <View style={styles.tabBarView}>

                    {/*Tab Button*/}
                    <View style={styles.tabButtonView}>

                        <TabButtons
                            label={'Menu'}
                            containerStyle={{width: 60}}
                            selected={selectedTab === 0}
                            onPress={() => {
                                setSelectedTab(0);
                            }}
                        />

                        <TabButtons
                            label={'Previous'}
                            containerStyle={{width: 90}}
                            selected={selectedTab === 1}
                            onPress={() => {
                                setSelectedTab(1);
                            }}

                        />

                        <TabButtons
                            label={'Favourite'}
                            containerStyle={{width: 90}}
                            selected={selectedTab === 2}
                            onPress={() => {
                                setSelectedTab(2);
                            }}
                        />
                    </View>

                    {/*Index Number*/}
                    <View style={styles.indexNumberView}>
                        <Text style={styles.indexNumberText}>0</Text>
                    </View>
                </View>


                {/*sideBar && Listing*/}
                <View style={styles.sideBarViewContainer}>
                    {/*SideBar*/}
                    <View>
                        <Svg height={'65'} width={'65'} viewBox={'0 0 65 65'}>
                            <Circle
                                cx={5}
                                cy={60}
                                r={60}
                                fill={COLORS.primary}
                            />
                        </Svg>

                        <View style={[styles.sideBarView, {backgroundColor: COLORS.primary}]}>

                            <VerticalTextButton
                                label={'Lipstik'}
                                selected={selectedCategory === 'Lipstick'}
                                onPress={() => setSelectedCategory('Lipstick')}
                            />
                            <VerticalTextButton
                                label={'Elixir'}
                                containerStyle={{
                                    marginTop: 50,
                                }}
                                selected={selectedCategory === 'Elixir'}
                                onPress={() => setSelectedCategory('Elixir')}
                            />
                            <VerticalTextButton
                                label={'LipGloss'}
                                containerStyle={{
                                    marginTop: 70,
                                    width: 100,
                                }}
                                selected={selectedCategory === 'LipGloss'}
                                onPress={() => setSelectedCategory('LipGloss')}
                            />
                            <VerticalTextButton
                                label={'Paint'}
                                containerStyle={{
                                    marginTop: 90,
                                    width: 100,
                                }}
                                selected={selectedCategory === 'Paint'}
                                onPress={() => setSelectedCategory('Paint')}
                            />
                            <VerticalTextButton
                                label={'Brush'}
                                containerStyle={{
                                    marginTop: 80,
                                    width: 80,
                                }}
                                selected={selectedCategory === 'Brush'}
                                onPress={() => setSelectedCategory('Brush')}
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


                    {/*Listing*/}
                    <FlatList
                        contentContainerStyle={{marginTop: SIZES.padding, paddingBottom: 50}}
                        data={menu}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item, index}) => {

                            return (
                                <TouchableWithoutFeedback
                                    onPress={() => navigation.navigate('OrderDetail', {selectedItem: item})}>
                                    <View
                                        style={[styles.touchableWithoutFeedback, {marginTop: index > 0 ? SIZES.padding : 0}]}>

                                        {/*Thumbnail*/}
                                        <View style={styles.thumbnail}>
                                            <Image source={item.thumbnail}
                                                   resizeMode={'contain'}
                                                   style={{
                                                       width: 100,
                                                       height: 100,
                                                   }}
                                            />
                                        </View>

                                        {/*Details*/}
                                        <View style={styles.thumbnailDetails}>
                                            <Text style={styles.thumbnailName}>{item.name}</Text>
                                            <Text style={styles.thumbnailPrice}>{item.price}</Text>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            );

                        }}

                    />


                </View>
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


export default connect(mapStateToProps, mapDispatchToProps)(OrderScreen);
