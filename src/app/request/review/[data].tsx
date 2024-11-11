import { StyleSheet, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text } from "@/src/components/Text";
import { Container } from "@/src/components/Container";
import { Button } from "@/src/components/Button";
import { Alert } from "@/src/components/Alert";
import { useState } from "react";

export default function Review() {
  const { data } = useLocalSearchParams();
  const [ isVisibleAlert, setIsVisibleAlert ] = useState(false);
  const { navigate, dismiss,  } = useRouter();
  // JSON.parse(String(data));

  function handleConfirm() {
    setIsVisibleAlert(false);
    dismiss();
    navigate("/");
  };

  return (
    <Container>
      <View style={styles.container}>
        <Text variant="title">Revisão</Text>
        <Text>{data}</Text>
      </View>
      <Button iconName="check-circle" onPress={() => setIsVisibleAlert(true)}>
        Finalizar Pedido
      </Button>
      <Alert 
        visible={isVisibleAlert}
        title="Produtos solicitados"
        message="Almoxarifado estará em processo de separação de ínsumos."
        textConfirmButton="Certo, avançar"
        onConfirm={handleConfirm}
        onCancel={() => setIsVisibleAlert(false)}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});