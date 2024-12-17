import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ChatListScreen from './screens/ChatListScreen';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsLoaded, setAppIsLoaded] = useState(false);

  useEffect(() => {
    //Load Fonts
    setTimeout(() => {
      console.log('Setting App is loaded');
      setAppIsLoaded(true);
    }, 2000);
    //2000 ms = 2second
  });

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
    <SafeAreaProvider
      style={styles.container}
      onLayout={onLayout}
    >
      <StatusBar style="auto" />
      <NavigationContainer>
        <SafeAreaView>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={ChatListScreen}
            />
          </Stack.Navigator>
          <Text style={styles.text}> Hello everyone! </Text>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#3498db',
    fontSize: 24,
    textAlign: 'center',
  },
});
