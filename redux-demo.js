const redux = require('redux')

const conterReducer = (state={counter:0}, action) =>{
    if(action.type ==='increment'){
        return({
            counter: state.counter + 1,
        })
    }
    if(action.type ==='decrement'){
        return({
            counter: state.counter - 1,
        })
    }
}

const store = redux.createStore(conterReducer);

const storeSubscriber = () =>{
    const latestState = store.getState();
    console.log('%c latestState','background: green;padding: 2px',latestState)
}
store.subscribe(storeSubscriber);


store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})