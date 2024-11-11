import { Modal, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from './Text'
import { Button } from './Button'

type AlertModalProps = {
  visible: boolean;
  title: string;
  message: string;
  textConfirmButton: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

export function Alert({ visible, title, message, textConfirmButton, onConfirm, onCancel }: AlertModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onCancel}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onCancel}
      >
        <View style={styles.container}>
          <Text style={styles.title} variant='title'>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <Button onPress={onConfirm}>
            {textConfirmButton}
          </Button>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  container: {
    width: '70%',
    padding: 20,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  title: {
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
  }
});

