import { StyleSheet, View } from "react-native";
import { Link, useRouter } from 'expo-router';
import { Text } from "@/src/components/Text";
import { Container } from "@/src/components/Container";
import { Button } from "@/src/components/Button";

export default function Home() {
  const { navigate  } = useRouter();
  return (
    <Container>
      <View style={styles.container}>
        <Text variant="title">Home</Text>
        <Link
          style={{ marginTop: 10 }}
          href={{
            pathname: '/details/[id]',
            params: { id: '15fcfcd0-8cf5-436b-a635-7c38b4b0b5ee' }
          }}
        >
          <Text variant="link">15fcfcd0-8cf5-436b-a635-7c38b4b0b5ee</Text>
        </Link>
      </View>
      <Button iconName="check-circle" onPress={() => navigate("/request")}>
        Fazer Solicitação
      </Button>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
