const Initial_State = {
    characteristicID: '',
    serviceID: '',
    deviceID: '',
    btIsConnected: ''
}

function BluetoothInfo(state = Initial_State, action){
    switch(action.type) {
    case 'BT_CHARACTERISTIC_ID':
        return {...state, characteristicID: action.characteristicID }
    case 'BT_SERVICE_ID':
        return {...state, serviceID: action.serviceID }
    case 'BT_DEVICE_ID':
        return {...state, deviceID: action.deviceID }
    case 'BT_ISCONNECTED':
        return {...state, btIsConnected: action.btIsConnected }
    default:
        return state
    }
}

export default BluetoothInfo