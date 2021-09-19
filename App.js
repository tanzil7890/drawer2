import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Drawer from './Drawer';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (
    <NavigationContainer>
      <Drawer/>
      {/* <View style={styles.container}>
        <Text>We are building react navigation using </Text>
        <Text style={{fontWeight: 'bold'}}>react-navigation v5</Text>
      </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
