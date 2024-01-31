import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContent: {
        width: "90%",
        height: '18%',
        // backgroundColor: 'gray',
        marginTop: 30,
        marginLeft: 20,
        padding: 10,
        justifyContent: 'center',
    },
    textoInput: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    linha: {
        marginLeft: 20,
        width: '90%',
        borderBottomColor: 'white',
        borderBottomWidth: 0.5

    },
    texto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    content: {
        width: '90%',
        flexDirection: 'row',
        marginTop:40,
        marginLeft:20,
        gap: 43.5,
    },
    botao1: {
        backgroundColor: '#005C4B',
        width: 60,
        height: 60,
        paddingLeft: 23,
        paddingTop: 16,
        borderRadius: 20,

    },
})

export default styles