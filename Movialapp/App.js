import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import React,{useState,useEffect} from 'react';
// Button, TextInput, ScrollView, Dimensions -- REACT - NATIVE

export default function App() {
    const [user,setUser]= useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=> Response.json())
        .then(data=>{setUser(data), setLoading(false)})

    },[])

    if(loading){
      return <View style={styles.center}>
        <ActivityIndicator size='large' color='#0000ff'/>
        <Text> Cargando </Text>
      </View>
    }
    return(
      <View style={styles.container}>
        <FlatList
        data={user}
        renderItem={({item})=> <Text> {item.username} </Text>}
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
  center: {
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  },
});