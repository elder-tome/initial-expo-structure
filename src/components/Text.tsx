import { Text as RNText, type TextProps as RNTextProps, StyleSheet } from 'react-native';

export type TextProps = RNTextProps & {
  variant?: 'textDefault' | 'title' | 'textMedium' | 'textBold' | 'link';
};

export function Text({
  style,
  variant = 'textDefault',
  ...rest
}: TextProps) {

  return (
    <RNText
      style={[
        variant === 'textDefault' ? styles.textDefault : undefined,
        variant === 'textMedium' ? styles.textMedium : undefined,
        variant === 'textBold' ? styles.textBold : undefined,
        variant === 'title' ? styles.title : undefined,
        variant === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  textDefault: {
    fontSize: 12,
    lineHeight: 18,
  },
  textMedium: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  },
  textBold: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
  },
  link: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: '#2D69FA'
  },
});
