import React, { Component } from 'react';
import store from '../../reducer/store';
import { Redirect } from 'react-router-dom';
import './Main.css';
import {addPurpose} from '../action/CardAction';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            nameTarget: '',
        };
    }
   
    componentDidMount() {
        store.subscribe(() => {
          let globalState = store.getState();
          this.setState ({
            cardlist: globalState.cardlist
          })
        })
      }
    changeHandler = (e) => {
        let inputText = e.target.value
        this.setState({
            nameTarget: inputText,
        });
    }
       
    buttonClick = (e) => {
       // e.preventDefault();
        const dataPurpose =  this.state
        store.dispatch({
            type: addPurpose,
            payload:  dataPurpose,//отправили в редьюсер
        })
        }
    
    render() { 
        return this.state.id
       ? (<Redirect to={"/form/" + this.state.id}></Redirect>)
       : (
           
            <div>
            <div className="form_main">
                <h3 className="title">Мои цели</h3>
                <div className="block_input">
                    <input 
                        value={this.state.nameTarget}
                        name='input'
                        className="input_main" 
                        placeholder="добавить цель"
                        type="text"
                        onChange={this.changeHandler}
                        />
                    <button onClick={()=>this.buttonClick()} className="btn_add">ADD</button>
                </div>
            </div>
      
            </div>
        )
           
    }
}
export default Main;