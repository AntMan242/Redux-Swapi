import {FETCHING_CHARACTERS, FETCHING_CHARACTERS_FAILURE, FETCHING_CHARACTERS_SUCCESS} from '../actions'

const initialState = {
  fetching: false,
  characters: [],
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARACTERS:
      return {...state, fetching: true}
    case FETCHING_CHARACTERS_FAILURE:
      return {...state, fetching: false, error: action.payload}
    case FETCHING_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        fetching: false
      }

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
