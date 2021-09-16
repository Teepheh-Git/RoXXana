import {COLORS, constants, SIZES} from '../../constants';
import {Animated} from 'react-native';
import React, {createRef} from 'react';

export const promoTabs = constants.promoTabs.map((promoTabs) => ({
    ...promoTabs,
    ref: createRef(),
}));

const TabIndicator = ({measureLayout, scrollX}) => {
    const inputRange = promoTabs.map((_, i) => i * SIZES.width);
    const tabIndicatorWidth = scrollX.interpolate({
        inputRange,
        outputRange: measureLayout.map(measure => measure.width),
    });
    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: measureLayout.map(measure => measure.x),
    });


    return (
        <Animated.View
            style={{
                position: 'absolute',
                height: '100%',
                width: tabIndicatorWidth,
                left: 0,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary,
                transform: [{translateX}],

            }}/>


    );
};


export default TabIndicator;
