import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const API_URL = 'http://192.168.0.101:5000'; // replace with your PC's IP

export default function App() {
  const [studentId, setStudentId] = useState('');

  // <-- Add your handleLogin function here
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/attendance/mark`, {
        studentId: studentId,
      });
      Alert.alert('Success', response.data.message);
    } catch (error) {
      console.log(error.response?.data || error.message);
      Alert.alert('Error', error.response?.data?.message || 'Could not mark attendance.');
    }
  };

  // This is your UI
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Attendance</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Student ID"
        value={studentId}
        onChangeText={setStudentId}
      />
      {/* Use handleLogin as onPress */}
      <Button title="Mark Attendance" onPress={handleLogin} />
    </View>
  );
}

// Add styles at the bottom
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
});

