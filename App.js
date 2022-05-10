import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 2, backgroundColor: "green" }} />
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 3, backgroundColor: "blue" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
