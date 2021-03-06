import { getNumbers, calculateSum } from '../../shared/utility/sumGame';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        gameStarted: true,
        showPlayButton: false
      };
    case 'END_GAME':
      return {
        ...state,
        gameStarted: false,
        showPlayButton: true
      };
    case 'GENERATE_NUMBERS':
      return {
        ...state,
        numbers: getNumbers()
      };
    case 'GENERATE_TARGET':
      return {
        ...state,
        target: calculateSum([...state.numbers])
      };
    case 'ADD_NUMBER_TO_SUM':
      return {
        ...state,
        selectedNumbersSum: state.selectedNumbersSum + action.selectedNumber
      };
    case 'CLEAR_SELECTED_NUMBER_SUM':
      return {
        ...state,
        selectedNumbersSum: 0
      };
    case 'UPDATE_TIME':
      return {
        ...state,
        timer: state.timer - 1
      };
    case 'RESET_TIME':
      return {
        ...state,
        timer: 10
      };
    case 'UPDATE_START_BUTTON':
      return {
        ...state,
        playButtonText: 'Play again'
      };
    case 'SET_RESULT':
      return {
        ...state,
        result: action.result
      };
    default:
      return state;
  }
};