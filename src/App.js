import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    handlerChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handlerClick(event){
        event.preventDefault();
        this.props.addCours(this.state)
    }
    handlerDelet(name){
        this.props.deletCours(name)
    }

    render(){
        return(
           
            <div className="App">
                <form onSubmit={(event)=>this.handlerClick(event)}>
                    Name curs<input  onChange={(event) => this.handlerChange(event)} type="text" name="name" value={this.state.name}></input> 
                    Price <input  onChange={(event) => this.handlerChange(event)} type="text" name="price" value={this.state.price}></input>
                    Count <input onChange={(event) => this.handlerChange(event)} type="text" name="count" value={this.state.count}></input>
                    <button type="submit">Add cours</button>
                </form>
                <div>
                    {this.props.testStore.map(val =>
                        <div>
                            <p>
                                Name cours - {val.name}; price - {val.price} rub.; count mounth - {val.count}
                                <button onClick={()=>this.handlerDelet(val.name)}>
                                    <svg width="12px" height="12px">
                                        <text kerning="auto" fontFamily="Myriad Pro" fill="rgb(0, 0, 0)" transform="matrix( 0.70710678118655, 0.70710678118655, -0.70710678118655, 0.70710678118655,-5.09238407647331, 6.17889801564024)" fontSize="30px"><tspan fontSize="30px" fontFamily="Lato" fill="#303030">&#43;</tspan></text>
                                    </svg>
                                </button>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
export default connect(
    state =>({
        testStore : state
    }),
    dispatch=>({
        addCours: (courseName)=>{
            dispatch({
                type: "AddCours",
                name : courseName
            })
        },
        deletCours :(courseName)=>{
            dispatch({
                type: "DeletCours",
                name: courseName
            })
        }
    })
)(App)