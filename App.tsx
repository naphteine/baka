import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [nm, setNm] = useState(0);

  const increase = () => {
    setNm(nm + 1);
  };

  const decrease = () => {
    setNm(nm - 1);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <Text>{nm}</Text>
      <TextInput style={styles.input}>Test</TextInput>
      <Button title="Increase" onPress={increase}></Button>
      <Button title="Decrease" onPress={decrease}></Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    backgroundColor: "gray",
    minWidth: 320,
    minHeight: 50,
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },
});
