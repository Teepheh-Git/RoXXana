import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import themeReducer from './stores/themeReducer';

import Tabs from './navigation/tabs';
import LocationScreen from './screens/LocationScreen';
import OrderScreen from './screens/OrderScreen';
import OrderDetailScreen from './screens/OrderDetailScreen';

const Stack = createStackNavigator();

const store = createStore(
    themeReducer,
    applyMiddleware(thunk),
);

const App = () => {

    React.useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (


        <Provider store={store}>

            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName={'Index'}
                >
                    <Stack.Screen
                        name="Index"
                        component={Tabs}
                    />

                    <Stack.Screen
                        name="Location"
                        component={LocationScreen}
                    />

                    <Stack.Screen
                        name="Order"
                        component={OrderScreen}
                    />

                    <Stack.Screen
                        name="OrderDetail"
                        component={OrderDetailScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

    );
};

export default App;
