import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import Feather from "react-native-feather1s"
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { BleManager } from 'react-native-ble-plx'
import base64 from 'react-native-base64'

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Process() {
    const { deviceID, serviceID, characteristicID } = useSelector(state => state.btState)
    const recipe = useSelector(state => state.recipeState)

    const [receive, setReceive] = useState('')
    const [processState, setProcessState] = useState(0)
    const [selectedState, setSelectedState] = useState(0)

    const [resistanceState, setResistanceState] = useState(false)
    const [mixerState, setMixerState] = useState(false)
    const [pumpState, setPumpState] = useState(false)

    const [processTime, setProcessTime] = useState(0)
    const [actualRamp, setActualRamp] = useState(0)
    const [senseValue, setSenseValue] = useState(0)

    const manager = new BleManager

    
    function monitoringSerial() {
        manager.monitorCharacteristicForDevice(deviceID, serviceID, characteristicID, (err, rxSerial) => {
            if(err) {

            } else {
                const decodedCommand = base64.decode(rxSerial.value)
                setReceive(decodedCommand)

                const commandArray = decodedCommand.split('|')
                console.log(commandArray)

                if(commandArray[0] == "MASH" && commandArray[1] != "SET") {
                    setProcessState(0)

                    setProcessTime(Number(commandArray[1]))
                    setActualRamp(Number(commandArray[2]))
                    setSenseValue(Number(commandArray[3]))

                    commandArray[4] == "1" ? setResistanceState(true) : setResistanceState(false)
                    commandArray[5] == "1" ? setMixerState(true) : setMixerState(false)
                    commandArray[6] == "1" ? setPumpState(true) : setPumpState(false)
                    
                }
                else if (commandArray[0] == "MASH" && commandArray[1] == "SET") setProcessState(1)
                else if (commandArray[0] == "BOIL" && commandArray[1] != "SET") {
                    setProcessState(2)
                    setProcessTime(Number(commandArray[1]))

                    commandArray[2] == "1" ? setResistanceState(true) : setResistanceState(false)
                    commandArray[3] == "1" ? setMixerState(true) : setMixerState(false)
                    commandArray[4] == "1" ? setPumpState(true) : setMixerState(false)
                }
                else if (commandArray[0] == "BOIL" && commandArray[1] == "SET") setProcessState(3)
            }
        })
    }

    /*
    async function togglePump() {
        manager.cancelTransaction('LISTEN')
        if (pumpState) {
            const command = base64.encode(`CMD|PMP|OFF`)
            manager.writeCharacteristicWithoutResponseForDevice(deviceID, serviceID, characteristicID, command)
        }
        else {
            const command = base64.encode(`CMD|PMP|ON`) 
            manager.writeCharacteristicWithoutResponseForDevice(deviceID, serviceID, characteristicID, command)  
        }  

        setTimeout(() => monitoringSerial(), 2000)
    }

    async function toggleMixer() {
        manager.cancelTransaction('LISTEN')
        if (pumpState) {
            const command = base64.encode(`CMD|MIX|OFF`)
            manager.writeCharacteristicWithoutResponseForDevice(deviceID, serviceID, characteristicID, command)
        }
        else {
            const command = base64.encode(`CMD|MIX|ON`) 
            manager.writeCharacteristicWithoutResponseForDevice(deviceID, serviceID, characteristicID, command)  
        }  

        setTimeout(() => monitoringSerial(), 2000)
    }

    async function toggleResistance() {
        manager.cancelTransaction('LISTEN')
        if (pumpState) {
            const command = base64.encode(`CMD|MIX|RES`)
            manager.writeCharacteristicWithoutResponseForDevice(deviceID, serviceID, characteristicID, command)
        }
        else {
            const command = base64.encode(`CMD|RES|ON`) 
            manager.writeCharacteristicWithoutResponseForDevice(deviceID, serviceID, characteristicID, command)  
        }  

        setTimeout(() => monitoringSerial(), 2000)
    }

    function showdeatails() {
        manager.cancelTransaction('LISTEN')
        const command = base64.encode(`BOIL|START`)
        manager.writeCharacteristicWithoutResponseForDevice(deviceID, serviceID, characteristicID, command)
        setTimeout(() => monitoringSerial(), 2000)
    }
    */

    useEffect(() => {
        monitoringSerial()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {processState == 0 && <Text style={styles.headerText}>Mosturação...</Text>}
                {processState == 1 && <Text style={styles.headerText}>Aguardando...</Text>}
                {processState == 2 && <Text style={styles.headerText}>Fervura...</Text>}
                <Image source={logoImg} />
            </View>

            <View style={styles.transitionSpace}>
                <TouchableOpacity 
                    style={selectedState == 0 ? styles.selectedButton : styles.transitionButton}
                    onPress={() => setSelectedState(0)}
                >
                    <Feather name="monitor" size={22} color={selectedState == 0 ? '#FFF' : '#000'}/>
                    <Text style={selectedState == 0 ? styles.selectedText : styles.transictionText}>Processo</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={selectedState == 1 ? styles.selectedButton : styles.transitionButton}
                    onPress={() => setSelectedState(1)}
                >
                    <Feather name="terminal" size={24} color={selectedState == 1 ? '#FFF' : '#000'}/>
                    <Text style={selectedState == 1 ? styles.selectedText : styles.transictionText}>Comandos</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={selectedState == 2 ? styles.selectedButton : styles.transitionButton}
                    onPress={() => setSelectedState(2)}
                >
                    <Feather name="align-center" size={24} color={selectedState == 2 ? '#FFF' : '#000'}/>
                    <Text style={selectedState == 2 ? styles.selectedText : styles.transictionText}>Receita</Text>
                </TouchableOpacity>
            </View>

            {selectedState == 0 && 
            <View style={styles.content}>
                <View style={styles.detailBlock}>
                    <View style={styles.iconBlock}>
                        <Feather name="thermometer" size={50}/>
                    </View>
                    <View style={styles.paramsBlock}>
                        <Text style={styles.paramsTitle}>Temperatura</Text>
                        <View style={styles.row}>
                            <Text style={styles.paramsText}>Sensor : </Text>
                            <Text style={styles.paramsText}>{senseValue} ºC</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.paramsText}>Rampa : </Text>
                            <Text style={styles.paramsText}>{actualRamp} ºC</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.detailBlock}>
                    <View style={styles.iconBlock}>
                        <Feather name="clock" size={50}/>
                    </View>
                    <View style={styles.paramsBlock}>
                        <Text style={styles.paramsTitle}>Tempo</Text>
                        <View style={styles.row}>
                            <Text style={styles.paramsText}>Processo : </Text>
                            <Text style={styles.paramsText}>{processTime} s</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.paramsText}>Próxima rampa : </Text>
                            <Text style={styles.paramsText}>{processTime} s</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.detailBlock}>
                    <View style={styles.iconBlock}>
                        <Feather name="cpu" size={50}/>
                    </View>
                    <View style={styles.paramsBlock}>
                        <Text style={styles.paramsTitle}>Atuadores</Text>
                        <View style={styles.row}>
                            <Text style={styles.paramsText}>Resistência : </Text>
                            {resistanceState ? <Feather name="toggle-right" size={26} color='#00bf13'/> 
                            : <Feather name="toggle-left" size={26} color='#ed0000'/>}
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.paramsText}>Misturador : </Text>
                            {mixerState ? <Feather name="toggle-right" size={26} color='#00bf13'/> 
                            : <Feather name="toggle-left" size={26} color='#ed0000'/>}
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.paramsText}>Bomba : </Text>
                            {pumpState ? <Feather name="toggle-right" size={26} color='#00bf13'/> 
                            : <Feather name="toggle-left" size={26} color='#ed0000'/>}
                        </View>
                    </View>
                </View>

            </View>}

            {selectedState == 1 &&
            <View style={styles.content}>
                <TouchableOpacity
                    style={styles.action}
                    onPress={() => {}}
                >
                    <Text style={styles.actionText}>Desliga Bomba</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.action}
                    onPress={() => {}}
                >
                    <Text style={styles.actionText}>Desliga Misturador</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.action}
                    onPress={() => {}}
                >
                    <Text style={styles.actionText}>Desliga Resistência</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.action}
                    onPress={showdeatails}
                >
                    <Text style={styles.actionText}>Show Details</Text>
                </TouchableOpacity>
            </View>}

            {selectedState == 2 && 
            <View style={styles.content}>
                <Text>{recipe.beerName}</Text>
                <Text>Maltes</Text>
                {recipe.malts.quantityMalts == 1 && <Text>{recipe.malts.weightMaltOne}g de {recipe.malts.nameMaltOne}</Text>}
                {recipe.malts.quantityMalts == 2 && <Text>{recipe.malts.weightMaltTwo}g de {recipe.malts.nameMaltTwo}</Text>}
                {recipe.malts.quantityMalts == 3 && <Text>{recipe.malts.weightMaltThree}g de {recipe.malts.nameMaltThree}</Text>}
                {recipe.malts.quantityMalts == 4 && <Text>{recipe.malts.weightMaltFour}g de {recipe.malts.nameMaltFour}</Text>}
                {recipe.malts.quantityMalts == 5 && <Text>{recipe.malts.weightMaltFive}g de {recipe.malts.nameMaltFive}</Text>}
                <Text>Lúpulos</Text>
                {recipe.hops.quantityHops == 1 && <Text>{recipe.hops.weightHopOne}g de {recipe.hops.nameHopOne}</Text>}
                {recipe.hops.quantityHops == 2 && <Text>{recipe.hops.weightHopTwo}g de {recipe.hops.nameHopTwo}</Text>}
                {recipe.hops.quantityHops == 3 && <Text>{recipe.hops.weightHopThree}g de {recipe.hops.nameHopThree}</Text>}
                {recipe.hops.quantityHops == 4 && <Text>{recipe.hops.weightHopFour}g de {recipe.hops.nameHopFour}</Text>}
                {recipe.hops.quantityHops == 5 && <Text>{recipe.hops.weightHopFive}g de {recipe.hops.nameHopFive}</Text>}
            </View>}
        </View>
    )
}