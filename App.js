import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import themeReducer from './stores/themeReducer';

import LocationScreen from './screens/LocationScreen';
import OrderScreen from './screens/OrderScreen';
import OrderDetailScreen from './screens/OrderDetailScreen';
import HomeScreen from './screens/HomeScreen';
import RewardScreen from './screens/RewardScreen';

const Stack = createStackNavigator();

const store = createStore(
    themeReducer,
    applyMiddleware(thunk),
);

const App = () => {

    // React.useEffect(() => {
    //     SplashScreen.hide();
    // }, []);

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
                        name="Home"
                        component={HomeScreen}
                    />
                    <Stack.Screen
                        name="Reward"
                        component={RewardScreen}
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
