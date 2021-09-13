import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';

const OrderDetail = ({navigation, route, appTheme}) => {
    return (
        <View style={styles.container}>

            {/*stopped@ 2:16:10*/}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
        error: state.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
