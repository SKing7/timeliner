const ADD_PROJECT = 'addProject';
const GET_PROJECT_LIST = 'getProjectList';
const SHOW_PROJECT_LIST = 'showProjectList';
import db from 'utils/IndexedDB'

function addProject() {
}
export default function addProjectReducer(state = {}, action) {
    switch (action.type) {
        case ADD_PROJECT:
            return state;
            break;
        case SHOW_PROJECT_LIST:
            return {...state, items: action.items };
            break;
        case GET_PROJECT_LIST:
            return state;
            break;
        default:
            return state;
    }
}

export function addAction(items) {
    return (dispatch) => {
        dispatch({ type: ADD_PROJECT , items});
        return db.add('project', items).then(function () {
            return dispatch(fetchProjectListAction())
        });
    }
}
export function projectListAction(params) {
    return fetchProjectListAction(params);
}
export function showProjectListAction(items) {
    return { type: SHOW_PROJECT_LIST, items}
}

function fetchProjectListAction(params) {
    return (dispatch) => {
        db.getAll('project', params).then(function (data) {
            return dispatch(showProjectListAction(data))
        });
    }
}
