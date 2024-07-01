import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground, FlatList, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const peliculas = [
  { id: '1', title: 'La Bruja' },
  { id: '2', title: 'Terrifier' },
  { id: '3', title: 'Siniestro' },
  { id: '4', title: 'La Morgue' },
  { id: '5', title: 'La Melodía del diablo' },
  { id: '6', title: 'El Conjuro 3' },
  { id: '7', title: 'Mamá' },
  { id: '8', title: 'El Exorcistas' },
  { id: '9', title: 'Un lugar en Silencio' },
  { id: '10', title: 'Eviel Dead: El Despertar' },
  { id: '11', title: 'Sonríe' },
  { id: '12', title: 'Silent Hill' },
];

export default function App() {
  const [nombre, setNombre] = useState('');
  const [FiltradoPeliculas, setFiltradoPeliculas] = useState([]);

  const Buscar = () => {
    const filtro = nombre === '' ? peliculas : peliculas.filter(movie => movie.title.toLowerCase().includes(nombre.toLowerCase()));
    filtro.length > 0 ? setFiltradoPeliculas(filtro) : Alert.alert('No se encontraron coincidencias');
    setFiltradoPeliculas(filtro);
  };

  return (
    <ImageBackground source={require('./Elegante.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.text}>Buscador de Peliculas</Text>
        <TextInput style={styles.input} placeholder='Titulo o parte...' onChangeText={setNombre} value={nombre}/>
        <Button title='BUSCAR' onPress={Buscar} />
        {FiltradoPeliculas.length > 0 && (
          <FlatList data={FiltradoPeliculas} keyExtractor={item => item.id} renderItem={({ item }) => <Text style={styles.movieItem}>{item.title}</Text>} />
        )}
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#CF87EA',
    paddingHorizontal: 10,
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  movieItem: {
    fontSize: 16,
    color: 'white',
    paddingVertical: 10,
    alignSelf: 'flex-start',
  },
});
