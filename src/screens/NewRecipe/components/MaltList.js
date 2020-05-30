import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Slider from '@react-native-community/slider'
import { TextInput } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'

import styles, { paperTheme } from '../styles'

export default function MaltList() {
    const recipe = useSelector(state => state.recipeState.malts)
    const dispatch = useDispatch()

    const [maltValue, setMaltValue] = useState(recipe.quantityMalts)

    function updateMaltValue(value) {
        setMaltValue(value)
        dispatch({
            type: 'QUANTITY_MALTS',
            quantityMalts: value
        })
    }

    function setNameMaltOne(value){
        dispatch({
            type: 'NAME_MALT_ONE',
            nameMaltOne: value
        })
    }

    function setNameMaltTwo(value){
        dispatch({
            type: 'NAME_MALT_TWO',
            nameMaltTwo: value
        })
    }

    function setNameMaltThree(value){
        dispatch({
            type: 'NAME_MALT_THREE',
            nameMaltThree: value
        })
    }

    function setNameMaltFour(value){
        dispatch({
            type: 'NAME_MALT_FOUR',
            nameMaltFour: value
        })
    }

    function setNameMaltFive(value){
        dispatch({
            type: 'NAME_MALT_FIVE',
            nameMaltFive: value
        })
    }

    function setWeightMaltOne(value){
        dispatch({
            type: 'WEIGHT_MALT_ONE',
            weightMaltOne: value
        })
    }

    function setWeightMaltTwo(value){
        dispatch({
            type: 'WEIGHT_MALT_TWO',
            weightMaltTwo: value
        })
    }

    function setWeightMaltThree(value){
        dispatch({
            type: 'WEIGHT_MALT_THREE',
            weightMaltThree: value
        })
    }

    function setWeightMaltFour(value){
        dispatch({
            type: 'WEIGHT_MALT_FOUR',
            weightMaltFour: value
        })
    }

    function setWeightMaltFive(value){
        dispatch({
            type: 'WEIGHT_MALT_FIVE',
            weightMaltFive: value
        })
    }


    return (
        <View style={styles.inputView}>
            <Text style={styles.title}>Quantidade de malte : </Text>
            <View style={styles.rowView}>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={5}
                    step={1}
                    minimumTrackTintColor="#FFA707"
                    maximumTrackTintColor="#000000"
                    value={maltValue}
                    onValueChange={val => updateMaltValue(val)}
                />
                <Text style={styles.sliderText}>{maltValue}</Text>
            </View>

            {maltValue >= 1 &&
                <View style={styles.rowView}>
                    <TextInput
                        style={styles.inputName}
                        theme={paperTheme}
                        label="Nome do malte"
                        mode='outlined'
                        onChangeText={v => setNameMaltOne(v)}
                        value={recipe.nameMaltOne}
                    />
                    <TextInput
                        style={styles.inputQuantity}
                        theme={paperTheme}
                        label="g"
                        mode='outlined'
                        onChangeText={v => setWeightMaltOne(v)}
                        value={recipe.weightMaltOne}
                    />
                </View>}

            {maltValue >= 2 &&
                <View style={styles.rowView}>
                    <TextInput
                        style={styles.inputName}
                        theme={paperTheme}
                        label="Nome do malte"
                        mode='outlined'
                        onChangeText={v => setNameMaltTwo(v)}
                        value={recipe.nameMaltTwo}
                    />
                    <TextInput
                        style={styles.inputQuantity}
                        theme={paperTheme}
                        label="g"
                        mode='outlined'
                        onChangeText={v => setWeightMaltTwo(v)}
                        value={recipe.weightMaltTwo}
                    />
                </View>}

            {maltValue >= 3 &&
                <View style={styles.rowView}>
                    <TextInput
                        style={styles.inputName}
                        theme={paperTheme}
                        label="Nome do malte"
                        mode='outlined'
                        onChangeText={v => setNameMaltThree(v)}
                        value={recipe.nameMaltThree}
                    />
                    <TextInput
                        style={styles.inputQuantity}
                        theme={paperTheme}
                        label="g"
                        mode='outlined'
                        onChangeText={v => setWeightMaltThree(v)}
                        value={recipe.weightMaltThree}
                    />
                </View>}

            {maltValue >= 4 &&
                <View style={styles.rowView}>
                    <TextInput
                        style={styles.inputName}
                        theme={paperTheme}
                        label="Nome do malte"
                        mode='outlined'
                        onChangeText={v => setNameMaltFour(v)}
                        value={recipe.nameMaltFour}
                    />
                    <TextInput
                        style={styles.inputQuantity}
                        theme={paperTheme}
                        label="g"
                        mode='outlined'
                        onChangeText={v => setWeightMaltFour(v)}
                        value={recipe.weightMaltFour}
                    />
                </View>}

            {maltValue == 5 &&
                <View style={styles.rowView}>
                    <TextInput
                        style={styles.inputName}
                        theme={paperTheme}
                        label="Nome do malte"
                        mode='outlined'
                        onChangeText={v => setNameMaltFive(v)}
                        value={recipe.nameMaltFive}
                    />
                    <TextInput
                        style={styles.inputQuantity}
                        theme={paperTheme}
                        label="g"
                        mode='outlined'
                        onChangeText={v => setWeightMaltFive(v)}
                        value={recipe.weightMaltFive}
                    />
                </View>}
        </View>
    )
}