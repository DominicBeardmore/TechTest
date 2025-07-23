import { View, Text, Button, StyleSheet } from "react-native";

interface SummaryProps {
  score: number;
  totalTime: number;
  averageTime: number;
  onSave: () => void;
}

export default function Summary({ score, totalTime, averageTime, onSave }: SummaryProps) {
  return (
    <View style={styles.container}>
      <Text>You have completed the quiz</Text>
      <Text>Score: {score}</Text>
      <Text>Total time: {totalTime}</Text>
      <Text>Average time: {averageTime}</Text>
      <Button title="Back to sessions" onPress={onSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
