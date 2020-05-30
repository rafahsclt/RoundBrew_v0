import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Feather from "react-native-feather1s"
import { useSelector } from 'react-redux'
import { BleManager } from 'react-native-ble-plx'
import base64 from 'react-native-base64'

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Start() {
    const { deviceID, serviceID, characteristicID } = useSelector(state => state.btState)
    const recipe = useSelector(state => state.recipeState)

    const [setupState, setSetupState] = useState(0)
    const [startIsEnable, setStartIsEnable] = useState(false)

    const manager = new BleManager

    const navigation = useNavigation()

    function navigateToRecipe() {
        navigation.navigate('Recipe')
    }

    async function sendCommandOne() {
        const command = base64.encode(`STP1|${recipe.ramps.quantityRamps}|${recipe.hops.quantityHops}|${recipe.boilTime}`)
        await manager.writeCharacteristicWithoutResponseForDevice(deviceID, serviceID, characteristicID, command)
        setTimeout(() => monitoringSerial(), 2000)
    }

    async function sendCommandTwo() {
        manager.cancelTransaction('LISTEN')
        const command = base64.encode(`STP2|${recipe.ramps.timeRampOne}|${recipe.ramps.timeRampTwo}|${recipe.ramps.timeRampThree}|${recipe.ramps.timeRampFour}|${recipe.ramps.timeRampFive}`)
        await manager.writeCharacteristicWithoutResponseForDevice(deviceID, serviceID, characteristicID, command)
        setTimeout(() => monitoringSerial(), 2000)
    }

    async function sendCommandThree() {
        manager.cancelTransaction('LISTEN')
        const command = base64.encode(`STP3|${recipe.ramps.tempRampOne}|${recipe.ramps.tempRampTwo}|${recipe.ramps.tempRampThree}|${recipe.ramps.tempRampFour}|${recipe.ramps.tempRampFive}`)
        await manager.writeCharacteristicWithoutResponseForDevice(deviceID, serviceID, characteristicID, command)
        setTimeout(() => monitoringSerial(), 2000)
    }

    async function sendCommandFour() {
        manager.cancelTransaction('LISTEN')
        const command4 = base64.encode(`STP4|${recipe.hopstime.timeHopOne}|${recipe.hopstime.timeHopTwo}|${recipe.hopstime.timeHopThree}|${recipe.hopstime.timeHopFour}|${recipe.hopstime.timeHopFive}`)
        await manager.writeCharacteristicWithoutResponseForDevice(deviceID, serviceID, characteristicID, command4)
        setTimeout(() => monitoringSerial(), 2000)
    }

    async function monitoringSerial() {
        manager.monitorCharacteristicForDevice(deviceID, serviceID, characteristicID, (err, rxSerial) => {
                if(err){

                } else {
                    console.log(rxSerial.value)
                    const decodedMessage = base64.decode(rxSerial.value)
                    console.log(decodedMessage)
                    if (decodedMessage == 'STP1|SET') {
                        const cont = setupState + 1
                        setSetupState(cont)
                    }
                    if (decodedMessage == 'STP2|SET') {
                        const cont = setupState + 1
                        setSetupState(cont)
                    }
                    if (decodedMessage == 'STP3|SET') {
                        const cont = setupState + 1
                        setSetupState(cont)
                    }
                    if (decodedMessage == 'STP4|SET') {
                        const cont = setupState + 1
                        setSetupState(cont)
                    } 
                }
        }, 'LISTEN') 
    }

    async function navigateToProcess() {
        manager.cancelTransaction('LISTEN')
        const command = base64.encode(`MASH|START`)
        await manager.writeCharacteristicWithoutResponseForDevice(deviceID, serviceID, characteristicID, command)
        navigation.navigate('Process')
    }

    function enableToStart() {
        setStartIsEnable(true)
    }

    useEffect(() => {
        if(setupState == 0) sendCommandOne()
        else if(setupState == 1) sendCommandTwo()
        else if(setupState == 2) sendCommandThree() 
        else if(setupState == 3) sendCommandFour()
        else if(setupState == 4) enableToStart()
    }, [setupState])

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <View style={styles.return}>
                        <TouchableOpacity
                            style={{ marginRight: 5 }}
                            onPress={navigateToRecipe}
                        >
                            <Feather name="arrow-left" size={28} color='#FFA707' />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Iniciando Processo</Text>
                    </View>
                    <Image source={logoImg} />
                </View>

                <View style={styles.content}>
                    <View style={styles.row}>
                        <Text style={styles.sendTitle}>Enviando quantidades e tempos...</Text>
                        {setupState >= 1 ?
                            <Feather name="check-circle" size={28} color='#FFA707' />
                            :
                            <ActivityIndicator size={28} color='#FFA707'></ActivityIndicator>
                        }
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.sendTitle}>Enviando tempo de rampas...</Text>
                        {setupState >= 2 ?
                            <Feather name="check-circle" size={28} color='#FFA707' />
                            :
                            <ActivityIndicator size={28} color='#FFA707'></ActivityIndicator>
                        }
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.sendTitle}>Enviando temperatura de rampas...</Text>
                        {setupState >= 3?
                            <Feather name="check-circle" size={28} color='#FFA707' />
                            :
                            <ActivityIndicator size={28} color='#FFA707'></ActivityIndicator>
                        }
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.sendTitle}>Enviando tempo dos lúpulos...</Text>
                        {setupState >= 4 ?
                            <Feather name="check-circle" size={28} color='#FFA707' />
                            :
                            <ActivityIndicator size={28} color='#FFA707'></ActivityIndicator>
                        }
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity
                    style={startIsEnable ? styles.action : styles.actionDisabled}
                    onPress={navigateToProcess}
                >
                    <Text style={styles.actionText}>Começar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}