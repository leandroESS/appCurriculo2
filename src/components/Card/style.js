import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    card: {
        width: '60%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#939393',
        padding: 10,
        backgroundColor: '#FFF'
    },
    card_container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'red',
        marginTop: 20,
    },
    card_content: {
        marginTop: 10,
        color: '#939393'
    },
    card_content_text: {
        color: '#939393',
        marginBottom: 10,
    }
})

export default style;