import React, { useState } from "react";
import { View, Text } from "react-native";
import Botao from "./botao/Botao";

import styles from "./styles";
import MenuHist from "./MenuHist/MenuHist";

export default function Calculadora({valorModo, valorMenu}){
    const [numero, setNumero] = useState('')
    const [operacao, setOpercao] = useState('')
    const [listaOperacoes, setListaOperacoes] = useState([])
    const [paren, setParen] = useState(false)

    const formataConta = (numero) => {
        return {id: new Date().getTime(), conta:`${numero} = ${eval(numero)}`}
    }

    const mudaTexto = (id) => {
        if(id === 'C'){
            setNumero('')

            // setConta('')

            setParen(true)
        } else if(id === 'D'){
            if(numero !== 'Erro'){
                setNumero( prevNumero => prevNumero.replace(prevNumero[prevNumero.length-1], ''))
            }
        } else if(id === '()'){
            if(paren){
                setNumero((prevNumero) => prevNumero.concat('('))
                setParen(false)
            } else {
                setNumero((prevNumero) => prevNumero.concat(')'))
                setParen(true)
            }
        } else if(id === '='){
            try{
                setOpercao(formataConta(numero))

                setNumero(String(eval(numero)))
                
                setListaOperacoes((arr) => [...arr, formataConta(numero)])
                setParen(false)
            } catch(err) {
                setNumero('Erro')
            }
        } else{
            setNumero((prevNumero) => prevNumero.concat(id))
        }
   }

    return (
        <View>
            { valorMenu ? <MenuHist valorModo={valorModo} listaContas={listaOperacoes}/> : <View >
            <View style={styles.inputContent}>
                <Text style={valorModo ? styles.textoInputClaro : styles.textoInputEscuro}>{numero}</Text>
            </View>
            <Text style={valorModo ? styles.linhaClaro : styles.linhaEscuro}></Text>
            <View style={styles.content}>
                <Botao valorModo={valorModo} aperta={() => mudaTexto('C')} id={'C'} operador={'C'}/>
                <Botao valorModo={valorModo} aperta={() => mudaTexto('()')} id={'()'} operador={'()'}/>
                <Botao valorModo={valorModo} aperta={() => mudaTexto('%')} id={'%'} operador={'%'}/>
                <Botao valorModo={valorModo} aperta={() => mudaTexto('/')} id={'/'} operador={' /'}/>
            </View>
            <View style={styles.content}>
                <Botao valorModo={valorModo} aperta={() => mudaTexto('7')} id={'7'} operador={'7'}/>
                <Botao valorModo={valorModo} aperta={() => mudaTexto('8')} id={'8'} operador={'8'}/>
                <Botao valorModo={valorModo} aperta={() => mudaTexto('9')} id={'9'} operador={'9'}/>
                <Botao valorModo={valorModo} aperta={() => mudaTexto('*')} id={'*'} operador={'*'}/>
            </View>
            <View style={styles.content}>
                <Botao valorModo={valorModo} aperta={() => mudaTexto('4')} id={'4'} operador={'4'}/>
                <Botao valorModo={valorModo} aperta={() => mudaTexto('5')} id={'5'} operador={'5'}/>
                <Botao valorModo={valorModo} aperta={() => mudaTexto('6')} id={'6'} operador={'6'}/>
                <Botao valorModo={valorModo} aperta={() => mudaTexto('-')} id={'-'} operador={' -'}/>
            </View>
            <View style={styles.content}>
                <Botao valorModo={valorModo} aperta={() => mudaTexto('1')} id={'1'} operador={'1'}/>
                <Botao valorModo={valorModo} aperta={() => mudaTexto('2')} id={'2'} operador={'2'}/>
                <Botao valorModo={valorModo} aperta={() => mudaTexto('3')} id={'3'} operador={'3'}/>
                <Botao valorModo={valorModo} aperta={() => mudaTexto('+')} id={'+'} operador={'+'}/>
            </View>
            <View style={styles.content}>
                <Botao valorModo={valorModo} aperta={() => mudaTexto('D')} id={'D'} operador={'D'}/>
                <Botao valorModo={valorModo} aperta={() => mudaTexto('0')} id={'0'} operador={'0'}/>
                <Botao valorModo={valorModo} aperta={() => mudaTexto('.')} id={'.'} operador={' .'}/>
                <Botao valorModo={valorModo} aperta={() => mudaTexto('=')} id={'='} operador={'='}/>
            </View>
        </View>}
        </View>
        
    )
}
