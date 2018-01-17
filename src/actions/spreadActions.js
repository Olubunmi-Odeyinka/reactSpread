import SpreadDataApi from '../api/mockSpreadDataApi';
import * as types from '../constants/actionTypes';

export function loadSpreadDataSuccess(spreadData) {
  return {type: types.LOAD_SPREAD_DATA_SUCCESS, spreadData};
}

export function updateSpreadDataSuccess(spreadData) {
  return {type: types.UPDATE_SPREAD_DATA_SUCCESS, spreadData};
}

export function updateSpreadDefinition(definition) {
  return {type: types.UPDATE_SPREAD_DEFINITION, definition};
}

export function updateSpreadData(data) {
  return {type: types.UPDATE_SPREAD_DATA, data};
}

export function updateSpreadCell(data) {
  return {type: types.UPDATE_CELL_DATA, data};
}

export function updateHeaderCell(data) {
  return {type: types.UPDATE_HEADER_CELL_DATA, data};
}

export function loadSpreadDataAsync() {
  return dispatch => {
    //dispatch(beginAjaxCall());
    return SpreadDataApi.getSpreadData().then(spreadData => {
      dispatch(loadSpreadDataSuccess(spreadData));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateSpreadDataAsync(spreadData) {
  return dispatch => {
    //dispatch(beginAjaxCall());
    return SpreadDataApi.saveSpreadData(spreadData).then(spreadData => {
      dispatch(updateSpreadDataSuccess(spreadData));
    }).catch(error => {
      throw(error);
    });
  };
}
