import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Switch, FlatList, PermissionsAndroid, ActivityIndicator, Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Feather from "react-native-feather1s"
import { useSelector, useDispatch } from 'react-redux'
import { BleManager } from 'react-native-ble-plx'

import styles from './styles'

export default function Bluetooth() {
    const [isEnable, setIsEnable] = useState(false)
    const [isScanning, setIsScanning] = useState(false)
    const [deviceList, setDeviceList] = useState([])
    const [connectedDevice, setConnectedDevice] = useState({})
    const [isConnected, setIsConnected] = useState(false)

    const bluetoothInfo = useSelector(state => state.btState)
    const dispatch = useDispatch()

    const manager = new BleManager

    const navigation = useNavigation()

    function navigateToConnection() {
        navigation.navigate('Connection')
    }

    function navigateToRecipe() {
        statusBT(isConnected)
        navigation.navigate('Recipe')
    }

    async function verifyStatus() {
        const result = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
        if (!result) {
            await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
        }
        const status = await manager.state()
        if (status === 'PoweredOn') setIsEnable(true)
        if (status === 'PoweredOff') setIsEnable(false)
    }

    async function toogleStatus() {
        try {
            if (isEnable) {
                await manager.disable()
                setIsScanning(false)
                setIsEnable(false)
                setIsConnected(false)
            }
            else {
                await manager.enable()
                setIsEnable(true)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    async function startScanDevices() {
        setIsScanning(true)

        let list = deviceList.slice()

        manager.startDeviceScan(null, null, (err, device) => {
            if (err) return

            const hasID = list.some(elem => elem.id == device.id)

            if (!hasID) {
                list.push(device)
                setDeviceList(list)
            }
        })

    }

    async function stopScanDevices() {
        setIsScanning(false)
        manager.stopDeviceScan()
    }


    async function connect(device) {

        await device.connect()

        setIsConnected(true)

        setDeviceID(device.id)

        await device.discoverAllServicesAndCharacteristics()
        const services = await device.services()

        services.forEach(async (srv) => {
            if (srv.uuid.startsWith('c00fa')) {
                const customService = srv.uuid

                setServiceID(customService)

                console.log(customService)

                const characteristics = await device.characteristicsForService(customService)

                characteristics.forEach(chrt => {
                    if (chrt.uuid.startsWith('c00fa')) {
                        const customCharacteristic = chrt.uuid

                        setCharacteristicID(customCharacteristic)

                        console.log(customCharacteristic)

                        setConnectedDevice(device)
                    }
                })
            }
        });

    }

    async function disconnect() {
        try {
            const device = connectedDevice
            await device.cancelConnection()
            setIsConnected(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        verifyStatus()
    })

    function setCharacteristicID(value) {
        dispatch({
            type: 'BT_CHARACTERISTIC_ID',
            characteristicID: value
        })
    }

    function setServiceID(value) {
        dispatch({
            type: 'BT_SERVICE_ID',
            serviceID: value
        })
    }

    function setDeviceID(value) {
        dispatch({
            type: 'BT_DEVICE_ID',
            deviceID: value
        })
    }

    function statusBT(value) {
        dispatch({
            type: 'BT_ISCONNECTED',
            btIsConnected: value
        })
    }


    return (
        <View style={isScanning ? styles.opacityContainer : styles.container}>
            <Modal
                visible={isScanning}
                transparent={true}
                animationType="fade"
            >
                <View style={styles.loadingContainer}>
                    <ActivityIndicator
                        size={80}
                        color='#e28282'
                        marginBottom={20}
                    />
                    <TouchableOpacity
                        onPress={stopScanDevices}
                        style={styles.action}
                    >
                        <Text style={styles.actionText}>Parar busca</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <View style={styles.header}>
                <View style={styles.return}>
                    <TouchableOpacity
                        style={{ marginRight: 5 }}
                        onPress={isConnected ? disconnect : navigateToConnection}
                    >
                        <Feather name="arrow-left" size={28} color='#FFA707' />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Bluetooth</Text>
                </View>
                <Switch onValueChange={toogleStatus} value={isEnable} />
            </View>

            {!isConnected ? (
                <View>
                    <TouchableOpacity
                        onPress={startScanDevices}
                        disabled={!isEnable}
                        style={isEnable ? styles.action : styles.actionDisabled}
                    >
                        <Text style={styles.actionText}>Buscar dispositivos</Text>
                    </TouchableOpacity>



                    {isEnable && (
                        <View>
                            <Text style={styles.title}>Dispositivos encontrados :</Text>
                            <FlatList
                                data={deviceList}
                                keyExtractor={fDevice => String(fDevice.id)}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item: fDevice }) => (
                                    <TouchableOpacity
                                        onPress={() => connect(fDevice)}
                                        style={styles.actionDevice}
                                    >
                                        <Feather name="bluetooth" size={22} color='#FFA707' />
                                        <Text style={styles.deviceText}>{fDevice.name ? fDevice.name : 'Sem nome'}</Text>
                                        <Feather name="link" size={22} color='#FFA707' />
                                    </TouchableOpacity>
                                )}
                            />
                        </View>)}


                </View>
            ) : (
                    <View>
                        <TouchableOpacity
                            onPress={navigateToRecipe}
                            style={styles.action}
                        >
                            <Text style={styles.actionText}>Ir Para receitas</Text>
                        </TouchableOpacity>
                        <Text style={styles.title}>Dispositivo conectado:</Text>
                        <TouchableOpacity
                            onPress={disconnect}
                            style={styles.actionDevice}
                        >
                            <Feather name="bluetooth" size={22} color='#FFA707' />
                            <Text style={styles.deviceText}>{connectedDevice.name}</Text>
                            <Feather name="x-circle" size={22} color='#FFA707' />
                        </TouchableOpacity>
                        <View style={styles.detailContainer}>
                            <Text><Text style={styles.featured}>ID do Serviço : </Text> {bluetoothInfo.serviceID}</Text>
                            <Text><Text style={styles.featured}>ID da Característica : </Text> {bluetoothInfo.characteristicID}</Text>
                            <Text><Text style={styles.featured}>ID do Dispositivo : </Text> {bluetoothInfo.deviceID}</Text>
                        </View>
                    </View>
                )}
        </View>
    )
} 