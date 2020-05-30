import React from 'react'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'

import styles, { paperTheme } from '../styles'


export default function FirstList() {
    const recipe = useSelector(state => state.recipeState)
    const dispatch = useDispatch()

    function setBeerName(value) {
        dispatch({
            type: 'BEER_NAME',
            beerName: value
        })
    }

    function setYeast(value) {
        dispatch({
            type: 'YEAST',
            yeast: value
        })
    }

    function setBrewTime(value) {
        dispatch({
            type: 'BREW_TIME',
            brewTime: value
        })
    }

    function setMaturationTime(value) {
        dispatch({
            type: 'MATURATION_TIME',
            maturationTime: value
        })
    }

    return (
            <View style={styles.inputView}>
                <Text style={styles.title}>Cadastre uma nova receita : </Text>
                <TextInput
                    style={styles.inputUnique}
                    theme={paperTheme}
                    label="Nome da receita"
                    mode='outlined'
                    onChangeText={v => setBeerName(v)}
                    value={recipe.beerName}
                />
                <TextInput
                    style={styles.inputUnique}
                    theme={paperTheme}
                    label="Fermento"
                    mode='outlined'
                    onChangeText={v => setYeast(v)}
                    value={recipe.yeast}
                />
                <TextInput
                    style={styles.inputUnique}
                    theme={paperTheme}
                    label="Tempo de fermentação (dias)"
                    mode='outlined'
                    onChangeText={v => setBrewTime(v)}
                    value={recipe.brewTime}
                />
                <TextInput
                    style={styles.inputUnique}
                    theme={paperTheme}
                    label="Tempo de maturação (dias)"
                    mode='outlined'
                    onChangeText={v => setMaturationTime(v)}
                    value={recipe.maturationTime}
                />
            </View>
    )
}