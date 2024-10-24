import { View, StyleSheet } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import { Text } from "@/src/components/ui/Text";

export default function Details() {
  const { id } = useLocalSearchParams()
  return (
    <View style={styles.container}>
      <Text variant="title">Details</Text>
      <Text>{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFFFFF'
  },
});