import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    content: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        gap: 65,
        position: 'fixed'
    }, 
    contentShield: {
        flexDirection: 'row',
        gap: 20,
        marginTop: 35,
    },
    textEscuro: {
        color:'white',
        fontWeight: 'bold',
        fontSize: 35,
        height: 100,
        paddingTop: 35,
        paddingLeft: 10,
      },
      textClaro: {
        color:'black',
        fontWeight: 'bold',
        fontSize: 35,
        height: 100,
        paddingTop: 35,
        paddingLeft: 10,
      },
      icone: {
        width: 50,
        height: 50,
      }
})

export default styles