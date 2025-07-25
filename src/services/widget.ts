import SharedGroupPreferences from 'react-native-shared-group-preferences';
import { WidgetData } from '../types';

const group = 'group.streak';

export const setWidgetData = async (widgetData: WidgetData) => {
  try {
    await SharedGroupPreferences.setItem('widgetKey', widgetData, group);
  } catch (error) {
    console.log({error});
  }
}

export const getWidgetData = async () => {
  return await SharedGroupPreferences.getItem('data', group);
}
