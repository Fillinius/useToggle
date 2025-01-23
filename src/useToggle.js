import { useReducer } from 'react'

// Определяем редюсер
const toggleReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        index:
          state.index < state.values.length - 1
            ? state.index + (1 % state.values.length)
            : 0,
      }
    case 'SET':
      return {
        ...state,
        values: state.values.filter((item) => item === action.payload),
        index: 0,
      }
    case 'RESET':
      console.log('test', state)
      return {
        ...state,
        values: state.values,
        index: 0,
      }
    default:
      return state
  }
}

export function useToggle(initialValues) {
  const initialState = {
    values: initialValues,
    index: 0,
  }
  console.log(initialState)

  const [state, dispatch] = useReducer(toggleReducer, initialState)

  const toggle = (value) => {
    if (value !== undefined && value !== 'reset') {
      dispatch({ type: 'SET', payload: value })
    } else if (value === 'reset') {
      dispatch({ type: 'RESET' })
    } else {
      dispatch({ type: 'TOGGLE' })
    }
  }
  console.log(state)

  return [state.values[state.index], toggle]
}
