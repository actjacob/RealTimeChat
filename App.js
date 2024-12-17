import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ChatListScreen from './screens/ChatListScreen';
import ChatSettingsScreen from './screens/ChatSettingsScreen';
import SettingsScreen from './screens/SettingsScreen';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ChatList" component={ChatListScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [appIsLoaded, setAppIsLoaded] = useState(false);

  useEffect(() => {
    //useEffectin içinde direkt async kullanmamızı sevmiyor o yuzden içeride tanımlamamız gerekiyor
    const prepare = async () => {
      try {
        await Font.loadAsync({
          black: require('./assets/fonts/Roboto-Black.ttf'),
          blackItalic: require('./assets/fonts/Roboto-BlackItalic.ttf'),
          bold: require('./assets/fonts/Roboto-Bold.ttf'),
          boldItalic: require('./assets/fonts/Roboto-BoldItalic.ttf'),
          italic: require('./assets/fonts/Roboto-Italic.ttf'),
          light: require('./assets/fonts/Roboto-Light.ttf'),
          medium: require('./assets/fonts/Roboto-Medium.ttf'),
          mediumItalic: require('./assets/fonts/Roboto-MediumItalic.ttf'),
          ragular: require('./assets/fonts/Roboto-Regular.ttf'),
          thin: require('./assets/fonts/Roboto-Thin.ttf'),
          thinItalic: require('./assets/fonts/Roboto-ThinItalic.ttf'),
        });
      } catch (error) {
        console.log(error);
      } finally {
        setAppIsLoaded(true);
      }
    };

    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoaded]);
  //eger await key wordu kullancaksak function içinde async kulllanmalıyız

  if (!appIsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayout}>
      <StatusBar style="auto" />
      {/* <SafeAreaView> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={TabNavigator} />
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
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
