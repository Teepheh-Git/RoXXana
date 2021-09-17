import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    safeAreaView: {
        height: 200,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
    },
    navBarView: {
        flexDirection: 'row',
        paddingHorizontal: SIZES.radius,
        alignItems: 'center',
    },
    navBarView2: {
        flex: 1,
        alignItems: 'center',
    },
    navBarText: {
        color: COLORS.white, ...FONTS.h1, fontSize: 25,

    },
    locationView: {
        marginTop: SIZES.radius,
        backgroundColor: COLORS.white1,
        paddingVertical: 5,
        borderRadius: SIZES.padding,
        paddingHorizontal: SIZES.radius,
    },
    locationText: {
        color: COLORS.primary, ...FONTS.body3,

    },
    detailsView: {
        flex: 1,
        marginTop: -45,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    tabBarView: {
        flexDirection: 'row',
        marginTop: SIZES.radius,
        height: 50,
        justifyContent: 'center',
        paddingLeft: SIZES.padding * 2,
        paddingRight: SIZES.padding,
    },
    tabButtonView: {
        flex: 1,
        flexDirection: 'row',
    },
    indexNumberView: {
        width: 35,
        height: 35,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
    },
    indexNumberText: {
        color: COLORS.white,
        ...FONTS.h3,
    },
    sideBarViewContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    sideBarView: {
        marginTop: -10,
        width: 65,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,

    },
    touchableWithoutFeedback: {
        height: 150,
        paddingHorizontal: SIZES.padding,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    thumbnail: {
        position: 'absolute',
        top: 0,
        left: SIZES.padding,
        width: 130,
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightPrimary,
        zIndex: 1,
    },
    thumbnailDetails: {
        width: '70%',
        height: '85%',
        paddingLeft: '22%',
        paddingRight: SIZES.base,
        borderRadius: SIZES.radius,
        justifyContent: 'space-between',
        backgroundColor: COLORS.primary,
    },
    thumbnailName: {
        color: COLORS.white,
        ...FONTS.h2,
        fontSize: 18,
        lineHeight: 25,
    },
    thumbnailPrice: {
        color: COLORS.lightPrimary,
        ...FONTS.h2,
        fontSize: 18,
    },


});


export default styles;
