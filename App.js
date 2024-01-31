import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Calculadora from './src/components/Calculadora';

import vasco from './src/assets/GBeNWY0WkAAO6e6.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imagem} source={vasco}>
        <Text style={styles.text}>CALCULADORA</Text>
      </ImageBackground>
      <Calculadora/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color:'black',
    fontWeight: 'bold',
    fontSize: 30,
    height: 100,
    paddingTop: 30,
    paddingLeft: 95,
  },
  imagem: {
    width: '100%',
    height: 100,
  }
});
