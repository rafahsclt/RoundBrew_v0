import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import Feather from "react-native-feather1s"
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Detail({ route }) {
    const recipeonmemory = useSelector(state => state.recipeState)

    const { recipe } = route.params
    const dispatch = useDispatch()

    const navigation = useNavigation()

    function navigateToRecipe() {
        navigation.navigate('Recipe')
    }

    function dispatchToReducer() {
        dispatch({ type: 'BEER_NAME', beerName: recipe.beerName })
        dispatch({ type: 'YEAST', yeast: recipe.yeast })
        dispatch({ type: 'QUANTITY_MALTS', beerName: recipe.malts.quantityMalts })
        dispatch({ type: 'NAME_MALT_ONE', nameMaltOne: recipe.malts.nameMaltOne })
        dispatch({ type: 'NAME_MALT_TWO', nameMaltTwo: recipe.malts.nameMaltTwo })
        dispatch({ type: 'NAME_MALT_THREE', nameMaltThree: recipe.malts.nameMaltThree })
        dispatch({ type: 'NAME_MALT_FOUR', nameMaltFour: recipe.malts.nameMaltFour })
        dispatch({ type: 'NAME_MALT_FIVE', nameMaltFive: recipe.malts.nameMaltFive })
        dispatch({ type: 'WEIGHT_MALT_ONE', weightMaltOne: recipe.malts.weightMaltOne })
        dispatch({ type: 'WEIGHT_MALT_TWO', weightMaltTwo: recipe.malts.weightMaltTwo })
        dispatch({ type: 'WEIGHT_MALT_THREE', weightMaltThree: recipe.malts.weightMaltThree })
        dispatch({ type: 'WEIGHT_MALT_FOUR', weightMaltFour: recipe.malts.weightMaltFour })
        dispatch({ type: 'WEIGHT_MALT_FIVE', weightMaltFive: recipe.malts.weightMaltFive })
        dispatch({ type: 'QUANTITY_HOPS', quantityHops: recipe.hops.quantityHops })
        dispatch({ type: 'NAME_HOP_ONE', nameHopOne: recipe.hops.nameHopOne })
        dispatch({ type: 'NAME_HOP_TWO', nameHopTwo: recipe.hops.nameHopTwo })
        dispatch({ type: 'NAME_HOP_THREE', nameHopThree: recipe.hops.nameHopThree })
        dispatch({ type: 'NAME_HOP_FOUR', nameHopFour: recipe.hops.nameHopFour })
        dispatch({ type: 'NAME_HOP_FIVE', nameHopFive: recipe.hops.nameHopFive })
        dispatch({ type: 'WEIGHT_HOP_ONE', weightHopOne: recipe.hops.weightHopOne })
        dispatch({ type: 'WEIGHT_HOP_TWO', weightHopTwo: recipe.hops.weightHopTwo })
        dispatch({ type: 'WEIGHT_HOP_THREE', weightHopThree: recipe.hops.weightHopThree })
        dispatch({ type: 'WEIGHT_HOP_FOUR', weightHopFour: recipe.hops.weightHopFour })
        dispatch({ type: 'WEIGHT_HOP_FIVE', weightHopFive: recipe.hops.weightHopFive })
        dispatch({ type: 'TIME_HOP_ONE', timeHopOne: recipe.hopstime.timeHopOne })
        dispatch({ type: 'TIME_HOP_TWO', timeHopTwo: recipe.hopstime.timeHopTwo })
        dispatch({ type: 'TIME_HOP_THREE', timeHopThree: recipe.hopstime.timeHopThree })
        dispatch({ type: 'TIME_HOP_FOUR', timeHopFour: recipe.hopstime.timeHopFour })
        dispatch({ type: 'TIME_HOP_FIVE', timeHopFive: recipe.hopstime.timeHopFive })
        dispatch({ type: 'QUANTITY_RAMPS', quantityRamps: recipe.ramps.quantityRamps })
        dispatch({ type: 'TIME_RAMP_ONE', timeRampOne: recipe.ramps.timeRampOne })
        dispatch({ type: 'TIME_RAMP_TWO', timeRampTwo: recipe.ramps.timeRampTwo })
        dispatch({ type: 'TIME_RAMP_THREE', timeRampThree: recipe.ramps.timeRampThree })
        dispatch({ type: 'TIME_RAMP_FOUR', timeRampFour: recipe.ramps.timeRampFour })
        dispatch({ type: 'TIME_RAMP_FIVE', timeRampFive: recipe.ramps.timeRampFive })
        dispatch({ type: 'TEMP_RAMP_ONE', tempRampOne: recipe.ramps.tempRampOne })
        dispatch({ type: 'TEMP_RAMP_TWO', tempRampTwo: recipe.ramps.tempRampTwo })
        dispatch({ type: 'TEMP_RAMP_THREE', tempRampThree: recipe.ramps.tempRampThree })
        dispatch({ type: 'TEMP_RAMP_FOUR', tempRampFour: recipe.ramps.tempRampFour })
        dispatch({ type: 'TEMP_RAMP_FIVE', tempRampFive: recipe.ramps.tempRampFive })
        dispatch({ type: 'BOIL_TIME', boilTime: recipe.boilTime })
        dispatch({ type: 'BREW_TIME', brewTime: recipe.brewTime })
        dispatch({ type: 'MATURATION_TIME', maturationTime: recipe.maturationTime })
    }

    function navigateToStart() {
        dispatchToReducer()
        navigation.navigate('Start')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.return}>
                    <TouchableOpacity
                        style={{ marginRight: 5 }}
                        onPress={navigateToRecipe}
                    >
                        <Feather name="arrow-left" size={28} color='#FFA707' />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Detalhes</Text>
                </View>
                <Image source={logoImg} />
            </View>
            <ScrollView>
                <View styles={styles.contentBox}>
                    <View style={styles.content}>
                        <Text style={styles.line}><Text style={styles.key}>Nome :</Text> {recipe.beerName}</Text>
                        <Text style={styles.line}><Text style={styles.key}>Fermento :</Text> {recipe.yeast}</Text>

                        <Text style={styles.line}><Text style={styles.key}>Quantidade de Maltes :</Text> {recipe.malts.quantityMalts}</Text>
                        {recipe.malts.quantityMalts >= 1 && <Text style={styles.line}><Text style={styles.key}>Malte 1 :</Text> {recipe.malts.nameMaltOne}, {recipe.malts.weightMaltOne} gramas</Text>}
                        {recipe.malts.quantityMalts >= 2 && <Text style={styles.line}><Text style={styles.key}>Malte 2 :</Text> {recipe.malts.nameMaltTwo}, {recipe.malts.weightMaltTwo} gramas</Text>}
                        {recipe.malts.quantityMalts >= 3 && <Text style={styles.line}><Text style={styles.key}>Malte 3 :</Text> {recipe.malts.nameMaltThree}, {recipe.malts.weightMaltThree} gramas</Text>}
                        {recipe.malts.quantityMalts >= 4 && <Text style={styles.line}><Text style={styles.key}>Malte 4 :</Text> {recipe.malts.nameMaltFour}, {recipe.malts.weightMaltFour} gramas</Text>}
                        {recipe.malts.quantityMalts >= 5 && <Text style={styles.line}><Text style={styles.key}>Malte 5 :</Text> {recipe.malts.nameMaltFive}, {recipe.malts.weightMaltFive} gramas</Text>}

                        <Text style={styles.line}><Text style={styles.key}>Quantidade de Lúpulos :</Text> {recipe.hops.quantityHops}</Text>
                        {recipe.hops.quantityHops >= 1 && <Text style={styles.line}><Text style={styles.key}>Lúpulo 1 :</Text> {recipe.hops.nameHopOne}, {recipe.hops.weightHopOne} gramas</Text>}
                        {recipe.hops.quantityHops >= 2 && <Text style={styles.line}><Text style={styles.key}>Lúpulo 2 :</Text> {recipe.hops.nameHopTwo}, {recipe.hops.weightHopTwo} gramas</Text>}
                        {recipe.hops.quantityHops >= 3 && <Text style={styles.line}><Text style={styles.key}>Lúpulo 3 :</Text> {recipe.hops.nameHopThree}, {recipe.hops.weightHopThree} gramas</Text>}
                        {recipe.hops.quantityHops >= 4 && <Text style={styles.line}><Text style={styles.key}>Lúpulo 4 :</Text> {recipe.hops.nameHopFour}, {recipe.hops.weightHopFour} gramas</Text>}
                        {recipe.hops.quantityHops >= 5 && <Text style={styles.line}><Text style={styles.key}>Lúpulo 5 :</Text> {recipe.hops.nameHopFive}, {recipe.hops.weightHopFive} gramas</Text>}

                        <Text style={styles.line}><Text style={styles.key}>Quantidade de Rampas :</Text> {recipe.ramps.quantityRamps}</Text>
                        {recipe.ramps.quantityRamps >= 1 && <Text style={styles.line}><Text style={styles.key}>Rampa 1 :</Text> {recipe.ramps.timeRampOne} minutos a {recipe.ramps.tempRampOne}ºC</Text>}
                        {recipe.ramps.quantityRamps >= 2 && <Text style={styles.line}><Text style={styles.key}>Rampa 2 :</Text> {recipe.ramps.timeRampTwo} minutos a {recipe.ramps.tempRampTwo}ºC</Text>}
                        {recipe.ramps.quantityRamps >= 3 && <Text style={styles.line}><Text style={styles.key}>Rampa 3 :</Text> {recipe.ramps.timeRampThree} minutos a {recipe.ramps.tempRampThree}ºC</Text>}
                        {recipe.ramps.quantityRamps >= 4 && <Text style={styles.line}><Text style={styles.key}>Rampa 4 :</Text> {recipe.ramps.timeRampFour} minutos a {recipe.ramps.tempRampFour}ºC</Text>}
                        {recipe.ramps.quantityRamps >= 5 && <Text style={styles.line}><Text style={styles.key}>Rampa 5 :</Text> {recipe.ramps.timeRampFive} minutos a {recipe.ramps.tempRampFive}ºC</Text>}
                        
                        <Text style={styles.line}><Text style={styles.key}>Tempo de Fervura :</Text> {recipe.boilTime}</Text>
                        {recipe.hops.quantityHops >= 1 && <Text style={styles.line}><Text style={styles.key}>Tempo Lúpulo 1 :</Text> {recipe.hopstime.timeHopOne} minutos</Text>}
                        {recipe.hops.quantityHops >= 2 && <Text style={styles.line}><Text style={styles.key}>Tempo Lúpulo 2 :</Text> {recipe.hopstime.timeHopTwo} minutos</Text>}
                        {recipe.hops.quantityHops >= 3 && <Text style={styles.line}><Text style={styles.key}>Tempo Lúpulo 3 :</Text> {recipe.hopstime.timeHopThree} minutos</Text>}
                        {recipe.hops.quantityHops >= 4 && <Text style={styles.line}><Text style={styles.key}>Tempo Lúpulo 4 :</Text> {recipe.hopstime.timeHopFour} minutos</Text>}
                        {recipe.hops.quantityHops >= 5 && <Text style={styles.line}><Text style={styles.key}>Tempo Lúpulo 5 :</Text> {recipe.hopstime.timeHopFive} minutos</Text>}

                        <Text style={styles.line}><Text style={styles.key}>Tempo de Fermentação :</Text> {recipe.brewTime} dias</Text>
                        <Text style={styles.line}><Text style={styles.key}>Tempo de maturação :</Text> {recipe.maturationTime} dias</Text>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.action}
                onPress={navigateToStart}
            >
                <Text style={styles.actionText}>Fazer essa receita</Text>
            </TouchableOpacity>
        </View>
    )
}