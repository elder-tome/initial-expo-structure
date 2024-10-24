import { View, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import { Text } from "@/src/components/ui/Text";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text variant="title">Home</Text>
      <Text>Home</Text>
      <Link 
        style={{marginTop: 10}}
        href={{
          pathname: '/details/[id]',
          params: { id: '15fcfcd0-8cf5-436b-a635-7c38b4b0b5ee' }
        }}
      >
        15fcfcd0-8cf5-436b-a635-7c38b4b0b5ee
      </Link>
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
