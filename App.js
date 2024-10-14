import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Image } from 'react-native';
import Button from './src/components/Button';

export default function App() {

  function ImageTop() {
    return (
      <View style={styles.imageContainer}>
        <Image
          source={require('./src/img/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Image
          source={require('./src/img/wave.png')}
          style={styles.imageTop}
          resizeMode="cover"
        />
      </View>
    );
  }

  const handleLogin = () => {
    // Aquí puedes manejar el evento cuando se presiona el botón
    console.log('Login button pressed, check');
  };

  return (
    <View style={styles.mainContainer}>
      <ImageTop />
      <View style={styles.container}>
        <Text style={styles.titulo}>BIENVENIDO</Text>
        <Text style={styles.subtitulo}>Ingresa en tu cuenta</Text>
        <TextInput
          placeholder="usuario@email.com"
          style={styles.textinput}
        />
        <TextInput
          placeholder="contraseña"
          style={styles.textinput}
          secureTextEntry={true}
        />
        <Text style={styles.olvidocontra}>Olvidó su contraseña?</Text>
        <Button title="Iniciar sesión" onPress={handleLogin} />
        <Text style={styles.olvidocontra}>Aún no tienes una cuenta?</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: '40%'
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageTop: {
    width: '100%',
    height: Dimensions.get('window').height * 0.4
  },
  logo: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  titulo: {
    fontSize: 30,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 20,
    color: 'grey',
    marginBottom: 20,
  },
  textinput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',

  },
  olvidocontra: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20
  }
});
