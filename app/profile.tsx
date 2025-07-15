import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JD</Text>
        </View>
        
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
        <Text style={styles.role}>Mobile Developer</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>42</Text>
          <Text style={styles.statLabel}>Projects</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>156</Text>
          <Text style={styles.statLabel}>Commits</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>89</Text>
          <Text style={styles.statLabel}>Stars</Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Edit Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]}>
          <Text style={styles.secondaryButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>

      <Link href="/" asChild>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back to Home</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  profileCard: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  avatarText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  role: {
    fontSize: 14,
    color: '#999',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  actionsContainer: {
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  secondaryButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    padding: 15,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
}); 