
function logger(reducer) {
    return (state, action) => {

        console.group(action.type);

        console.log('Prev state: ', state);

        console.log('Action: ', action);

        const newState = reducer(state, action);

        console.log('new State: ', newState);

        console.groupEnd();

        return newState;
    }
}

export default logger;