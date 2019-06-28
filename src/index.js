// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

import {createStore} from 'redux';

const store = createStore(function(state=[], action){
    if(action.type == "AddCours"){
        return[
            ...state, action.name
        ]
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





// ReactDOM.render(<App/>, document.getElementById('root')); 
