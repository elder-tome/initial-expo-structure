import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router"
import { Text } from "@/src/components/ui/Text";
import { Button } from "@/src/components/ui/Button";

export default function Request() {
  const { push } = useRouter()

  return (
    <View style={styles.container}>
      <Text variant="title">Solicitar</Text>
      <Button
        iconName="check-circle"
        style={styles.button}
        onPress={() => push({
          pathname: "/request/review/[data]",
          params: { data: JSON.stringify({ data: [{ name: 'Doal Plastic 018', amount: 4 }, { name: 'Lacre azul - Grande', amount: 2 }] }, null, 2) }
        })}
      >
        Fazer Solicitação
      </Button>
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
  button: {
    marginTop: 20
  }
});