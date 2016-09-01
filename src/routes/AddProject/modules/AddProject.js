const ADD_PROJECT = 'addProject';
import db from 'utils/IndexedDB'

function addProject() {
}
export default function addProjectReducer(state = {}, action) {
    switch (action.type) {
        case ADD_PROJECT:
            db.add('project', action)
            console.log('save done:', 'project', action);
            return state;
            break;
        default:
            return state;
    }
}

export function addAction(item) {
    return { type: ADD_PROJECT , item}
}
