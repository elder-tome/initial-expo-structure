import { ReactNode, type ComponentProps } from 'react';
import { TouchableOpacity, type TouchableOpacityProps, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { Text } from './Text';

export type ButtonProps = TouchableOpacityProps & {
  iconName?: ComponentProps<typeof Feather>['name']
  children: ReactNode
};

export function Button({ style, children, iconName, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      {...rest}
    >
      { iconName && <Feather name={iconName} size={14} style={styles.icon} />}
      <Text style={styles.text} variant='textMedium'>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { 
    width: '100%',
    padding: 8,
    backgroundColor: '#2D69FA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    flexDirection: 'row',
    gap: 8
  },
  icon: {
    color: '#FFFFFF'
  },
  text: {
    color: '#FFFFFF',
  }
});
