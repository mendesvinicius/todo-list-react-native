import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/Login';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { StorageManager } from '../utils/storage';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const hasEmail = !!StorageManager.getEmail();
  const initialRouteName = hasEmail ? 'Home' : 'Login';
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
