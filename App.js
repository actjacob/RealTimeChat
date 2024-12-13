import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Total from "./Total";

const App = () => {
  const [numSandwiches, setNumSandwiches] = useState(0);
  const [numWater, setNumWater] = useState(0);

  const sandwichPrice = 5;

  useEffect(() => {}, []);

  const addSandwiches = () => {
    setNumSandwiches((numSandwiches) => numSandwiches + 1);
  };

  const addWater = () => {
    setNumWater((numWater) => numWater + 1);
  };

  const getTotal = useCallback(() => {
    return numSandwiches * sandwichPrice;
  }, [numSandwiches]);

  // const getTotal = () => {
  //   return numSandwiches * sandwichPrice;
  // };
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <StatusBar style="auto" />
        <Text style={styles.text}> {"Sandiwches: " + numSandwiches} </Text>
        <Button title="Add Sandwiches" onPress={addSandwiches} />

        <Text style={styles.text}> {"Water: " + numWater} </Text>
        <Button title="Add Water" onPress={addWater} />

        <Total getTotal={getTotal} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#3498db",
    fontSize: 24,
    textAlign: "center",
  },
});
