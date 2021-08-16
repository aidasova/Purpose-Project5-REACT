import React, { Component } from 'react';
import './Limit.css';
import { Link } from 'react-router-dom';
import store from '../../reducer/store';
import {add} from '../action/CardAction';
import Cardlist from '../Cardlist/Cardlist';

class Limit extends Component {

    constructor() {
        super();
        this.state = {
          //  cardlist: [], 
      //     infocard: [
              // {
          requiredAmount: "",
          targetTerm: "",
          startingAmount: "",
          depositInterest: ""
        }
    //]
  
  //  }
     }
      componentDidMount() {
        store.subscribe(() => {
            const globalState = store.getState(); //получить данные из глобального состояния
            this.setState({   //обновить локальное состояние
                cardlist: globalState.cardlist
            })
        })
    }

      handlerChange = (event) => {
        let name = event.target.name; //получаем название поля
        let value = event.target.value; // получаем значение поля
        this.setState({ 
            [name]: value,
        });
        console.log({ [name]: value });
      };
    
      onSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state)
        let cardPart = this.state
        store.dispatch({
            type: add,
            payload: cardPart,//отправили в редьюсер
        })
      }
    render() { 
        return (
            <div className="purpose_made">
                <div>w</div>
    

                <form className="form" onSubmit={this.onSubmit}>
                    <label>
                        <input
                        className="form_input"
                        name="requiredAmount"
                        type="text"
                        value={this.state.requiredAmount}
                        onChange={this.handlerChange}
                        />
                    </label>

                    <label>
                        <input
                        className="form_input"
                        name="targetTerm"
                        type="number"
                        value={this.state.targetTerm}
                        onChange={this.handlerChange}
                        />
                    </label>

                    <label>
                        <input
                        className="form_input"
                        name="startingAmount"
                        type="number"
                        value={this.state.startingAmount}
                        onChange={this.handlerChange}
                        />
                    </label>

                    <label>
                        <input
                        className="form_input"
                        name="depositInterest"
                        type="number"
                        value={this.state.depositInterest}
                        onChange={this.handlerChange}
                        />
                    </label>
                <input 
                 className="form_submit"
                  type="submit" 
                  value="Создать цель" 
                  />
                  <Link to={'/' }  className="btn">Временный возврат на главную</Link>
                </form>
            </div>
        );
    }
}
 
export default Limit;