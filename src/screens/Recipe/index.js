import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import Feather from "react-native-feather1s"
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { BleManager } from 'react-native-ble-plx'
import firebase from 'firebase'

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Recipe() {

    const bluetoothInfo = useSelector(state => state.btState) 

    const [recipes, setRecipes] = useState([])
    const [searching, setSearching] = useState(true)

    const manager = new BleManager

    const navigation = useNavigation()

    useState(async () => {

        const dataJSON = []
        await firebase.database().ref(`recipes`).once('value').then((ctx) => {
            ctx.forEach(item => {
                dataJSON.push(item.toJSON())
            })
        })

        await setRecipes(dataJSON)

        setSearching(false)

    }, [])

    async function navigateToConnection() {
        if (bluetoothInfo.btIsConnected) await manager.cancelDeviceConnection(bluetoothInfo.deviceID)
        navigation.navigate('Connection')
    }

    function navigateToDetail(recipe) {
        navigation.navigate('Detail', { recipe })
    }

    function navigateToNewRecipe() {
        navigation.navigate('NewRecipe')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.return}>
                    <TouchableOpacity
                        style={{ marginRight: 5 }}
                        onPress={navigateToConnection}
                    >
                        <Feather name="arrow-left" size={28} color='#FFA707' />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Receitas</Text>
                </View>
                <Image source={logoImg} />
            </View>
            <View style={styles.actions}>
                <TouchableOpacity
                    style={styles.action}
                    onPress={navigateToNewRecipe}
                >
                    <Text style={styles.actionText}>Nova receita</Text>
                </TouchableOpacity>
            </View>

                {searching ?
                    <View style={styles.loadingContainer}>
                    <ActivityIndicator
                    size={80}
                    color='#e28282'
                    marginBottom={20}
                    />
                        

                    </View>
                    : (
                        <FlatList
                            data={recipes}
                            keyExtractor={recipe => recipe.beerName}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item: recipe}) => {
                                return (
                                    <View style={styles.content}>
                                        <Text style={styles.line}><Text style={styles.key}>Nome : </Text>{recipe.beerName}</Text>
                                        <Text style={styles.line}><Text style={styles.key}>Fermento : </Text>{recipe.yeast}</Text>
                                        <Text style={styles.line}><Text style={styles.key}>Quantidade de Rampas : </Text>{recipe.ramps.quantityRamps}</Text>
                                        <TouchableOpacity
                                            style={styles.detail}
                                            onPress={() => navigateToDetail(recipe)}
                                        >
                                            <Text style={styles.detailText}>Ver mais detalhes</Text>
                                            <Feather name="arrow-right" size={16} color='#FFA707' />
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}
                        />)}
        </View>
    )
}