import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '@screens/Home'; 
import Game from '@screens/Game';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
              name="Home" 
              component={Home} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="Game" 
              component={Game} 
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
}