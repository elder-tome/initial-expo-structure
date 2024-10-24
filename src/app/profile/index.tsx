import { View, StyleSheet } from "react-native";
import { Text } from "@/src/components/ui/Text";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text variant="title">Perfil</Text>
      <Text>Perfil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
});
