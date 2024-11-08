import { StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Text } from "@/src/components/Text";
import { Container } from "@/src/components/Container";

export default function Review() {
  const { data } = useLocalSearchParams()
  // JSON.parse(String(data))
  return (
    <Container>
      <View style={styles.container}>
        <Text variant="title">Revisão</Text>
        <Text>{data}</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});