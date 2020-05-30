import React, { useState} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, Modal, Alert } from 'react-native'
import Feather from "react-native-feather1s"
import { useNavigation } from '@react-navigation/native'
import firebase from 'firebase'
import { useSelector } from "react-redux";

import logoImg from '../../assets/logo.png'
import MaltList from './components/MaltList'
import HopList from './components/HopList'
import RampList from './components/RampList'
import FirstList from './components/FirstList'

import styles from './styles'
import { ActivityIndicator } from 'react-native-paper'


export default function NewRecipe() {
    const [page, setPage] = useState(0)
    const [sendingRecipe, setSendingRecipe] = useState(false)
    const [recipeSaved, setRecipeSaved] = useState(false)

    const recipeInfo = useSelector(state => state.recipeState)

    const navigation = useNavigation()

    function navigateToRecipe() {
        navigation.navigate('Recipe')
    }

    function navigateToStart() {
        setPage(6)
        navigation.navigate('Start')
    }

    function nextPage() {
        if (page < 6) setPage(val => val + 1)
    }

    function previousPage() {
        if (page > 0) setPage(val => val - 1)
    }

    async function uploadRecipe() {
        setSendingRecipe(true)
        firebase.database().ref(`recipes/${recipeInfo.beerName}`).set(recipeInfo)
            .then(() => {
                setSendingRecipe(false)
                Alert.alert('Aviso :', ('A receita foi salva com sucesso!'))
            })
            .catch((err) => {
                Alert.alert('Aviso :', ('Não foi possível salvar a receita!'))
            })

    }

    return (
            <View style={styles.container}>
                <Modal
                    visible={page == 5}
                    transparent={false}
                    animationType="fade"
                >
                    <View style={styles.endModal}>
                        <Image source={logoImg} />
                        <TouchableOpacity
                            style={styles.standartAction}
                            disabled={sendingRecipe}
                            onPress={previousPage}
                        >
                            <Feather name="arrow-left" size={20} color='#FFF' />
                            <Text style={styles.actionText}>   Voltar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.standartAction}
                            disabled={sendingRecipe}
                            onPress={uploadRecipe}
                        >
                            <Text style={styles.actionText}>Salvar receita   </Text>
                            <Feather name="upload-cloud" size={20} color='#FFF' />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.standartAction}
                            disabled={sendingRecipe}
                            onPress={navigateToStart}
                        >
                            <Text style={styles.actionText}>Fazer receita   </Text>
                            <Feather name="check" size={20} color='#FFF' />
                        </TouchableOpacity>
                        <ActivityIndicator
                            size={80}
                            color='#e28282'
                            marginBottom={20}
                            animating={sendingRecipe}
                        />
                    </View>
                </Modal>
                <View style={styles.header}>
                    <View style={styles.return}>
                        <TouchableOpacity
                            style={{ marginRight: 5 }}
                            onPress={navigateToRecipe}
                        >
                            <Feather name="arrow-left" size={28} color='#FFA707' />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Nova receita</Text>
                    </View>
                    <Image source={logoImg} />
                </View>

                <View style={styles.content}>
                    <ScrollView >
                    {page == 0 && <FirstList />}
                    {page == 1 && <MaltList />}
                    {page == 2 && <RampList />}
                    {page == 3 && <HopList page={page} />}
                    {page == 4 && <HopList page={page} />}

                    </ScrollView>
                    <View style={styles.rowView}>
                        <TouchableOpacity
                            style={page ? styles.action : styles.actionDisabled}
                            disabled={!page}
                            onPress={previousPage}
                        >
                            <Text style={styles.actionText}>Anterior</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.action}
                            onPress={nextPage}
                        >
                            <Text style={styles.actionText}>Próximo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    )
}