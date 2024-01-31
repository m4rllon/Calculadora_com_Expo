import React, { useState } from "react";
import { View, Text } from "react-native";
import Botao from "./botao/Botao";

import styles from "./styles";

export default function Calculadora(){
    const [numero, setNumero] = useState('')
    const [paren, setParen] = useState(false)

    const mudaTexto = (id) => {
        if(id === 'C'){
            setNumero('')
            setParen(true)
        } else if(id === 'D'){
            if(numero !== 'Erro'){
                setNumero( prevNumero => prevNumero.replace(prevNumero[prevNumero.length-1], ''))
            }
        } else if(id === '='){
            try{
                setNumero(String(eval(numero)))
                setParen(false)
            } catch(err) {
                setNumero('Erro')
            }
        } else if(id === '()'){
            if(paren){
                setNumero((prevNumero) => prevNumero.concat('('))
                setParen(false)
            } else {
                setNumero((prevNumero) => prevNumero.concat(')'))
                setParen(true)
            }
        } else{
            setNumero((prevNumero) => prevNumero.concat(id))
        }

   }

    return (
        <View >
            <View style={styles.inputContent}>
                <Text style={styles.textoInput}>{numero}</Text>
            </View>
            <Text style={styles.linha}></Text>
            <View style={styles.content}>
                <Botao aperta={() => mudaTexto('C')} id={'C'} operador={'C'}/>
                <Botao aperta={() => mudaTexto('()')} id={'()'} operador={'()'}/>
                <Botao aperta={() => mudaTexto('%')} id={'%'} operador={'%'}/>
                <Botao aperta={() => mudaTexto('/')} id={'/'} operador={' /'}/>
            </View>
            <View style={styles.content}>
                <Botao aperta={() => mudaTexto('7')} id={'7'} operador={'7'}/>
                <Botao aperta={() => mudaTexto('8')} id={'8'} operador={'8'}/>
                <Botao aperta={() => mudaTexto('9')} id={'9'} operador={'9'}/>
                <Botao aperta={() => mudaTexto('*')} id={'*'} operador={'*'}/>
            </View>
            <View style={styles.content}>
                <Botao aperta={() => mudaTexto('4')} id={'4'} operador={'4'}/>
                <Botao aperta={() => mudaTexto('5')} id={'5'} operador={'5'}/>
                <Botao aperta={() => mudaTexto('6')} id={'6'} operador={'6'}/>
                <Botao aperta={() => mudaTexto('-')} id={'-'} operador={' -'}/>
            </View>
            <View style={styles.content}>
                <Botao aperta={() => mudaTexto('1')} id={'1'} operador={'1'}/>
                <Botao aperta={() => mudaTexto('2')} id={'2'} operador={'2'}/>
                <Botao aperta={() => mudaTexto('3')} id={'3'} operador={'3'}/>
                <Botao aperta={() => mudaTexto('+')} id={'+'} operador={'+'}/>
            </View>
            <View style={styles.content}>
                <Botao aperta={() => mudaTexto('D')} id={'D'} operador={'D'}/>
                <Botao aperta={() => mudaTexto('0')} id={'0'} operador={'0'}/>
                <Botao aperta={() => mudaTexto('.')} id={'.'} operador={' .'}/>
                <Botao aperta={() => mudaTexto('=')} id={'='} operador={'='}/>
            </View>
        </View>
    )
}
