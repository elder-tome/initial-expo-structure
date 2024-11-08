import { StyleSheet, View } from "react-native";
import { Link } from 'expo-router';
import { Text } from "@/src/components/Text";
import { Container } from "@/src/components/Container";

export default function Home() {
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
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
