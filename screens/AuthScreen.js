import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageContainer from '../components/PageContainer';

const AuthScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <Text>Hello</Text>
      </PageContainer>
    </SafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
