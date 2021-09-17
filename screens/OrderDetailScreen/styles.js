import {StyleSheet} from 'react-native';

import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        paddingBottom: 150,
    },
    headerView: {
        width: '100%',
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 40,
        borderBottomLeftRadius: 100,
        backgroundColor: COLORS.primary,
    },
    headerImage: {
        width: SIZES.width * 0.7,
        height: SIZES.width * 0.7,
    },
    iconBackButton: {
        position: 'absolute',
        top: 45,
        left: 20,
        padding: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.black,
    },
    detailsView: {
        flex: 1,
        paddingHorizontal: 30,
        marginTop: SIZES.padding,
        justifyContent: 'space-between',
    },
    detailsName: {
        ...FONTS.h1,
        fontSize: 25,
    },
    detailsDescription: {
        marginTop: SIZES.base,
        ...FONTS.body3,
    },
    sizeView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.radius,
    },
    sizeLabel: {
        flex: 1,
        ...FONTS.h2,
        fontSize: 20,
    },
    brushView: {
        flex: 1,
        flexDirection: 'row',
    },
    brushOpacity: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    brushImage: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    brushPrice: {
        marginTop: 3,
        color: COLORS.white,
        ...FONTS.body3,
    },
    brushOpacity2: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    brushImage2: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    brushPrice2: {
        marginTop: 3,
        color: COLORS.white,
        ...FONTS.body3,
    },
    kitContainer: {
        flexDirection: 'row',
        marginTop: SIZES.padding,
    },
    kitView: {
        flex: 1,
        alignItems: 'center',
    },
    kitText: {
        ...FONTS.h2,
        fontSize: 20,
    },
    kitView2: {
        flexDirection: 'row',
        width: 100,
        height: 100,
        marginTop: SIZES.base,
        alignItems: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.primary,
    },
    kitLeftIconButton: {
        marginLeft: -15,
        width: 25,
        height: 25,
        borderRadius: 3,
        backgroundColor: COLORS.white,
    },
    kitLeftIconStyle: {
        width: 15,
        height: 15,
        tintColor: COLORS.black,
    },
    kitImage: {
        flex: 1,
        width: 70,
        height: 70,
        tintColor: COLORS.white,
    },
    kitRightIconButton: {
        marginRight: -15,
        width: 25,
        height: 25,
        borderRadius: 3,
        backgroundColor: COLORS.white,
    },
    kitRightIconStyle: {
        width: 15,
        height: 15,
        tintColor: COLORS.black,
    },
    cosmekitName: {
        marginTop: SIZES.base,
        color: COLORS.white,
        ...FONTS.body3,
    },
    opacityContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: SIZES.padding,
    },
    opacityText: {
        textAlign: 'center',
        ...FONTS.h2,
        fontSize: 20,
    },
    opacityView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60%',
        borderRadius: 15,
        backgroundColor: COLORS.primary,
    },
    opacityLeftIconButton: {
        marginLeft: -8,
        width: 25,
        height: 25,
        borderRadius: 3,
        backgroundColor: COLORS.white,
    },
    opacityLeftIconStyle: {
        width: 15,
        height: 15,
        tintColor: COLORS.black,
    },
    opacityBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    opacityBoxText: {
        color: COLORS.white,
        ...FONTS.h3,
    },
    opacityRightIconButton: {
        marginRight: -8,
        width: 25,
        height: 25,
        borderRadius: 3,
        backgroundColor: COLORS.white,
    },
    opacityRightIconStyle: {
        width: 15,
        height: 15,
        tintColor: COLORS.black,
    },
    authViewContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: SIZES.padding,
    },
    authText: {
        textAlign: 'center',
        ...FONTS.h2,
        fontSize: 20,
    },
    authView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60%',
        borderRadius: 15,
        backgroundColor: COLORS.primary,
    },
    authLeftIconButton: {
        marginLeft: -8,
        width: 25,
        height: 25,
        borderRadius: 3,
        backgroundColor: COLORS.white,
    },
    authLeftIconStyle: {
        width: 15,
        height: 15,
        tintColor: COLORS.black,
    },
    authBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    authBoxText: {
        color: COLORS.white,
        ...FONTS.h3,
    },
    authRightIconButton: {
        marginRight: -8,
        width: 25,
        height: 25,
        borderRadius: 3,
        backgroundColor: COLORS.white,
    },
    authRightIconStyle: {
        width: 15,
        height: 15,
        tintColor: COLORS.black,
    },
});

export default styles;
