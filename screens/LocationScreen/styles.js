import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeAreaView: {
        height: 120,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
    },
    headerView: {
        flexDirection: 'row',
        paddingHorizontal: SIZES.radius,
        alignItems: 'center',
    },
    titleView: {
        flex: 1,
        alignItems: 'center',
    },
    titleText: {
        color: COLORS.white,
        ...FONTS.h1,
        fontSize: 25,
    },
    details: {
        flex: 1,
        marginTop: -20,
        borderTopLeftRadius: SIZES.radius * 2,
        borderTopRightRadius: SIZES.radius * 2,
        padding: SIZES.padding,
    },
    searchBarView: {
        flexDirection: 'row',
        marginTop: SIZES.radius,
        height: 50,
        paddingHorizontal: SIZES.padding,
        borderRadius: 25,
        backgroundColor: COLORS.lightGreen2,
        alignItems: 'center',
    },
    searchBarTextInput: {
        flex: 1,
        height: 50,
        color: COLORS.black,
        ...FONTS.body3,
    },
    searchBarImage: {
        width: 30,
        height: 30,
        tintColor: COLORS.lightGray2,
    },
    flatList: {
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.radius,
    },
    touchableOpacity: {
        marginBottom: SIZES.radius,
        borderRadius: SIZES.radius * 2,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.radius,
    },
    nameBookmark: {
        flex: 1,
        ...FONTS.h2,
    },
    addressView: {
        marginTop: SIZES.base,
        width: '100%',
    },
    addressText: {
        ...FONTS.body3,
        lineHeight: 21,
    },
    operationHoursText: {
        ...FONTS.body5,
        lineHeight: 16,
    },
    services: {
        flexDirection: 'row',
        marginTop: SIZES.base,
    },
    pickUp: {
        borderRadius: 20,
        borderWidth: 1,
        paddingHorizontal: SIZES.radius,
        paddingVertical: 5,
    },
    delivery: {
        borderRadius: 20,
        borderWidth: 1,
        paddingHorizontal: SIZES.radius,
        paddingVertical: 5,
        marginLeft: 5,
    },
});

export default styles;
