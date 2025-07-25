import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
  height?: number;
  backgroundColor?: string;
  progressColor?: string;
  duration?: number;
  onCancel?: () => void;
}

export default function ProgressBar({
  currentQuestion,
  totalQuestions,
  height = 8,
  progressColor = '#05B0FF',
  duration = 300,
  onCancel,
}: ProgressBarProps) {
  const progress = useSharedValue(0);

  // Update progress when currentQuestion changes
  React.useEffect(() => {
    const newProgress = totalQuestions > 0 ? (currentQuestion + 1) / totalQuestions : 0;
    progress.value = withTiming(newProgress, { duration });
  }, [currentQuestion, totalQuestions, duration]);

  const animatedStyle = useAnimatedStyle(() => {
    const width = interpolate(progress.value, [0, 1], [0, 100]);
    return {
      width: `${width}%`,
    };
  });

  const circleAnimatedStyle = useAnimatedStyle(() => {
    const rotation = interpolate(progress.value, [0, 1], [0, 360]);
    return {
      transform: [{ rotate: `${rotation}deg` }],
    };
  });

  const percentageText = useAnimatedStyle(() => {
    const percentage = interpolate(progress.value, [0, 1], [0, 100]);
    return {
      opacity: 1,
    };
  });

  return (
    <View style={[styles.container, { height }]}>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={onCancel}
      >
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[
            styles.progress,
            { backgroundColor: progressColor },
            animatedStyle,
          ]}
        />
      </View>

      <View style={styles.progressCircleContainer}>
        <View style={styles.circleContainer}>
          <View style={styles.circleBackground}>
            <Animated.View
              style={[
                styles.circleProgress,
                { borderColor: progressColor },
                circleAnimatedStyle,
              ]}
            />
          </View>
        </View>
        <Animated.Text style={[styles.percentageText, percentageText]}>
          {currentQuestion + 1 + "/" + totalQuestions}
        </Animated.Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    overflow: 'hidden',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  progress: {
    height: '100%',
    borderRadius: 4,
  },
  progressBarContainer: {
    height: '100%',
    borderRadius: 4,
    flex: 8,
    marginHorizontal: 10,
    paddingRight: 10,
  },
  progressCircleContainer: {
    height: '100%',
    borderRadius: 4,
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  circleContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleBackground: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  circleProgress: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 15,
    borderWidth: 4,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    transform: [{ rotate: '-90deg' }],
  },
  percentageText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#05B0FF',
  },
  cancelButton: {
    justifyContent: 'center',
  },
  cancelText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#05B0FF',
  },
});
