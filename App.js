import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Calculadora from './src/components/Calculadora';
import Header from './src/components/header/Header';

export default function App() {
  const [modo, setModo] = useState(false)
  const [menu, setMenu] = useState(false)

  const alterarModo = () => {
    // false = escuro
    setModo(!modo)
  }

  const alterarMenu = () => {
    // false = calc
    setMenu(!menu)
  }

  return (
    <View style={modo ? styles.containerClaro : styles.containerEscuro}>
      <Header 
      alterarModo={alterarModo} 
      valorModo={modo} 
      alteraMenu={alterarMenu} 
      valorMenu={menu}/>
      <Calculadora 
      valorModo={modo}
      valorMenu={menu}/>
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
    // justifyContent: 'center',
  }
});
