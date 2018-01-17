import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function spreadDataReducer(state = initialState.spreadData, action) {
  switch (action.type) {
    case types.LOAD_SPREAD_DATA_SUCCESS:
      return {...state,
              ...action.spreadData};

    case types.UPDATE_SPREAD_DATA_SUCCESS:
      return {...state,
              ...action.spreadData};


    case types.UPDATE_SPREAD_DEFINITION:
      return { ...state,
               definition: {...action.definition}};

    case types.UPDATE_SPREAD_DATA:
      return { ...state,
                data: [...action.data]};

    case types.UPDATE_HEADER_CELL_DATA:
      const definitionUpdate = {...state.definition[action.data.field],
                                        label: action.data.value };

      return { ...state,
                definition: {
                  ...state.definition,
                 [action.data.field]:{
                   ...definitionUpdate
                 }
                }
            };


    case types.UPDATE_CELL_DATA:
      const newSpread = state.data.map((row, indexNow) => {
        if (action.data.index === indexNow) {
          return {
            ...row,
            [action.data.field]: action.data.value
          };
        }
        return row;
      });

      return { ...state,
        data: [...newSpread]};

    default:
      return state;
  }
}
