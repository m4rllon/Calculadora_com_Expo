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
    textoInputEscuro: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    textoInputClaro: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
    },
    linhaEscuro: {
        marginLeft: 20,
        width: '90%',
        borderBottomColor: 'white',
        borderBottomWidth: 0.5

    },
    linhaClaro: {
        marginLeft: 20,
        width: '90%',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5

    },
    content: {
        width: '90%',
        flexDirection: 'row',
        marginTop:40,
        marginLeft:25,
        gap: 40,
    },
})

export default styles