import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

import relogio from '../../assets/relogio.png'
import calc from '../../assets/calculadora.png'
import modoEscuro from '../../assets/lua-crescente.png'
import modoClaro from '../../assets/sol.png'

export default function Header({alterarModo, valorModo, alteraMenu, valorMenu = true}){
    return(
        <View style={styles.content}>
            <Text
            style={valorModo ? styles.textClaro : styles.textEscuro}>Calculadora</Text>
            <View style={styles.contentShield}>
                <TouchableOpacity onPress={alteraMenu}>
                    <Image  
                    style={styles.icone} 
                    source={valorMenu ? relogio : calc}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={alterarModo}>
                    <Image
                    style={styles.icone}
                    source={valorModo ? modoEscuro : modoClaro}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}