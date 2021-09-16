import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
import TabIndicator, {promoTabs} from './TabIndicator';

const HomeTabs = ({appTheme, scrollX, onPromoTabPress}) => {

    const [measureLayout, setMeasureLayout] = useState([]);
    const containerRef = useRef();

    const tabPosition = Animated.divide(scrollX, SIZES.width);


    useEffect(() => {
        let ml = [];
        promoTabs.forEach(promo => {
            promo.ref.current.measureLayout(
                containerRef.current,
                (x, y, width, height) => {
                    console.log(x, y, width, height);
                    ml.push({x, y, width, height});

                    if (ml.length === promoTabs.length) {
                        setMeasureLayout(ml);
                    }
                },
            );
        });

    }, [containerRef.current]);

    return (
        <View
            ref={containerRef}
            style={[styles.container, {backgroundColor: appTheme.tabBackgroundColor}]}>

            {/*Tab Indicator*/}
            {measureLayout.length > 0 && <TabIndicator measureLayout={measureLayout} scrollX={scrollX}/>}


            {/*Tab */}
            {promoTabs.map((item, index) => {
                const textColor = tabPosition.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [COLORS.lightGray2, COLORS.white, COLORS.lightGray2],
                    extrapolate: 'clamp',
                });

                return (
                    <TouchableOpacity
                        onPress={() => {
                            onPromoTabPress(index);
                        }}
                        key={`PromoTabs-${index}`}>

                        <View
                            ref={item.ref}
                            style={styles.textContainer}>

                            <Animated.Text style={{
                                color: textColor, ...FONTS.h3,
                            }}>{item.title}</Animated.Text>

                        </View>
                    </TouchableOpacity>
                );

            })}
        </View>
    );
};


export default HomeTabs;

const styles = StyleSheet.create({


    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZES.padding,
        borderRadius: SIZES.radius,
    },
    textContainer: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },

});

