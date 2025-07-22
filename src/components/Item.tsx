import { View, Text, StyleSheet } from 'react-native';

export default function Item() {
  return (
    <View style={styles.container}>
      <Text>Item</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7FB',
    borderRadius: 20,
    height: 50,
    width: 200,
    padding: 10,
    borderWidth: 3,
    borderColor: '#E6E6E6',
  },
});
