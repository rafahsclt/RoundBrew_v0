import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
        justifyContent: 'space-between'
    },

    opacityContainer: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
        opacity: 0.5
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

    return: {
        flexDirection: 'row'
    },

    inputName: {
        width: '100%'
    },

    action: {
        backgroundColor: '#FFA707',
        borderRadius: 8,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    actionDisabled: {
        marginTop: 20,
        backgroundColor: '#9e9e9e',
        borderRadius: 8,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },

    content: {
        marginTop: 30
    },
    
    row: {
        marginVertical: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    sendTitle: {
        fontSize: 16,
        fontStyle: 'italic'
    },

    footer: {
       marginBottom: 15
    }
})

export const paperTheme = {
    colors: {
        primary: '#FFA707'
    }
}