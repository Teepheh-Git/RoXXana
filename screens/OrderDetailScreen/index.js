import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import {COLORS, dummyData} from '../../constants';
import {IconButton} from '../../components';
import icons from '../../constants/icons';
import dummy from '../../constants/dummy';
import styles from './styles';

const OrderDetailScreen = ({navigation, route, appTheme}) => {

    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedSize, setSelectedSize] = useState(32);
    const [selectedCosmeKitIndex, setSelectedCosmeKitIndex] = useState(0);
    const [selectedOpacityLevel, setSelectedOpacityLevel] = useState(50);
    const [selectedAuthLevel, setSelectedAuthLevel] = useState(50);

    useEffect(() => {

        let {selectedItem} = route.params;
        setSelectedItem(selectedItem);

    }, []);


    function milkButtonHandler(action) {
        if (action === 'next' && selectedCosmeKitIndex < dummy.milkList.length - 1) {
            setSelectedCosmeKitIndex(selectedCosmeKitIndex + 1);
        } else if (action === 'prev' && selectedCosmeKitIndex > 0) {
            setSelectedCosmeKitIndex(selectedCosmeKitIndex - 1);

        }

    }

    function opacityLevelButtonHandler(action) {
        if (action === '+' && selectedOpacityLevel < 100) {
            setSelectedOpacityLevel(selectedOpacityLevel + 25);
        } else if (action === '-' && selectedOpacityLevel > 0) {
            setSelectedOpacityLevel(selectedOpacityLevel - 25);

        }

    }

    function AuthLevelButtonHandler(action) {
        if (action === '+' && selectedAuthLevel < 100) {
            setSelectedAuthLevel(selectedAuthLevel + 25);
        } else if (action === '-' && selectedAuthLevel > 0) {
            setSelectedAuthLevel(selectedAuthLevel - 25);

        }

    }


    return (
        <View style={{flex: 1, backgroundColor: appTheme.backgroundColor}}>
            <ScrollView
                contentContainerStyle={styles.scrollView}>

                {/*Header*/}
                <View style={styles.headerView}>
                    <View style={styles.header}/>
                    <Image resizeMode={'contain'}
                           source={selectedItem?.thumbnail}
                           style={styles.headerImage}
                    />

                    {/*Back Button*/}
                    <IconButton
                        icon={icons.leftArrow}
                        onPress={() => navigation.goBack()}
                        containerStyle={styles.iconBackButton
                        }
                    />
                </View>

                {/*Details*/}
                <View style={styles.detailsView}>

                    {/*Name and Desc*/}
                    <View>
                        <Text style={[styles.detailsName, {color: appTheme.headerColor}]}>{selectedItem?.name}</Text>
                        <Text
                            style={[styles.detailsDescription, {color: appTheme.textColor}]}>{selectedItem?.description}</Text>
                    </View>

                    {/*Size*/}
                    <View style={styles.sizeView}>
                        {/*Label*/}
                        <Text style={[styles.sizeLabel, {color: appTheme.headerColor}]}>Pick A Size</Text>

                        {/*brush*/}
                        <View style={styles.brushView}>
                            <TouchableOpacity
                                style={styles.brushOpacity}
                                onPress={() => setSelectedSize(20)}>

                                <ImageBackground
                                    source={icons.coffee_cup}
                                    style={styles.brushImage}
                                    imageStyle={{tintColor: selectedSize === 20 ? COLORS.primary : COLORS.gray2}}>
                                </ImageBackground>
                                <Text style={styles.brushPrice}>₦4,500</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => setSelectedSize(32)}
                                style={styles.brushOpacity2}>
                                <ImageBackground
                                    source={icons.coffee_cup}
                                    style={styles.brushImage2}
                                    imageStyle={{tintColor: selectedSize === 32 ? COLORS.primary : COLORS.gray2}}>
                                </ImageBackground>
                                <Text style={styles.brushPrice2}>₦6,999.99</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/*Kit Opacity Authenticity*/}
                    <View style={styles.kitContainer}>
                        {/*Kit*/}
                        <View style={styles.kitView}>
                            <Text style={[styles.kitText, {color: appTheme.headerColor}]}>CosmeKIt</Text>
                            <View style={styles.kitView2}>
                                <IconButton
                                    icon={icons.leftArrow}
                                    onPress={() => milkButtonHandler('prev')}
                                    containerStyle={styles.kitLeftIconButton}
                                    iconStyle={styles.kitLeftIconStyle}
                                />

                                <Image
                                    source={dummyData.milkList[selectedCosmeKitIndex].image}
                                    resizeMode={'contain'}
                                    style={styles.kitImage}
                                />

                                <IconButton
                                    icon={icons.rightArrow}
                                    onPress={() => milkButtonHandler('next')}
                                    containerStyle={styles.kitRightIconButton}
                                    iconStyle={styles.kitRightIconStyle}
                                />
                            </View>
                            <Text style={styles.cosmekitName}>{dummyData.milkList[selectedCosmeKitIndex].name}</Text>
                        </View>


                        {/*Opacity And Authenticity*/}
                        <View style={{flex: 1}}>
                            {/*Opacity*/}
                            <View style={styles.opacityContainer}>
                                <Text style={[styles.opacityText, {color: appTheme.headerColor}]}>Opacity</Text>
                                <View style={styles.opacityView}>
                                    <IconButton
                                        icon={icons.leftArrow}
                                        onPress={() => opacityLevelButtonHandler('-')}
                                        containerStyle={styles.opacityLeftIconButton}
                                        iconStyle={styles.opacityLeftIconStyle}
                                    />

                                    <View style={styles.opacityBox}>
                                        <Text style={styles.opacityBoxText}>{selectedOpacityLevel}%</Text>
                                    </View>

                                    <IconButton
                                        icon={icons.rightArrow}
                                        onPress={() => opacityLevelButtonHandler('+')}
                                        containerStyle={styles.opacityRightIconButton}
                                        iconStyle={styles.opacityRightIconStyle}
                                    />
                                </View>
                            </View>


                            {/*Authenticity*/}
                            <View style={styles.authViewContainer}>
                                <Text style={[styles.authText, {color: appTheme.headerColor}]}>Authenticity</Text>
                                <View style={styles.authView}>
                                    <IconButton
                                        icon={icons.leftArrow}
                                        onPress={() => AuthLevelButtonHandler('-')}
                                        containerStyle={styles.authLeftIconButton}
                                        iconStyle={styles.authLeftIconStyle}
                                    />

                                    <View style={styles.authBox}>
                                        <Text style={styles.authBoxText}>{selectedAuthLevel}%</Text>
                                    </View>

                                    <IconButton
                                        icon={icons.rightArrow}
                                        onPress={() => AuthLevelButtonHandler('+')}
                                        containerStyle={styles.authRightIconButton}
                                        iconStyle={styles.authRightIconStyle}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailScreen);
