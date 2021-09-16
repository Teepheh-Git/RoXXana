import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rewardDetails: {
        marginTop: -20,
        borderTopLeftRadius: SIZES.radius * 2,
        borderTopRightRadius: SIZES.radius * 2,
    },
    rewardPointsView: {
        alignItems: 'center',
        marginVertical: SIZES.padding,
    },
    rewardPointsText: {
        color: COLORS.primary,
        ...FONTS.h1,
        fontSize: 35,
    }, rewardPointsDetailsText: {
        marginTop: 10,
        width: SIZES.width * 0.6,
        textAlign: 'center',
        ...FONTS.h3,
        lineHeight: 18,
    },
    rewardImage: {
        marginTop: SIZES.padding,
        width: SIZES.width * .8,
        height: SIZES.width * .8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rewardImageView: {
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
    },
    customButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    customButton: {
        width: 130,
        marginRight: SIZES.radius,
        paddingVertical: 5,
        borderRadius: SIZES.radius * 2,
    },
    customButton2: {
        width: 130,
        paddingVertical: 5,
        borderRadius: SIZES.radius * 2,
    },
    headerLabel: {
        marginTop: SIZES.padding,
        marginBottom: SIZES.radius,
        paddingHorizontal: SIZES.padding,
    },
    availableRewards: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: SIZES.padding,
        marginBottom: SIZES.base,
        paddingVertical: SIZES.base,
        borderRadius: 20,
    },
});

export default styles;
