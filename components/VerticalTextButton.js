import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {on} from 'yarn/lib/cli';
import {COLORS, FONTS} from '../constants';

const VerticalTextButton = ({containerStyle, label, selected, onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                alignItems: 'center',
                transform: [{rotate: '-90deg'}],
                ...containerStyle,
            }}
        >


            <Text style={{
                color: selected ? COLORS.white : COLORS.lightGreen,
                ...FONTS.body2,
                fontSize: 20,
            }}>{label}
            </Text>
        </TouchableOpacity>
    );
};

export default VerticalTextButton;
