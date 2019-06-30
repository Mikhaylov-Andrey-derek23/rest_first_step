import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(function(state=[], action){
    if(action.type == "AddCours"){
        return[
            ...state, action.name
        ]
    } else if(action.type=="DeletCours"){
        const myState = [...state]
        myState.forEach((val, key)=>{
            if(val.name == action.name){
                myState.splice(key, 1);
            }
        })
        return myState;
    }
    return state;
});



store.subscribe(()=>{
     

});



ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , 
    document.getElementById('root')); 
