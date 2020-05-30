import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
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

    transitionSpace: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    transitionButton: {
        borderColor: '#FFA707',
        borderWidth: 2,
        borderRadius: 8,
        height: 70,
        width: '32%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    transictionText: {
        color: '#000'
    },

    selectedButton: {
        backgroundColor: '#FFA707',
        borderRadius: 8,
        height: 70,
        width: '32%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    selectedText: {
        color: '#FFF'
    },

    action: {
        backgroundColor: '#FFA707',
        borderRadius: 8,
        height: 60,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },

    actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },

    detailBlock: {
        height: 180,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        marginVertical: 10
    },

    iconBlock: {
        flex: 2,
        borderRightWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    paramsBlock: {
        flex: 6,
        padding: 20,
    },

    paramsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },

    paramsText: {
        fontSize: 16
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },


})