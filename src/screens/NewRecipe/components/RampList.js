import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Slider from '@react-native-community/slider'
import { TextInput } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'

import styles, { paperTheme } from '../styles'

export default function RampList() {
    const recipe = useSelector(state => state.recipeState.ramps)
    const dispatch = useDispatch()

    const [rampValue, setRampValue] = useState(recipe.quantityRamps);

    function updateRampValue(value) {
        setRampValue(value)
        dispatch({
            type: 'QUANTITY_RAMPS',
            quantityRamps: value
        })
    }

    function setTimeRampOne(value){
        dispatch({
            type: 'TIME_RAMP_ONE',
            timeRampOne: value
        })
    }

    function setTimeRampTwo(value){
        dispatch({
            type: 'TIME_RAMP_TWO',
            timeRampTwo: value
        })
    }

    function setTimeRampThree(value){
        dispatch({
            type: 'TIME_RAMP_THREE',
            timeRampThree: value
        })
    }

    function setTimeRampFour(value){
        dispatch({
            type: 'TIME_RAMP_FOUR',
            timeRampFour: value
        })
    }

    function setTimeRampFive(value){
        dispatch({
            type: 'TIME_RAMP_FIVE',
            timeRampFive: value
        })
    }

    function setTempRampOne(value){
        dispatch({
            type: 'TEMP_RAMP_ONE',
            tempRampOne: value
        })
    }

    function setTempRampTwo(value){
        dispatch({
            type: 'TEMP_RAMP_TWO',
            tempRampTwo: value
        })
    }

    function setTempRampThree(value){
        dispatch({
            type: 'TEMP_RAMP_THREE',
            tempRampThree: value
        })
    }

    function setTempRampFour(value){
        dispatch({
            type: 'TEMP_RAMP_FOUR',
            tempRampFour: value
        })
    }

    function setTempRampFive(value){
        dispatch({
            type: 'TEMP_RAMP_FIVE',
            tempRampFive: value
        })
    }

    return (
        <View style={styles.inputView}>
            <Text style={styles.title}>Quantidade de rampas : </Text>
            <View style={styles.rowView}>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={5}
                    step={1}
                    minimumTrackTintColor="#FFA707"
                    maximumTrackTintColor="#000000"
                    value={rampValue}
                    onValueChange={val => updateRampValue(val)}
                />
                <Text style={styles.sliderText}>{rampValue}</Text>
            </View>

            {rampValue >= 1 &&
                <View style={styles.rowView}>
                    <TextInput
                        style={styles.inputSplit}
                        theme={paperTheme}
                        label="Rampa 1 (min)"
                        mode='outlined'
                        onChangeText={v => setTimeRampOne(v)}
                        value={recipe.timeRampOne}
                    />
                    <TextInput
                        style={styles.inputSplit}
                        theme={paperTheme}
                        label="Rampa 1 (ºC)"
                        mode='outlined'
                        onChangeText={v => setTempRampOne(v)}
                        value={recipe.tempRampOne}
                    />
                </View>}

            {rampValue >= 2 &&
                <View style={styles.rowView}>
                    <TextInput
                        style={styles.inputSplit}
                        theme={paperTheme}
                        label="Rampa 2 (min)"
                        mode='outlined'
                        onChangeText={v => setTimeRampTwo(v)}
                        value={recipe.timeRampTwo}
                    />
                    <TextInput
                        style={styles.inputSplit}
                        theme={paperTheme}
                        label="Rampa 2 (ºC)"
                        mode='outlined'
                        onChangeText={v => setTempRampTwo(v)}
                        value={recipe.tempRampTwo}
                    />
                </View>}

            {rampValue >= 3 &&
                <View style={styles.rowView}>
                    <TextInput
                        style={styles.inputSplit}
                        theme={paperTheme}
                        label="Rampa 3 (min)"
                        mode='outlined'
                        onChangeText={v => setTimeRampThree(v)}
                        value={recipe.timeRampThree}
                    />
                    <TextInput
                        style={styles.inputSplit}
                        theme={paperTheme}
                        label="Rampa 3 (ºC)"
                        mode='outlined'
                        onChangeText={v => setTempRampThree(v)}
                        value={recipe.tempRampThree}
                    />
                </View>}

            {rampValue >= 4 &&
                <View style={styles.rowView}>
                    <TextInput
                        style={styles.inputSplit}
                        theme={paperTheme}
                        label="Rampa 4 (min)"
                        mode='outlined'
                        onChangeText={v => setTimeRampFour(v)}
                        value={recipe.timeRampFour}
                    />
                    <TextInput
                        style={styles.inputSplit}
                        theme={paperTheme}
                        label="Rampa 4 (ºC)"
                        mode='outlined'
                        onChangeText={v => setTempRampFour(v)}
                        value={recipe.tempRampFour}
                    />
                </View>}

            {rampValue >= 5 &&
                <View style={styles.rowView}>
                    <TextInput
                        style={styles.inputSplit}
                        theme={paperTheme}
                        label="Rampa 5 (min)"
                        mode='outlined'
                        onChangeText={v => setTimeRampFive(v)}
                        value={recipe.timeRampFive}
                    />
                    <TextInput
                        style={styles.inputSplit}
                        theme={paperTheme}
                        label="Rampa 5 (ºC)"
                        mode='outlined'
                        onChangeText={v => setTempRampFive(v)}
                        value={recipe.tempRampFive}
                    />
                </View>}
        </View>
    )
}