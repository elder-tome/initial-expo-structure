import { Text as RNText, type TextProps as RNTextProps, StyleSheet } from 'react-native';

export type TextProps = RNTextProps & {
  variant?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle';
};

export function Text({
  style,
  variant = 'default',
  ...rest
}: TextProps) {

  return (
    <RNText
      style={[
        variant === 'default' ? styles.default : undefined,
        variant === 'title' ? styles.title : undefined,
        variant === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        variant === 'subtitle' ? styles.subtitle : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 12,
    lineHeight: 18,
  },
  defaultSemiBold: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
