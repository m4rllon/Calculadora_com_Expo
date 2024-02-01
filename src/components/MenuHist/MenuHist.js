import React from "react";
import { FlatList, Text, View } from "react-native";

import styles from "./styles";

export default function MenuHist({listaContas, valorModo}){

    return(
        <View style={styles.content}>
            <Text onPress={() => {console.log(listaContas)}} style={ valorModo ? styles.textSubTitleClaro : styles.textSubTitleEscuro}>AS BOSTA QUE TU ESCREVEU:</Text>
            <Text style={valorModo ? styles.linhaClaro : styles.linhaEscuro}></Text>
            <FlatList 
            data={listaContas.reverse()} 
            keyExtractor={(item) => item.id} 
            renderItem={({item}) => {return(
                <View style={styles.contentFlatList}>
                    <Text style={ valorModo ? styles.textSubTitleClaro : styles.textSubTitleEscuro}>{item.conta}</Text>
                    <Text style={valorModo ? styles.linhaClaro : styles.linhaEscuro}></Text>
                </View>
            )}}/>
        </View>    
    )
}