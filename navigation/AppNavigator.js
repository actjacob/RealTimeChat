import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';

import ChatListScreen from '../screens/ChatListScreen';
import ChatSettingsScreen from '../screens/ChatSettingsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerTitle: '' }}>
      {/* Burada kök dizinde yapıyoruz başlık göstermeme işlemini */}
      <Tab.Screen
        name="ChatList"
        component={ChatListScreen}
        tav
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => {
            // return <Ionicons name="chatbubble-outline" size={24} color="black" />;
            return <Fontisto name="hipchat" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Setttings',
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="settings-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen
          name="ChatSettings"
          component={ChatSettingsScreen}
          options={{
            headerTitle: 'Settings',
            //headerBackTitle: 'Back', androidde çalışmadı ancak iOS emilatorde çalıştı
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
