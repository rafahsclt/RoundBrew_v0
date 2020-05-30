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
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },

    actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },

    content: {
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 30
    },

    line: {
        fontSize: 14,
        color: '#41414d'
    },

    key: {
        fontWeight: 'bold'
    },

    detail: {
        marginTop: 5,
        borderTopWidth: 1,
        borderStyle: 'solid',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailText: {
        color: '#FFA707',
        fontSize: 14,
        fontWeight: 'bold'
    },

    return: {
        flexDirection: 'row'
    },
    
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})