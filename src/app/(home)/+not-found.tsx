import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import { Text } from "@/src/components/ui/Text";
import { Container } from '@/src/components/ui/Container';

export default function NotFoundScreen() {
  return (
    <Container>
      <View style={styles.container}>
        <Text variant="title">Esta tela não existe.</Text>
        <Link href="/" style={styles.link}>
          <Text variant='link'>Ir para a tela inicial!</Text>
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
  link: {
    marginTop: 8,
  },
});
