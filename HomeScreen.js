import * as React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#CDFF82',
            alignItems: 'center',
            justifyContent: 'center',
          }}>          <TouchableHighlight
            style={{
              margin: 20,
              width: 200,
              height: 45,
              backgroundColor: 'green',
              padding: 4,
              alignItems: 'center',
            }}
            onPress={() => {
              this.props.navigation.navigate('Recommendation');
            }}>
            <Text style={{ color: 'white', fontSize: 25 }}>Recommendation</Text>
          </TouchableHighlight>
          <View>
            <Text>Watch a random video a day keeps the doctor away!</Text>
          </View>
        </View>
        </View>
    );
  }
}

