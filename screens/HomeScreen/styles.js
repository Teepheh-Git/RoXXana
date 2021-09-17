import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        marginTop: -25,
        borderTopLeftRadius: SIZES.radius * 2,
        borderTopRightRadius: SIZES.radius * 2,
    },

    // REWARD SECTION
    touchableOpacity: {
        flexDirection: 'row',
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        height: 100,
    },
    rewardCup: {
        width: 100,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.pink,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    rewardImage: {
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rewardImageView: {
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.transparentBlack,
    },
    rewardCupText: {
        color: COLORS.white, ...FONTS.h4,
    },
    rewardDetailsView: {
        flex: 1,
        marginLeft: -10,
        backgroundColor: COLORS.lightPink,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    availableRewardsView: {
        color: COLORS.primary, ...FONTS.h2,
        fontSize: 20,
    },
    availablePointsView: {
        marginTop: 5,
        padding: SIZES.base,
        borderRadius: SIZES.radius * 2,
        backgroundColor: COLORS.primary,
    },
    pointsText: {
        color: COLORS.white, ...FONTS.body3,
    },

    // PROMO SECTION
    promoSectionsView: {
        flex: 1,
        alignItems: 'center',
    },
    promoDetailsView: {
        flex: 1,
        alignItems: 'center',
        width: SIZES.width,
        paddingTop: SIZES.padding,
    },
    promoName: {
        color: COLORS.deepPink,
        ...FONTS.h1,
    },
    promoDescription: {
        marginTop: 3,
        ...FONTS.body4,
    },
    promoCalories: {
        marginTop: 3,
        ...FONTS.body4,
    },
    customButton: {
        marginTop: 10,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.base,
        borderRadius: SIZES.radius * 2,
    },

});


export default styles;
