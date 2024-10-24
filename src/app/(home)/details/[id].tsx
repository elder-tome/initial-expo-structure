import { StyleSheet, View } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import { Text } from "@/src/components/ui/Text";
import { Container } from "@/src/components/ui/Container";

export default function Details() {
  const { id } = useLocalSearchParams()
  return (
    <Container>
      <View style={styles.container}>
        <Text variant="title">Details</Text>
        <Text>{id}</Text>
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