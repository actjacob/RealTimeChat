import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './navigation/AppNavigator';

LogBox.ignoreLogs([
   'You are initializing Firebase Auth for React Native without providing AsyncStorage',
]);

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

         <AppNavigator />
         {/* Self closing tag */}
      </SafeAreaProvider>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
});
