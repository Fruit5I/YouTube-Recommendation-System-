// Part 1: Import the libraries
import * as React from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Alert,
  StyleSheet,
  TextInput,
} from 'react-native';
// Part 2: define the component
export default function App() {
  const [currentValue, onChangeTextFunction] = React.useState('');

  const [word, onChangeWord] = React.useState('');
  const displayText = (text) => onChangeWord(text);


  return (
    <SafeAreaView style={myStyle.container}>
    
      <View style={myStyle.rectangle} />

      <Text> What youtube Video are you going to watch today??</Text>

      <Text> {word} </Text>
      
      <View style={{ height: 50 }} />

      <Button

        onPress={() => displayText('https://youtu.be/V-_O7nl0Ii0?t=18')}
        title="recommend for me"
        color="green"
      />

    </SafeAreaView>
  );
}
// Part 3: define style
const myStyle = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#B34FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangle: {
    height: 100,
    width: 200,
    color: '',
  },
});
