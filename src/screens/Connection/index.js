import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Connection() {
    const navigation = useNavigation()
    
    function navigateToRecipe() {
        navigation.navigate('Recipe')
    } 

    function navigateToBluetooth() {
        navigation.navigate('Bluetooth')
    }

    function navigateToMonitor() {
        navigation.navigate('Process')
    }

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Conexões</Text>
            <Image source={logoImg} />
        </View>

        <Text style={styles.title}>Bem vindo!</Text>
        <Text style={styles.description}>Escolha o tipo de conexão :</Text>
        <View style={styles.actions}>
            <TouchableOpacity 
                style={styles.action}
                onPress={() => {}}
            >
                <Text style={styles.actionText}>WiFi</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.action}
                onPress={navigateToBluetooth}
            >
                <Text style={styles.actionText}>Bluetooth Low Energy</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.actionOff}
                onPress={navigateToRecipe}
            >
                <Text style={styles.actionOffText}>Utilizar App sem se conectar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.actionOff}
                onPress={navigateToMonitor}
            >
                <Text style={styles.actionOffText}>ir Para Tela de Monitoramento</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}