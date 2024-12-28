import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './MainNavigator';
import AuthScreen from '../screens/AuthScreen';
import ChatScreen from '../screens/ChatScreen';

const isAuth = false;

const AppNavigator = (props) => {
   return (
      <NavigationContainer>
         {isAuth && <MainNavigator />}
         {!isAuth && <AuthScreen />}
      </NavigationContainer>
   );
};

export default AppNavigator;
