import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS} from '../constants';

const TabButtons = ({containerStyle, label, selected, onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                alignItems: 'center',
                ...containerStyle,
            }}>


            {/*text */}
            <Text style={{
                color: selected ? COLORS.primary : COLORS.gray,
                ...FONTS.body2,
                fontSize: 18,
            }}>{label}</Text>


            {/*line*/}

            <View style={{
                marginTop: selected ? 3 : 4,
                height: selected ? 4 : 2,
                width: '100%',
                backgroundColor: selected ? COLORS.primary : COLORS.gray,
            }}/>

        </TouchableOpacity>
    );
};

export default TabButtons;
