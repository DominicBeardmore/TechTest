import { View, Text, StyleSheet } from 'react-native';

export default function Category({ category }: { category: string }) {
  return (
    <View style={styles.container}>
      <Text>{category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7FB',
    borderRadius: 20,
    height: '80%',
    padding: 10,
    borderWidth: 3,
    borderColor: '#E6E6E6',
    borderStyle: 'dashed',
  },
});
