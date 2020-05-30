import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Slider from '@react-native-community/slider'
import { TextInput } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'

import styles, { paperTheme } from '../styles'

export default function HopList({ page }) {
    const recipe = useSelector(state => state.recipeState)
    const dispatch = useDispatch()

    const [hopValue, setHopValue] = useState(recipe.hops.quantityHops)

    function updateHopValue(value) {
        setHopValue(value)
        dispatch({
            type: 'QUANTITY_HOPS',
            quantityHops: value
        })
    }

    function setBoilTime(value) {
        dispatch({
            type: 'BOIL_TIME',
            boilTime: value
        })
    }

    function setNameHopOne(value){
        dispatch({
            type: 'NAME_HOP_ONE',
            nameHopOne: value
        })
    }

    function setNameHopTwo(value){
        dispatch({
            type: 'NAME_HOP_TWO',
            nameHopTwo: value
        })
    }

    function setNameHopThree(value){
        dispatch({
            type: 'NAME_HOP_THREE',
            nameHopThree: value
        })
    }

    function setNameHopFour(value){
        dispatch({
            type: 'NAME_HOP_FOUR',
            nameHopFour: value
        })
    }

    function setNameHopFive(value){
        dispatch({
            type: 'NAME_HOP_FIVE',
            nameHopFive: value
        })
    }

    function setWeightHopOne(value){
        dispatch({
            type: 'WEIGHT_HOP_ONE',
            weightHopOne: value
        })
    }

    function setWeightHopTwo(value){
        dispatch({
            type: 'WEIGHT_HOP_TWO',
            weightHopTwo: value
        })
    }

    function setWeightHopThree(value){
        dispatch({
            type: 'WEIGHT_HOP_THREE',
            weightHopThree: value
        })
    }

    function setWeightHopFour(value){
        dispatch({
            type: 'WEIGHT_HOP_FOUR',
            weightHopFour: value
        })
    }

    function setWeightHopFive(value){
        dispatch({
            type: 'WEIGHT_HOP_FIVE',
            weightHopFive: value
        })
    }

    function setTimeHopOne(value){
        dispatch({
            type: 'TIME_HOP_ONE',
            timeHopOne: value
        })
    }

    function setTimeHopTwo(value){
        dispatch({
            type: 'TIME_HOP_TWO',
            timeHopTwo: value
        })
    }

    function setTimeHopThree(value){
        dispatch({
            type: 'TIME_HOP_THREE',
            timeHopThree: value
        })
    }

    function setTimeHopFour(value){
        dispatch({
            type: 'TIMER_HOP_FOUR',
            timerHopFour: value
        })
    }

    function setTimeHopFive(value){
        dispatch({
            type: 'TIMER_HOP_FIVE',
            timerHopFive: value
        })
    }

    return (
        <View style={styles.inputView}>
            {page == 3 ?
                <View>
                    <Text style={styles.title}>Quantidade de lúpulos : </Text>
                    <View style={styles.rowView}>
                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={5}
                            step={1}
                            minimumTrackTintColor="#FFA707"
                            maximumTrackTintColor="#000000"
                            value={hopValue}
                            onValueChange={val => updateHopValue(val)}
                        />
                        <Text style={styles.sliderText}>{hopValue}</Text>
                    </View>

                    {hopValue >= 1 &&
                        <View style={styles.rowView}>
                            <TextInput
                                style={styles.inputName}
                                theme={paperTheme}
                                label="Nome do lúpulo"
                                mode='outlined'
                                onChangeText={v => setNameHopOne(v)}
                                value={recipe.hops.nameHopOne}
                            />
                            <TextInput
                                style={styles.inputQuantity}
                                theme={paperTheme}
                                label="g"
                                mode='outlined'
                                onChangeText={v => setWeightHopOne(v)}
                                value={recipe.hops.weightHopOne}
                            />
                        </View>}

                    {hopValue >= 2 &&
                        <View style={styles.rowView}>
                            <TextInput
                                style={styles.inputName}
                                theme={paperTheme}
                                label="Nome do lúpulo"
                                mode='outlined'
                                onChangeText={v => setNameHopTwo(v)}
                                value={recipe.hops.nameHopTwo}
                            />
                            <TextInput
                                style={styles.inputQuantity}
                                theme={paperTheme}
                                label="g"
                                mode='outlined'
                                onChangeText={v => setWeightHopTwo(v)}
                                value={recipe.hops.weightHopTwo}
                            />
                        </View>}

                    {hopValue >= 3 &&
                        <View style={styles.rowView}>
                            <TextInput
                                style={styles.inputName}
                                theme={paperTheme}
                                label="Nome do lúpulo"
                                mode='outlined'
                                onChangeText={v => setNameHopThree(v)}
                                value={recipe.hops.nameHopThree}
                            />
                            <TextInput
                                style={styles.inputQuantity}
                                theme={paperTheme}
                                label="g"
                                mode='outlined'
                                onChangeText={v => setWeightHopThree(v)}
                                value={recipe.hops.weightHopThree}
                            />
                        </View>}

                    {hopValue >= 4 &&
                        <View style={styles.rowView}>
                            <TextInput
                                style={styles.inputName}
                                theme={paperTheme}
                                label="Nome do lúpulo"
                                mode='outlined'
                                onChangeText={v => setNameHopFour(v)}
                                value={recipe.hops.nameHopFour}
                            />
                            <TextInput
                                style={styles.inputQuantity}
                                theme={paperTheme}
                                label="g"
                                mode='outlined'
                                onChangeText={v => setWeightHopFour(v)}
                                value={recipe.hops.weightHopFour}
                            />
                        </View>}

                    {hopValue == 5 &&
                        <View style={styles.rowView}>
                            <TextInput
                                style={styles.inputName}
                                theme={paperTheme}
                                label="Nome do lúpulo"
                                mode='outlined'
                                onChangeText={v => setNameHopFive(v)}
                                value={recipe.hops.nameHopFive}
                            />
                            <TextInput
                                style={styles.inputQuantity}
                                theme={paperTheme}
                                label="g"
                                mode='outlined'
                                onChangeText={v => setWeightHopFive(v)}
                                value={recipe.hops.weightHopFive}
                            />
                        </View>}
                </View> :
                <View>
                    <Text style={styles.title}>Tempo de fervura e lúpulos : </Text>
                    <TextInput
                        style={styles.inputUnique}
                        theme={paperTheme}
                        label="Tempo de fervura (min)"
                        mode='outlined'
                        onChangeText={v => setBoilTime(v)}
                        value={recipe.boilTime}
                    />

                    {hopValue >= 1 &&
                    <TextInput
                        style={styles.inputUnique}
                        theme={paperTheme}
                        label="Tempo do lúpulo 1 (min)"
                        mode='outlined'
                        onChangeText={v => setTimeHopOne(v)}
                        value={recipe.hopstime.timeHopOne}
                    />}

                    {hopValue >= 2 &&
                    <TextInput
                        style={styles.inputUnique}
                        theme={paperTheme}
                        label="Tempo do lúpulo 2 (min)"
                        mode='outlined'
                        onChangeText={v => setTimeHopTwo(v)}
                        value={recipe.hopstime.timeHopTwo}
                    />}

                    {hopValue >= 3 &&
                    <TextInput
                        style={styles.inputUnique}
                        theme={paperTheme}
                        label="Tempo do lúpulo 3 (min)"
                        mode='outlined'
                        onChangeText={v => setTimeHopThree(v)}
                        value={recipe.hopstime.timeHopThree}
                    />}

                    {hopValue >= 4 &&
                    <TextInput
                        style={styles.inputUnique}
                        theme={paperTheme}
                        label="Tempo do lúpulo 4 (min)"
                        mode='outlined'
                        onChangeText={v => setTimeHopFour(v)}
                        value={recipe.hopstime.timeHopFour}
                    />}

                    {hopValue >= 5 &&
                    <TextInput
                        style={styles.inputUnique}
                        theme={paperTheme}
                        label="Tempo do lúpulo 5 (min)"
                        mode='outlined'
                        onChangeText={v => setTimeHopFive(v)}
                        value={recipe.hopstime.timeHopFive}
                    />}
                </View>
            }
        </View>
    )
}