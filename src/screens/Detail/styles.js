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

    return: {
        flexDirection: 'row'
    },
    
    content: {
        marginTop: 10,
        padding: 10,
        height: '60%'
    },

    contentBox: {
        flex: 1
    },

    line: {
        fontSize: 16,
        color: '#41414d'
    },

    key: {
        fontWeight: 'bold'
    },

    action: {
        backgroundColor: '#FFA707',
        borderRadius: 8,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },

    actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
})
