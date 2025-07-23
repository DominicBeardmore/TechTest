import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useUserStore } from "../../store/user";
import { Session as SessionType } from "../../types/user";
import { router } from "expo-router";
import { createNewQuestions } from "../../services/steps";

const Session = ({ session }: { session: SessionType }) => {
  return (
    <TouchableOpacity onPress={() => router.push(`/session/${session.id}`)}>
      <Text> Session number: {session.id}</Text>
      <Text> Date: {session.startedAt}</Text>
      <Text> Score: {session.score}</Text>
      <Text> Accuracy: {session.accuracy}</Text>
      <Text> Time: {session.totalTime}</Text>
      <Text> Steps: {session.steps.length}</Text>
    </TouchableOpacity>
  );
};

export default function Sessions() {
  const { user } = useUserStore();

  const handleCreateNewSession = () => {
    createNewQuestions();
  }

  const renderSessions = () => {
    console.log(user);
    if (!user?.sessions) {
      return (
        <View>
          <Text>No active sessions</Text>
          <Text>Start a new session to get started</Text>
        </View>
      );
    } else {
      return (
        <ScrollView>
          {user.sessions.map((session) => (
            <Session key={session.id} session={session} />
          ))}
        </ScrollView>
      );
    }
  }

  return (
    <View>
      <TouchableOpacity
        onPress={handleCreateNewSession}
        style={{
          backgroundColor: '#007AFF',
          padding: 15,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#007AFF',
          marginTop: 20,
          alignItems: 'center',
          width: '100%',
          maxWidth: 300,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>
          Start a New Session
        </Text>
      </TouchableOpacity>
      {renderSessions()}
    </View>

  );
}
