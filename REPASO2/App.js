import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';

export default function App() {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[submit, setSubmit] = useState('');

  const Nombre = (text) => { setName(text); }
  const Email = (text) => { setEmail(text); }
  const Password = (text) => { setPassword(text); }

  const Guardar = () => { alert(`Nombre: ${name}\nEmail: ${email}\nPassword: ${password}`); }

  return (
    <ImageBackground source={require('./Elegante.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={[styles.boxContainer, styles.widthContainer]}>
            <Text style={[styles.text]}> Buscador de Peliculas{submit} </Text>
            <TextInput style={[styles.input, styles.text]} placeholder='Titulo o parte...' onChangeText={Nombre} value={name} />
            <Button title='BUSCAR' onPress={Guardar} />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 20, 
  },
  contentContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  widthContainer: {
    width: '200%',
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#CF87EA',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});
