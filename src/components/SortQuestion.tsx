import { View, Text, StyleSheet } from 'react-native';
import Category from './Category';
import Item from './Item';
import Animated from 'react-native-reanimated';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StepOption } from '../types/steps';
import { DropProvider, Droppable } from 'react-native-reanimated-dnd';

export default function SortQuestion({ categories, options, cat1, cat2 }: { categories: string[], options: StepOption[], cat1: React.RefObject<string[]>, cat2: React.RefObject<string[]> }) {

  const handleDragStart = (data: any) => {
    // Remove item from categories if it exists
    const itemIndex1 = cat1.current.indexOf(data);
    if (itemIndex1 > -1) {
      cat1.current.splice(itemIndex1, 1);
    }

    const itemIndex2 = cat2.current.indexOf(data);
    if (itemIndex2 > -1) {
      cat2.current.splice(itemIndex2, 1);
    }
  };

  const handleDragEnd = (data: any) => {
  };

  const handleDrop1 = (data: any) => {
    console.log("data", data);
    cat1.current.push(data);
  };

  const handleDrop2 = (data: any) => {
    cat2.current.push(data);
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <DropProvider onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <View style={styles.categoryContainer}>
            <Droppable droppableId={'1'} onDrop={handleDrop1}>
              <Category category={categories[0]} />
            </Droppable>
            <Droppable droppableId={'2'} onDrop={handleDrop2}>
              <Category category={categories[1]} />
            </Droppable>
          </View>
          <Item id={'1'} data={options[0].option} />
        </DropProvider>
      </View>
    </GestureHandlerRootView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  categoryContainer: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  itemContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
