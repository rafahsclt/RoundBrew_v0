const Initial_State = {
    beerName: '',
    yeast: '',
    boilTime: '',
    brewTime: '',
    maturationTime: '',
    malts: {
        quantityMalts: 0,
        nameMaltOne: '',
        weightMaltOne: '',
        nameMaltTwo: '',
        weightMaltTwo: '',
        nameMaltThree: '',
        weightMaltThree: '',
        nameMaltFour: '',
        weightMaltFour: '',
        nameMaltFive: '',
        weightMaltFive: '',
    },
    ramps: {
        quantityRamps: 0,
        timeRampOne: '',
        tempRampOne: '',
        timeRampTwo: '',
        tempRampTwo: '',
        timeRampThree: '',
        tempRampThree: '',
        timeRampFour: '',
        tempRampFour: '',
        timeRampFive: '',
        tempRampFive: '',
    },
    hops: {
        quantityHops: 0,
        nameHopOne: '',
        weightHopOne: '',
        nameHopTwo: '',
        weightHopTwo: '',
        nameHopThree: '',
        weightHopThree: '',
        nameHopFour: '',
        weightHopFour: '',
        nameHopFive: '',
        weightHopFive: '',
    },
    hopstime: {
        timeHopOne: '',
        timeHopTwo: '',
        timeHopThree: '',
        timeHopFour: '',
        timeHopFive: ''
    }
}

function setRecipe(state = Initial_State, action) {
    switch (action.type) {
        case 'BEER_NAME':
            return { ...state, beerName: action.beerName }
        case 'BREW_TIME':
            return { ...state, brewTime: action.brewTime }
        case 'BOIL_TIME':
            return { ...state, boilTime: action.boilTime }
        case 'MATURATION_TIME':
            return { ...state, maturationTime: action.maturationTime }
        case 'YEAST':
            return { ...state, yeast: action.yeast }
        case 'QUANTITY_MALTS':
            return { ...state, malts: { ...state.malts, quantityMalts: action.quantityMalts } }
        case 'NAME_MALT_ONE':
            return { ...state, malts: { ...state.malts, nameMaltOne: action.nameMaltOne } }
        case 'NAME_MALT_TWO':
            return { ...state, malts: { ...state.malts, nameMaltTwo: action.nameMaltTwo } }
        case 'NAME_MALT_THREE':
            return { ...state, malts: { ...state.malts, nameMaltThree: action.nameMaltThree } }
        case 'NAME_MALT_FOUR':
            return { ...state, malts: { ...state.malts, nameMaltFour: action.nameMaltFour } }
        case 'NAME_MALT_FIVE':
            return { ...state, malts: { ...state.malts, nameMaltFive: action.nameMaltFive } }
        case 'WEIGHT_MALT_ONE':
            return { ...state, malts: { ...state.malts, weightMaltOne: action.weightMaltOne } }
        case 'WEIGHT_MALT_TWO':
            return { ...state, malts: { ...state.malts, weightMaltTwo: action.weightMaltTwo } }
        case 'WEIGHT_MALT_THREE':
            return { ...state, malts: { ...state.malts, weightMaltThree: action.weightMaltThree } }
        case 'WEIGHT_MALT_FOUR':
            return { ...state, malts: { ...state.malts, weightMaltFour: action.weightMaltFour } }
        case 'WEIGHT_MALT_FIVE':
            return { ...state, malts: { ...state.malts, weightMaltFive: action.weightMaltFive } }
        case 'QUANTITY_HOPS':
            return { ...state, hops: { ...state.hops, quantityHops: action.quantityHops } }
        case 'NAME_HOP_ONE':
            return { ...state, hops: { ...state.hops, nameHopOne: action.nameHopOne } }
        case 'NAME_HOP_TWO':
            return { ...state, hops: { ...state.hops, nameHopTwo: action.nameHopTwo } }
        case 'NAME_HOP_THREE':
            return { ...state, hops: { ...state.hops, nameHopThree: action.nameHopThree } }
        case 'NAME_HOP_FOUR':
            return { ...state, hops: { ...state.hops, nameHopFour: action.nameHopFour } }
        case 'NAME_HOP_FIVE':
            return { ...state, hops: { ...state.hops, nameHopFive: action.nameHopFive } }
        case 'WEIGHT_HOP_ONE':
            return { ...state, hops: { ...state.hops, weightHopOne: action.weightHopOne } }
        case 'WEIGHT_HOP_TWO':
            return { ...state, hops: { ...state.hops, weightHopTwo: action.weightHopTwo } }
        case 'WEIGHT_HOP_THREE':
            return { ...state, hops: { ...state.hops, weightHopThree: action.weightHopThree } }
        case 'WEIGHT_HOP_FOUR':
            return { ...state, hops: { ...state.hops, weightHopFour: action.weightHopFour } }
        case 'WEIGHT_HOP_FIVE':
            return { ...state, hops: { ...state.hops, weightHopFive: action.weightHopFive } }
        case 'TIME_HOP_ONE':
            return { ...state, hopstime: { ...state.hopstime, timeHopOne: action.timeHopOne } }
        case 'TIME_HOP_TWO':
            return { ...state, hopstime: { ...state.hopstime, timeHopTwo: action.timeHopTwo } }
        case 'TIME_HOP_THREE':
            return { ...state, hopstime: { ...state.hopstime, timeHopThree: action.timeHopThree } }
        case 'TIME_HOP_FOUR':
            return { ...state, hopstime: { ...state.hopstime, timeHopFour: action.timeHopFour } }
        case 'TIME_HOP_FIVE':
            return { ...state, hopstime: { ...state.hopstime, timeHopFive: action.timeHopFive } }
        case 'QUANTITY_RAMPS':
            return { ...state, ramps: { ...state.ramps, quantityRamps: action.quantityRamps } }
        case 'TIME_RAMP_ONE':
            return { ...state, ramps: { ...state.ramps, timeRampOne: action.timeRampOne } }
        case 'TIME_RAMP_TWO':
            return { ...state, ramps: { ...state.ramps, timeRampTwo: action.timeRampTwo } }
        case 'TIME_RAMP_THREE':
            return { ...state, ramps: { ...state.ramps, timeRampThree: action.timeRampThree } }
        case 'TIME_RAMP_FOUR':
            return { ...state, ramps: { ...state.ramps, timeRampFour: action.timeRampFour } }
        case 'TIME_RAMP_FIVE':
            return { ...state, ramps: { ...state.ramps, timeRampFive: action.timeRampFive } }
        case 'TEMP_RAMP_ONE':
            return { ...state, ramps: { ...state.ramps, tempRampOne: action.tempRampOne } }
        case 'TEMP_RAMP_TWO':
            return { ...state, ramps: { ...state.ramps, tempRampTwo: action.tempRampTwo } }
        case 'TEMP_RAMP_THREE':
            return { ...state, ramps: { ...state.ramps, tempRampThree: action.tempRampThree } }
        case 'TEMP_RAMP_FOUR':
            return { ...state, ramps: { ...state.ramps, tempRampFour: action.tempRampFour } }
        case 'TEMP_RAMP_FIVE':
            return { ...state, ramps: { ...state.ramps, tempRampFive: action.tempRampFive } }
        default:
            return state
    }
}

export default setRecipe