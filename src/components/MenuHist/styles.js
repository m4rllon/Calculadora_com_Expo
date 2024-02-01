import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    content: {
        // backgroundColor: 'gray',
        marginTop:30,
        alignItems:'center'
    },  
    textSubTitleClaro: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    textSubTitleEscuro: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
    },   
    contentFlatList: {
        margin:10
    },
    linhaEscuro: {
        marginLeft: 10,
        width: '90%',
        borderBottomColor: 'white',
        borderBottomWidth: 0.5

    },
    linhaClaro: {
        marginLeft: 10,
        width: '90%',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5

    },
})

export default styles