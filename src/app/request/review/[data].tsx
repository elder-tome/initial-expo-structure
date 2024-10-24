import { View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Text } from "@/src/components/ui/Text";

export default function Review() {
  const { data } = useLocalSearchParams()
  // JSON.parse(String(data))
  return (
    <View style={styles.container}>
      <Text variant="title">Revisão</Text>
      <Text>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFFFFF',
    padding: 16
  },
});