import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import Question from '../../../src/components/Question';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useUserStore } from '../../../src/store/user';
import { User } from '../../../src/types/user';
import Summary from '../../../src/components/Sessions/Summary';

export default function Session() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { setUser, user } = useUserStore.getState();
  const session = useUserStore(state => state.user?.sessions?.find(session => session.id === id));
  const [currentQuestion, setCurrentQuestion] = useState(session?.progress || 0);
  const sessionRef = useRef<Record<number, { timeTaken: number, correct: boolean, attempted: number }>>({});
  const sessionScoreRef = useRef(0);
  const totalTime = Object.values(sessionRef.current).reduce((sum, { timeTaken }) => sum + timeTaken, 0);
  const averageTime = totalTime / (session?.steps.length || 0);

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    sessionScoreRef.current += 1;
  }

  const saveSession = () => {
    console.log(sessionScoreRef.current);
    setUser({
      ...user, sessions: user?.sessions?.map(
        s => s.id === session?.id ?
          {
            ...session,
            completed: true,
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
          <View>
            <View style={styles.header}>
              <Text>Progress bar</Text>
            </View>
            <Question
              sessionRef={sessionRef}
              question={session.steps[currentQuestion]}
              index={currentQuestion}
              onNext={() => nextQuestion()}
              onPrevious={() => setCurrentQuestion(currentQuestion - 1)}
            />
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
});
