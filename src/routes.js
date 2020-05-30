import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import firebase from 'firebase'
import { Provider } from 'react-redux'

const AppStack = createStackNavigator()

import Connection from './screens/Connection'
import Bluetooth from './screens/Bluetooth'
import Recipe from './screens/Recipe'
import Detail from './screens/Detail'
import NewRecipe from './screens/NewRecipe'
import Start from './screens/Start'
import Process from './screens/Process'

import store from './store'

export default function Routes() {

    useEffect(() => {
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyBDlRQxoyxD9IO0CfbaGsDq6a5QbGSpWdI",
            authDomain: "craftbeer-cb692.firebaseapp.com",
            databaseURL: "https://craftbeer-cb692.firebaseio.com",
            projectId: "craftbeer-cb692",
            storageBucket: "craftbeer-cb692.appspot.com",
            messagingSenderId: "168146200769",
            appId: "1:168146200769:web:36ecadc75f36d9c0494c40",
            measurementId: "G-6KH60PH7C9"
            };
            // Initialize Firebase
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
    }, [])

    return (
        <Provider store={store}>
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name="Connection" component={Connection} />
                <AppStack.Screen name="Recipe" component={Recipe} />
                <AppStack.Screen name="Detail" component={Detail} />
                <AppStack.Screen name="Bluetooth" component={Bluetooth} />
                <AppStack.Screen name="NewRecipe" component={NewRecipe} />
                <AppStack.Screen name="Start" component={Start} />
                <AppStack.Screen name="Process" component={Process} />
            </AppStack.Navigator>
        </NavigationContainer>
        </Provider>
    )
}