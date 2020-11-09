import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import DisplayItem from '../Components/displayItem'
import Test from '../Components/test'

const Stack = createStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='DisplayItem'>
                <Stack.Screen name='DisplayItem' component={DisplayItem}/>
                <Stack.Screen name='Test' component={Test}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
