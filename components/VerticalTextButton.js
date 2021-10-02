import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
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
                color: selected ? COLORS.white : COLORS.deepPurple,
                ...FONTS.body2,
                fontSize: 20,
            }}>{label}
            </Text>
        </TouchableOpacity>
    );
};

export default VerticalTextButton;
