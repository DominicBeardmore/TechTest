import { View, Text, StyleSheet } from 'react-native';

export default function Category({ category }: { category: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryText}>{category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#F7F7FB',
    borderRadius: 20,
    width: '100%',
    height: '80%',
    borderWidth: 3,
    borderColor: '#E6E6E6',
    borderStyle: 'dashed',
    marginBottom: 10,
    marginTop: 20,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',

  },
});
