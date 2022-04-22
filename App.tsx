import React from 'react';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './natigations/bottomNav';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <RecoilRoot>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="bottomNavBar">
        <Stack.Screen name="bottomNavBar" component={BottomNav} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </RecoilRoot>
  );
}


