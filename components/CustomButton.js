import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants';

const CustomButton = ({containerStyle, labelStyle, label, onPress, isPrimaryButton, isSecondaryButton}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isPrimaryButton ? COLORS.primary : COLORS.transparent,
            borderColor: isSecondaryButton ? COLORS.primary : COLORS.transparent,
            borderWidth: isSecondaryButton ? 1 : null,
            ...containerStyle,

        }}>
            <Text style={{
                color: isPrimaryButton ? COLORS.white : COLORS.primary,
                ...labelStyle,
            }}>{label}</Text>

        </TouchableOpacity>
    );
};

export default CustomButton;
