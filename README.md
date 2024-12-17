React Native ve Firebase ile Real Time Chat Uygulaması
SafeArea
-expo install react-native-safe-area-context

SplashScreen
-expo install expo-splash-screen

Adding the navigation system

React Navigation(Temel Paketler)
npm install @react-navigation/native @react-navigation/native-stack

Installing dependencies into an Expo managed project
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

Note:If you are building for Android or iOS, do not skip this step, or your app my crash in production even if it works fine in development.This is not applicable to other platforms.

import "react-native-gesture-handler"(App.js)

(Not:Eğer Android ya da iOS için uygulama geliştiriyorsanız, bu adımı atlamayın. Aksi takdirde uygulamanız üretimde çökebilir, geliştirmede sorunsuz olsa bile.Yani burada, şunu eklememiz gerekiyor çünkü üretimde sorunlar çıkabilir.import "react-native-gesture-handler"(App.js))
