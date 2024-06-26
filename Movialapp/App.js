import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SectionList} from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>

    <SectionList style={styles.section}
      sections={[
        {title:'Grupo A',
        data:[
          {key:'1', name:'Gregorio'},
          {key:'2', name:'Gadiel'},
          {key:'3', name:'Antonio'},
          {key:'4', name:'Kevin'},
          {key:'5', name:'Ricarda'},],
        },

        {title:'Grupo B',
          data:[
            {key:'6', name:'Marta'},
            {key:'7', name:'Ana'},
            {key:'8', name:'Maria'},
            {key:'9', name:'Luis'},
            {key:'10', name:'Pedro'},],
        },

        {title:'Grupo C',
          data:[
            {key:'11', name:'Carlos'},
            {key:'12', name:'Angel'},
            {key:'13', name:'Daniel'},
            {key:'14', name:'Roberto'},
            {key:'15', name:'Rodrigo'},],
        },
      ]}

      renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
      renderSectionHeader={({section}) => <Text style={styles.section}>{section.title}</Text>}
    />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 40,
  },

  item:{
    padding: 10,
    fontSize: 24,
    height: 50,
    borderBlockEndColor:'Red',
    borderBottomWidth:1,
  },

  section:{
    fontSize:16,
    fontWeight:'bold',
    backgroundColor:'#eee',
  },

});