const ADD = 'addSchedule';
const FETCH_LIST = 'getScheduleList';
const SHOW_LIST = 'showScheduleList';
const SHOW_PROJECT = 'showProject';
import db from 'utils/IndexedDB'
import { List, Map } from 'immutable';

export default function addScheduleReducer(state = Map({}), action) {
  switch (action.type) {
  case ADD:
    return state;
    break;
  case SHOW_LIST:
    return Map({...state, items: action.items});
    break;
  case SHOW_PROJECT:
    return Map({...state, project: action.projectItem});
    break;
  default:
    return state;
  }
}

export function addAction(items, params) {
  return (dispatch) => {
    dispatch({ type: ADD , items});

    return db.add('schedule', items).then(function () {
      return dispatch(fetchListAction(params))
    });
  }
}

export function fetchListAction(params) {
  return fetchList(params);
}

export function fetchProjectInfoAction(params) {
  return fetchProjectInfo(params);
}

export function showListAction(items) {
  return { type: SHOW_LIST, items}
}

export function showProjectInfoAction(projectItem) {
  return { type: SHOW_PROJECT, projectItem}
}

function fetchList(params) {
  return (dispatch) => {
    db.getAll('schedule', params).then(function (data) {
      return dispatch(showListAction(data))
    });
  }
}
function fetchProjectInfo(params) {
  return (dispatch) => {
    db.getAll('project', params).then(function (data) {
      return dispatch(showProjectInfoAction(data[0]))
    });
  }
}
