import { Text, StyleSheet } from 'react-native';
import { Draggable } from 'react-native-reanimated-dnd';

export default function Item({ id, data }: { id: string, data: any }) {

  return (
    <Draggable draggableId={id} data={data} style={styles.container}>
      <Text>{data}</Text>
    </Draggable>
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
