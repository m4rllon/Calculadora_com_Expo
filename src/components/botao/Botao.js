import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function Botao({id, operador, aperta, valorModo}){

    return (
        <TouchableOpacity onPress={aperta} style={styles.botao1}>
        <Text id={id} style={valorModo ? styles.textoClaro : styles.textoEscuro}>
            {operador}
        </Text>
        </TouchableOpacity>
    )
}