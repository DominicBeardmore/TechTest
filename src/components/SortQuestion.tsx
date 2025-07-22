import { View, Text, StyleSheet } from 'react-native';
import Category from './Category';
import Item from './Item';
import { StepOption } from '../types/steps';
import { useState } from 'react';

export default function SortQuestion({ categories, options }: { categories: string[], options: StepOption[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <Category category={categories[0]} />
        <Category category={categories[1]} />
      </View>
      <View style={styles.itemContainer}>
        <Item />
      </View>
    </View>
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
});
