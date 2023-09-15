import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import battleBrawlers from "./assets/battle-brawlers.json";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bakugan Card Browser</Text>
      <TextInput style={styles.search} placeholder="Search" />
      <ActivityIndicator size="large" color="#00ff00" />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />

      <FlatList style={styles.image_container}
        ItemT={battleBrawlers.map((cardie) => {
          const cardFileName =
            cardie["Image"] === "" ? "InvalidCard.png" : cardie["Image"];
          return (
            <CardComponent name={cardie["Card Name"]} file={cardFileName} />
          );
        })}
      />

      <StatusBar style="auto" />
    </View>
  );
}

interface CardComponentProps {
  name: string;
  file?: string;
}

const CardComponent: React.FC<CardComponentProps> = ({
  name,
  file = "InvalidCard.png",
}) => {
  return (
    <View style={styles.card}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    width: "100%",
  },
  header: {
    fontSize: "3em",
    textAlign: "center",
    backgroundColor: "purple",
  },
  search: {
    backgroundColor: "yellow",
    padding: 20,
  },
  image: {
    aspectRatio: 728 / 1024,
    width: "30%",
  },
  image_container: {
    backgroundColor: "pink",
    width: "100%",
    height: "50%",
    marginTop: 30,
    paddingTop: 20,
  },
  card: {
    flex: 1,
    backgroundColor: "orange",
    minWidth: 200,
    minHeight: 300,
    display: "flex",
    flexDirection: "column",
    marginBottom: 30,
    borderRadius: 30,
    padding: 20,
  },
});
