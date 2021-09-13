import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants';

const IconButton = ({containerStyle, iconStyle, icon, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{
            alignItems: 'center',
            justifyContent: 'center',
            ...containerStyle,
        }}>

            <Image
                source={icon}
                resizeMode="contain"
                style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.white,
                    ...iconStyle,
                }}

            />

        </TouchableOpacity>
    );
};

export default IconButton;
