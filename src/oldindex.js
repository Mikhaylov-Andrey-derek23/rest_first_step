// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

import {createStore} from 'redux';

const store = createStore(function(state=[], action){
    if(action.type == "AddCours"){
        return[
            ...state, action.name
        ]
    } else if(action.type=="DeletCours"){
        const myState = [...state]
        myState.forEach((val, key)=>{
            if(val == action.name){
                myState.splice(key, 1);
            }
        })
        return myState;
    }
    return state;
});



store.subscribe(()=>{
     console.log(store.getState());
     const ol = document.querySelector('ol');
     ol.innerHTML = '';
     store.getState().forEach(val=>{
         const li = document.createElement("li");
         li.innerHTML = val;
         ol.appendChild(li);
         li.addEventListener('click', function(){
            store.dispatch({
                type: "DeletCours",
                name : this.textContent
            })
         })
     })

});

// store.dispatch({
//     type: "AddCours",
//     name : ["React"]
// })

const but = document.querySelector("button");
but.addEventListener("click", (e)=>{
    e.preventDefault();
    const inp = document.querySelector("input");
    store.dispatch({
        type: "AddCours",
        name : inp.value
    })
    
})