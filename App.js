import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [result, setResult] = useState('');
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        const evaluatedResult = eval(input); // Use eval for simplicity (avoid in production apps)
        setResult(evaluatedResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <View style={styles.container}>
      {/* Display */}
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttons}>
        {['1', '2', '3', '+'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
        {['4', '5', '6', '-'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
        {['7', '8', '9', '*'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
        {['C', '0', '=', '/'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.button, item === '=' && styles.equalButton]}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer */}
      <Text style={styles.footer}>Calc by Jeshtha</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  display: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
    fontSize: 30,
    color: '#333',
  },
  result: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    width: '22%',
    margin: '1%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  equalButton: {
    backgroundColor: '#4CAF50', // Green background for "="
  },
  footer: {
    textAlign: 'center',
    fontSize: 16,
    padding: 10,
    color: '#555',
  },
});
