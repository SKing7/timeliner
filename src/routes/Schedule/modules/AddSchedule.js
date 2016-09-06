const ADD = 'addSchedule';
const FETCH_LIST = 'getScheduleList';
const SHOW_LIST = 'showScheduleList';
import db from 'utils/IndexedDB'

export default function addScheduleReducer(state = {}, action) {
    switch (action.type) {
        case ADD:
            return state;
            break;
        case SHOW_LIST:
            return {...state, items: action.items};
            break;
        default:
            return state;
    }
}

export function addAction(items) {
    return (dispatch) => {
        dispatch({ type: ADD , items});

        return db.add('schedule', items).then(function () {
            return dispatch(fetchListAction())
        });
    }
}
export function fetchListAction() {
    return fetchList();
}
export function showListAction(items) {
    return { type: SHOW_LIST, items}
}

function fetchList() {
    return (dispatch) => {
        db.getAll('schedule').then(function (data) {
            return dispatch(showListAction(data))
        });
    }
}
