import { StyleSheet, View } from "react-native";
import { Text } from "@/src/components/Text";
import { Container } from "@/src/components/Container";

export default function Profile() {
  return (
    <Container>
      <View style={styles.container}>
        <Text variant="title">Perfil</Text>
        <Text>Perfil</Text>
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