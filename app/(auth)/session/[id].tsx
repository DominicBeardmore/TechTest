import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useRef } from 'react';
import Question from '../../../src/components/Question';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useUserStore } from '../../../src/store/user';
import { User } from '../../../src/types/user';
import Summary from '../../../src/components/Sessions/Summary';
import ProgressBar from '../../../src/components/ProgressBar';

export default function Session() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { setUser, user } = useUserStore.getState();
  const session = useUserStore(state => state.user?.sessions?.find(session => session.id === id));
  const [currentQuestion, setCurrentQuestion] = useState(session?.progress || 0);
  const sessionRef = useRef<Record<number, { timeTaken: number, correct: boolean, attempted: number }>>({});
  const sessionScoreRef = useRef(session?.score || 0);
  const sessionProgressRef = useRef(session?.progress || 0);
  const totalTime = Object.values(sessionRef.current).reduce((sum, { timeTaken }) => sum + timeTaken, 0);
  const averageTime = totalTime / (session?.progress || 0);

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    sessionProgressRef.current = currentQuestion + 1;
  }

  const saveSession = () => {
    setUser({
      ...user, sessions: user?.sessions?.map(
        s => s.id === session?.id ?
          {
            ...session,
            progress: sessionProgressRef.current,
            completed: sessionProgressRef.current === session?.steps.length,
            completedAt: new Date().toISOString(),
            totalTime, averageTime,
            score: sessionScoreRef.current
          }
          : s)
    } as User);
    router.push("../");
  }

  if (!session) {
    return <Text>Session not found</Text>;
  }

  return (
    <View style={styles.container}>
      {
        currentQuestion < session.steps.length ? (
          <View style={styles.questionContainer}>
            <ProgressBar
              currentQuestion={currentQuestion}
              totalQuestions={session.steps.length}
              height={30}
              onCancel={() => saveSession()}
            />
            <View style={styles.questionContainer}>
              <Question
                scoreRef={sessionScoreRef}
                sessionRef={sessionRef}
                question={session.steps[currentQuestion]}
                index={currentQuestion}
                onNext={() => nextQuestion()}
                onPrevious={() => setCurrentQuestion(currentQuestion - 1)}
              />
            </View>
          </View>
        ) : (
          <Summary
            score={sessionScoreRef.current}
            totalTime={totalTime}
            averageTime={averageTime}
            onSave={() => saveSession()}
          />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#FCFCFF',
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 2
  },
  questionNumberContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer: {
    flex: 10,
    backgroundColor: '#FCFCFF',
  },
});
