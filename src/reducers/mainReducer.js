let _ = require('lodash');

const CONVERT_JSON = 'CONVERT_JSON';
const ADD_UNIT = 'ADD_UNIT';

let initialState = {
    dependencies: {
        "m": 1,
        "cm": 100,
        "in": 39.370078,
        "ft": 3.280839
    },
    result: null,
};

const mainReducer = (state = initialState, action) => {
    let copyOfState;

    switch (action.type) {
        case CONVERT_JSON:
            {
                let newState = _.cloneDeep(state);
                if ((action.data[1] !== 0 && !action.data[1]) || action.data[1] < 0 || typeof action.data[1] !== 'number') {
                    alert('The value is not valid');
                    return newState;
                } else if (action.data[0] === "m") {
                    if (newState.dependencies[action.data[2]]) {
                        let val = newState.dependencies[action.data[2]];
                        newState.result = { unit: action.data[2], value: action.data[1] * val };
                    } else {
                        alert('There is no such unit of measure in the database: ' + action.data[2]);
                    }
                } else if (action.data[2] === "m") {
                    if (newState.dependencies[action.data[0]]) {
                        let val = newState.dependencies[action.data[0]];
                        newState.result = { unit: action.data[2], value: action.data[1] / val };
                    } else {
                        alert('There is no such unit of measure in the database: ' + action.data[0]);
                    }
                } else if (newState.dependencies[action.data[0]] && newState.dependencies[action.data[2]]) {
                    let val1 = newState.dependencies[action.data[0]], val2 = newState.dependencies[action.data[2]];
                    newState.result = { unit: action.data[2], value: action.data[1] / val1 * val2 };
                } else if (!newState.dependencies[action.data[0]]) {
                    alert('There is no such unit of measure in the database: ' + action.data[0]);
                } else if (!newState.dependencies[action.data[2]]) {
                    alert('There is no such unit of measure in the database: ' + action.data[2]);
                }

                copyOfState = newState;
            }; return copyOfState;
        case ADD_UNIT:
            {
                let newState = _.cloneDeep(state);

                if ((action.data[2] !== 0 && !action.data[2]) || action.data[2] < 0 || typeof (action.data[2]) !== Number) {
                    alert('The value is not valid');
                    return newState;
                } else if (newState.dependencies[action.data[0]] && newState.dependencies[action.data[1]]) {
                    alert('The data is already in the database');
                    return newState;
                } else if (!newState.dependencies[action.data[0]] && !newState.dependencies[action.data[1]]) {
                    alert('There are no units of measure with which to compare your');
                    return newState;
                } else if (newState.dependencies[action.data[0]]) {
                    alert('Success');
                    newState.dependencies[action.data[1]] = newState.dependencies[action.data[0]] * action.data[2];
                } else if (newState.dependencies[action.data[1]]) {
                    alert('Success');
                    newState.dependencies[action.data[0]] = newState.dependencies[action.data[1]] / action.data[2];
                }

                copyOfState = newState
            }; return copyOfState;
        default: {
            return state;
        }
    }
}

export const convert = (u1, v1, u2) => {
    return {
        type: CONVERT_JSON,
        data: [u1, v1, u2]
    }
}

export const add = (u1, u2, rat) => {
    return {
        type: ADD_UNIT,
        data: [u1, u2, rat]
    }
}

export default mainReducer;