import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);

  useEffect(() => {
    console.log("I'm rendering");
  }, [count]);

  const add = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // setCount(count + 1);
    // setCount(count + 1);
  };

  const minus = () => {
    setNewCount(newCount - 1);
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <StatusBar style="auto" />

        <Button title="Add" onPress={add} />

        <Text style={styles.text}> {count} </Text>

        <Button title="Minus" onPress={minus} />
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
