import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
// Button, TextInput, ScrollView, Dimensions -- REACT - NATIVE


export default function App() {

  return (
    <View style={styles.container}>
      <FlatList
      data={[
           {key:1, name: 'Ricardo'},
           {key:2, name: 'Edain'},
           {key:3, name: 'Pedro'},
           {key:4, name: 'Pablo'},
           {key:5, name: 'Jose'},
      ]}
      renderItem={({item})=><Text style={styles.items}> {item.name} </Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop:40,
  },
  items: {
    padding: 10,
    fontSize: 24,
    height: 50,
    borderColor: 'Red',
    borderBottomWidth: 1,
  },
});