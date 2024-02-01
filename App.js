import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Calculadora from './src/components/Calculadora';
import Header from './src/components/header/Header';

export default function App() {
  const [modo, setModo] = useState(false)

  const alterarModo = () => {
    // false = escuro
    setModo(!modo)
    console.log(modo)
  }

  return (
    <View style={modo ? styles.containerClaro : styles.containerEscuro}>
      <Header alterarModo={alterarModo} valorModo={modo}/>
      <Calculadora valorModo={modo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  containerEscuro: {
    flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  containerClaro: {
    flex: 1,
    backgroundColor: 'white',
  }
});
