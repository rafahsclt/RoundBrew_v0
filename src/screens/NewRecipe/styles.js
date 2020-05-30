import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 24,
        color: '#737380'
    },

    actions: {
        marginTop: 30,
    },

    action: {
        backgroundColor: '#FFA707',
        borderRadius: 8,
        height: 50,
        width: '47.5%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },

    actionDisabled: {
        backgroundColor: '#9e9e9e',
        borderRadius: 8,
        height: 50,
        width: '47.5%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },

    actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },

    return: {
        flexDirection: 'row'
    },

    content: {
        flex: 1,
        justifyContent: 'space-between'
    },

    inputView: {
        padding: 5
    },

    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },

    title: {
        fontSize: 24,
        color: '#13131a',
        fontWeight: 'bold',
        marginTop: 15
    },
    
    sliderText: {
        color: '#FFA707',
        fontSize: 40,
        paddingRight: 10
    },
    
    slider: {
        height: 40,
        width: '90%'
    },

    inputUnique: {
        marginVertical: 10
    },

    inputName: {
        width: '75%'
    },

    inputQuantity: {
        width: '20%'
    },

    inputSplit: {
        width: '47.5%'
    },

    endModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal : 24
    },

    standartAction: {
        flexDirection: 'row',
        backgroundColor: '#FFA707',
        borderRadius: 8,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },

    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export const paperTheme = {
    colors: {
        primary: '#FFA707'
    }
}