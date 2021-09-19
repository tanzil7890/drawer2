import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

//import screens
import Contact from './screens/Contact';
import Dashboard from './screens/Dashboard';
import Messages from './screens/Messages';

const Drawer = createDrawerNavigator();

export default () => {
    return (
        <Drawer.Navigator initialRouteName="Dashboard">
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="Messages" component={Messages} />
            <Drawer.Screen name="Contact" component={Contact} />
        </Drawer.Navigator>
    )
}


