import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Text } from "@/src/components/Text";
import { Button } from "@/src/components/Button";
import { Container } from "@/src/components/Container";

export default function Request() {
  const { push } = useRouter()

  function handleClickButtom() {
    push({
      pathname: "/request/review/[data]",
      params: { 
        data: JSON.stringify({ 
          data: [{
            name: 'Doal Plastic 018', 
            amount: 4 
          }, 
          { 
            name: 'Lacre azul - Grande', 
            amount: 2 
          }]
        }, null, 2) }
    })
  } 

  return (
    <Container>
      <Text variant="title">Solicitar</Text>
      <Button
        iconName="check-circle"
        style={styles.button}
        onPress={handleClickButtom}
      >
        Revisar pedido
      </Button>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20
  }
});